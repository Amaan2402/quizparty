import { CustomError } from "./CustomError";
import { prisma } from "@amaan2202/prisma-client";
import jwt from "jsonwebtoken";

export const handleJoinRoom = async ({
  participantId,
  quizId,
  user,
}: {
  participantId: string;
  quizId: string;
  user: {
    userId: string;
    email: string;
  };
}) => {
  if (!participantId || !quizId) {
    return {
      status: null,
      message: "Participant ID and Quiz ID are required",
    };
  }

  const participant = await prisma.participant.findUnique({
    where: {
      id: participantId,
      quizId: quizId,
    },
    include: {
      User: {
        select: {
          id: true,
          email: true,
          name: true,
        },
      },
      Quiz: {
        select: {
          status: true,
        },
      },
    },
  });
  if (!participant) {
    return {
      status: null,
      message: "Participant not found",
    };
  }

  if (participant.userId !== user.userId) {
    return {
      status: 403,
      message: "User not authorized to join this room",
    };
  }

  if (participant.isBanned) {
    return {
      status: null,
      message: "Participant is banned",
    };
  }

  if (participant.isConnected) {
    return {
      status: null,
      message: "Participant already connected",
    };
  }

  if (
    participant.Quiz.status === "ENDED" ||
    participant.Quiz.status === "CREATED"
  ) {
    return {
      status: null,
      message: "Quiz has ended or not started yet",
    };
  }

  return {
    status: true,
    message: "Participant joined successfully",
    participant: {
      id: participant.id,
      User: {
        id: participant.User.id,
        email: participant.User.email,
        name: participant.User.name,
      },
    },
  };
};

export const handleJoinRoomCreator = async ({
  creatorId,
  quizId,
}: {
  creatorId: string;
  quizId: string;
}) => {
  try {
    const quiz = await prisma.quiz.findUnique({
      where: {
        id: quizId,
      },
    });

    if (!quiz) {
      return {
        status: null,
        message: "Quiz not found",
      };
    }

    if (quiz.creatorId !== creatorId) {
      return {
        status: null,
        message: "User not authorized to join this room",
      };
    }

    if (quiz.status === "CREATED") {
      return {
        status: null,
        message: "Quiz not started yet",
      };
    }

    if (quiz.status === "ENDED") {
      return {
        status: null,
        message: "Quiz has ended",
      };
    }

    return {
      status: true,
      message: "Creator joined successfully",
    };
  } catch (error) {
    console.error("Error joining room creator:", (error as Error).message);
    return {
      status: false,
      message: "Error joining room creator",
    };
  }
};

export const handleVerifyToken = (token: string) => {
  if (process.env.JWT_SECRET) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (typeof decoded === "object" && decoded !== null) {
      return {
        userId: decoded.userId,
        email: decoded.email,
      };
    }

    return null;
  }

  return null;
};

export const handleResetParticipantConnectionStatus = async () => {
  try {
    const data = await prisma.participant.updateManyAndReturn({
      where: {
        Quiz: {
          status: "LIVE",
        },
        isConnected: true,
      },
      data: {
        isConnected: false,
      },
    });
    console.log(data);
    console.log("Participant connection status reset successfully");
  } catch (error) {
    console.log("Error resetting participant connection status:", error);
    throw new CustomError("Failed to reset participant connection status", 500);
  }
};
