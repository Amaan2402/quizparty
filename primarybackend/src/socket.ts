import { Server } from "socket.io";
import { CustomError } from "./utils/CustomError";
import {
  toggleUserConnectionStatus,
  toggleUserDisconnectionStatus,
} from "./utils/userConnection";

type ParticipantSocketsMap = {
  socketId: string;
  participantId: string;
  quizId: string;
};

const participantSocketsMap: ParticipantSocketsMap[] = [];
let io: Server;

function initialiseSocket(server: any) {
  console.log("Starting socket server...");

  io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  if (io) {
    io.on("error", (error) => {
      console.error("Socket error:", error);
      throw new CustomError("Socket error", 500);
    });

    io.on("connection", (socket) => {
      socket.on("join-room", (data) => {
        const { participantId, quizId } = data;
        socket.join(quizId);

        const existingSocket = participantSocketsMap.find(
          (s: ParticipantSocketsMap) =>
            s.participantId === participantId && s.quizId === quizId
        );

        if (existingSocket) {
          existingSocket.socketId = socket.id;
        } else {
          participantSocketsMap.push({
            socketId: socket.id,
            participantId: data.participantId,
            quizId: data.quizId,
          });
        }

        io.to(quizId).emit("update_participant_list", {
          participantSocketsMap: participantSocketsMap.filter(
            (socket: ParticipantSocketsMap) => socket.quizId === quizId
          ),
        });

        io.to(quizId).emit("new-participant", {
          message: `A new participant has joined room: ${quizId}`,
          participantId: socket.data.participantId,
        });

        toggleUserConnectionStatus(participantId);
      });

      socket.on("start-quiz", (data) => {
        const { roomId } = data;
        socket.to(roomId).emit("start-quiz", {
          message: `The quiz has started!`,
        });
        console.log("Quiz started in room:", roomId);
      });

      socket.on("disconnect", () => {
        console.log("A user disconnected ⛓️‍💥", socket.id);

        const foundSocket = participantSocketsMap.find(
          (s: ParticipantSocketsMap) => s.socketId === socket.id
        );

        if (foundSocket) {
          participantSocketsMap.splice(
            participantSocketsMap.indexOf(foundSocket),
            1
          );
          io.to(foundSocket.quizId).emit("update_participant_list", {
            participantSocketsMap: participantSocketsMap.filter(
              (socket: ParticipantSocketsMap) =>
                socket.quizId === foundSocket.quizId
            ),
          });

          toggleUserDisconnectionStatus(foundSocket.participantId);
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

export { initialiseSocket, getIo };
