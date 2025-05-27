import { prisma } from "@amaan2202/prisma-client";
import { getIo, socketsMap } from "../socket";
import { CustomError } from "../utils/CustomError";

export const joinQuizdb = async ({
  quizId,
  user,
}: {
  quizId: string;
  user: string;
}) => {
  try {
    const quiz = await prisma.quiz.findUnique({
      where: {
        id: quizId,
      },
      include: {
        Reward: true,
        Participant: true,
      },
    });

    if (!quiz) throw new CustomError("Quiz not found", 404);
    if (quiz.creatorId === user) {
      throw new CustomError("You cannot join your own quiz", 403);
    }

    if (quiz.status === "ENDED") {
      throw new CustomError("Quiz has already ended", 400);
    }

    if (quiz.Participant.length + 1 === quiz.maxParticipants) {
      throw new CustomError("Quiz is full - maximum participants reached", 400);
    }

    const participant = await prisma.participant.findUnique({
      where: {
        userId_quizId: {
          quizId,
          userId: user,
        },
      },
    });

    if (participant?.isBanned) {
      throw new CustomError("You are banned from this quiz", 403);
    }

    if (participant?.isConnected) {
      throw new CustomError("You are already connected to this quiz", 400);
    }

    if (participant) {
      if (quiz.status === "LIVE") {
        return {
          participant: participant,
          reconnected: true,
          isQuizStarted: false,
          timePerQuestion: quiz.timePerQuestion,
          reward: quiz.Reward,
        };
      } else if (quiz.status === "STARTED") {
        return {
          participant: participant,
          reconnected: true,
          isQuizStarted: true,
          timePerQuestion: quiz.timePerQuestion,
          reward: quiz.Reward,
        };
      } else {
        throw new CustomError("Quiz is not in a valid state to join", 400);
      }
    } else {
      if (quiz.status !== "LIVE") {
        throw new CustomError("Quiz is not in a valid state to join", 400);
      }
      const newParticipant = await prisma.participant.create({
        data: {
          quizId,
          userId: user,
          isConnected: false,
        },
      });

      return {
        participant: newParticipant,
        reconnected: false,
        isQuizStarted: false,
        timePerQuestion: quiz.timePerQuestion,
        reward: quiz.Reward,
      };
    }
  } catch (error) {
    console.log(error);
    if (error instanceof CustomError) {
      throw error;
    }

    throw new CustomError("Failed to join quiz", 500);
  }
};
export const banAndRemoveParticipantDb = async ({
  user,
  participantId,
  quizId,
}: {
  user: string;
  participantId: string;
  quizId: string;
}) => {
  try {
    const quiz = await prisma.quiz.findUnique({
      where: {
        id: quizId,
      },
      include: {
        Participant: true,
      },
    });

    if (!quiz) {
      throw new CustomError("Quiz not found", 404);
    }

    if (quiz.creatorId !== user) {
      throw new CustomError(
        "You are not authorized to remove this participant",
        403
      );
    }

    const participant = quiz.Participant.find((p) => p.id === participantId);
    if (!participant) {
      throw new CustomError("Participant not found", 404);
    }

    const updatedParticipant = await prisma.participant.update({
      where: {
        id: participantId,
      },
      data: {
        isBanned: true,
      },
    });

    const io = getIo();

    const socketId = socketsMap.find((s) => s.participantId === participantId);
    if (socketId) {
      io.to(socketId.socketId).emit("participant-banned", {
        message: "You have been banned from this quiz",
      });
    }

    return updatedParticipant;
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError("Failed to ban participant", 500);
  }
};
export const createAnswerDb = async ({
  questionId,
  selectedOption,
  user,
}: {
  questionId: string;
  selectedOption: number;
  user: string;
}) => {
  try {
    const question = await prisma.question.findUnique({
      where: {
        id: questionId,
      },
      include: {
        Quiz: {
          include: {
            Participant: {
              include: {
                User: true,
              },
            },
          },
        },
      },
    });

    if (!question) {
      throw new CustomError("Question not found", 404);
    }

    if (question.Quiz.status !== "STARTED") {
      throw new CustomError("Quiz is not ongoing", 400);
    }
    if (question.Quiz.creatorId === user) {
      throw new CustomError("You cannot answer your own question", 403);
    }

    const participant = question.Quiz.Participant.find(
      (p) => p.User.id === user
    );
    if (!participant) {
      throw new CustomError("You are not a participant in this quiz", 403);
    }

    if (participant.isBanned) {
      throw new CustomError("You are banned from this quiz", 403);
    }

    await prisma.$transaction(async (tx) => {
      const answer = await tx.answer.create({
        data: {
          questionId,
          participantId: participant.id,
          selectedOption,
        },
      });

      await tx.answerOutbox.create({
        data: {
          answerId: answer.id,
        },
      });
    });
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError("Failed to create answer", 500);
  }
};
export const handleLeaveQuiz = async ({
  user,
  quizId,
}: {
  user: string;
  quizId: string;
}) => {
  const quiz = await prisma.quiz.findUnique({
    where: {
      id: quizId,
    },
  });

  console.log(quiz);

  if (!quiz) {
    throw new CustomError("Quiz not found", 404);
  }

  const participant = await prisma.participant.findUnique({
    where: {
      userId_quizId: {
        userId: user,
        quizId,
      },
    },
  });

  console.log(participant);

  if (!participant) {
    throw new CustomError("Participant not found", 404);
  }

  if (participant.isBanned) {
    throw new CustomError("You are banned from this quiz", 403);
  }

  if (quiz.status === "LIVE") {
    const deletedParticipant = await prisma.participant.delete({
      where: {
        id: participant.id,
      },
    });

    return deletedParticipant;
  }

  if (quiz.status === "STARTED") {
    throw new CustomError("You cannot leave the quiz that has started", 400);
  }

  throw new CustomError("You cannot leave the quiz that is not live", 400);
};
