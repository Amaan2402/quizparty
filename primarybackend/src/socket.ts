import { Server } from "socket.io";
import { CustomError } from "./utils/CustomError";
import {
  toggleUserConnectionStatus,
  toggleUserDisconnectionStatus,
} from "./utils/userConnection";
import {
  handleJoinRoom,
  handleJoinRoomCreator,
  handleVerifyToken,
} from "./utils/socket";

import { parse } from "cookie";

type UserType = "CREATOR" | "PARTICIPANT";

type SocketsMap = {
  socketId: string;
  participantId: string | null;
  creatorId: string | null;
  quizId: string;
  type: UserType;
};

const socketsMap: SocketsMap[] = [];
let io: Server;

function initialiseSocket(server: any) {
  io = new Server(server, {
    cors: {
      origin: ["http://localhost:3000", "https://quizparty.amaan24.tech"],
      credentials: true,
    },
  });

  if (io) {
    io.use((socket, next) => {
      try {
        const rawCookie = socket.handshake.headers.cookie;
        if (!rawCookie) {
          const err = new CustomError("No cookie found", 401);
          return next(err); // Standard Error object
        }

        const parsedCookies = parse(rawCookie);
        const token = parsedCookies.token;
        if (!token) {
          const err = new CustomError("No token found in cookies", 401);
          return next(err); // Standard Error object
        }

        const user = handleVerifyToken(token);
        if (!user) {
          const err = new CustomError("Invalid token", 401);
          return next(err); // Standard Error object
        }
        socket.data.user = user;

        // Proceed if cookie exists
        next();
      } catch (error) {
        console.error("Socket auth failed:", (error as Error).message);
        // Don't throw or crash — pass the error back to the client
        return next(new Error("Authentication failed"));
      }
    });

    io.on("error", (error) => {
      console.error("Socket error:", error);
      throw new CustomError("Socket error", 500);
    });

    io.on("connection", (socket) => {
      console.log("A user connected 🔗", socket.id);
      socket.on("join-room", async (data) => {
        try {
          const { id, quizId, type = "PARTICIPANT" } = data;
          console.log(data);
          if (type === "CREATOR") {
            const creatorId = socket.data.user.userId;

            const room = await handleJoinRoomCreator({ quizId, creatorId });
            if (room?.status) {
              const existingSocket = socketsMap.find(
                (s: SocketsMap) => s.creatorId === creatorId
              );

              if (existingSocket) {
                existingSocket.socketId = socket.id;
              } else {
                socketsMap.push({
                  socketId: socket.id,
                  participantId: null,
                  creatorId: creatorId,
                  quizId: quizId,
                  type: "CREATOR",
                });
                console.log("Added new socket:", socketsMap);
              }
              socket.join(quizId);
              return;
            } else {
              const err = new CustomError(room?.message, 401);
              return socket.emit("error-join-room", err);
            }
          }

          const user = socket.data.user;

          const room = await handleJoinRoom({
            participantId: id,
            quizId,
            user,
          });

          if (!room.status) {
            const err = new CustomError(room.message, 401);
            return socket.emit("error-join-room", err);
          }

          const existingSocket = socketsMap.find(
            (s: SocketsMap) => s.participantId === id && s.quizId === quizId
          );

          if (existingSocket) {
            existingSocket.socketId = socket.id;
          } else {
            socketsMap.push({
              socketId: socket.id,
              participantId: id,
              creatorId: null,
              quizId: quizId,
              type: type,
            });
            console.log("Added new socket:", socketsMap);
          }

          socket.join(quizId);

          console.log("Participant sockets map after joining:", socketsMap);

          io.to(quizId).emit("new-participant", {
            message: `A new participant has joined room: ${quizId}`,
            data: room,
          });

          await toggleUserConnectionStatus(id);
        } catch (err: unknown) {
          console.log("Error joining room:", (err as Error).message);
          socket.emit("error-join-room", {
            message: "Error joining room",
            error: (err as Error).message,
          });
        }
      });

      socket.on("disconnect", async () => {
        console.log("A user disconnected ⛓️‍💥", socket.id);

        const foundSocket = socketsMap.find(
          (s: SocketsMap) => s.socketId === socket.id
        );

        if (foundSocket?.type === "PARTICIPANT" && foundSocket?.participantId) {
          socketsMap.splice(socketsMap.indexOf(foundSocket), 1);
          io.to(foundSocket.quizId).emit("participant_disconnected", {
            participantId: foundSocket.participantId,
            message: "A participant has disconnected",
          });

          await toggleUserDisconnectionStatus(foundSocket.participantId);
        } else if (foundSocket?.type === "CREATOR" && foundSocket?.creatorId) {
          socketsMap.splice(socketsMap.indexOf(foundSocket), 1);
        }
      });
    });
  }
}

const getIo = () => {
  if (!io) {
    throw new Error("Socket.io is not initialized");
  }
  return io;
};

export { initialiseSocket, getIo, socketsMap };
