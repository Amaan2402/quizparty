import { Request, Response } from "express";
import {
  createQuizDb,
  createQuizViaDiscordDb,
  deleteQuizDb,
  getQuizDb,
  getUserMyQuizzesDb,
  updateQuizDb,
} from "../helperfunctions/quiz";
import { getUser } from "../utils/getUser";
import { quizCreationSchema, updateQuizPayloadSchema } from "../utils/joi";

export const createQuiz = async (req: Request, res: Response) => {
  const { error } = quizCreationSchema.validate(req.body);
  if (error) {
    console.log("Validation error", error);
    return res.status(400).json({ message: error.details[0].message });
  }

  const quiz = await createQuizDb({ ...req.body, creatorId: req.user?.userId });
  return res
    .status(201)
    .json({ message: "Quiz created successfully", data: quiz });
};

export const createQuizDiscord = async (req: Request, res: Response) => {
  console.log("REQUEST RECEIVED - CREATE QUIZ DISCORD", req.body);

  if (
    !req.body.title ||
    !req.body.description ||
    !req.body.timePerQuestion ||
    !req.body.maxParticipants
  ) {
    return res.status(400).json({
      message:
        "Title, description, time per question, and max participants are required",
    });
  }
  const {
    title,
    description,
    timePerQuestion,
    maxParticipants,
    topic,
    aiPrompt,
    discordId,
  } = req.body;

  const quiz = await createQuizViaDiscordDb({
    discordId,
    title,
    description,
    timePerQuestion,
    maxParticipants,
    topic,
    aiPrompt,
  });

  return res.status(200).json({
    message: "Quiz created successfully",
    data: quiz,
  });
};

export const deleteQuiz = async (req: Request, res: Response) => {
  const { quizId } = req.params;
  if (!quizId) {
    return res.status(400).json({ message: "Quiz ID is required" });
  }
  const user = getUser(req);
  const quiz = await deleteQuizDb({ user, quizId });

  return res.status(200).json({
    message: "Quiz deleted successfully",
    data: quiz,
  });
};

export const editQuiz = async (req: Request, res: Response) => {
  console.log(req.body);
  const { error } = updateQuizPayloadSchema.validate(req.body);
  if (error) {
    console.log("Validation error", error);
    return res.status(400).json({ message: error.details[0].message });
  }

  const { quizId } = req.params;
  const { QuizFieldsToUpdate, RewardFieldsToUpdate } = req.body;
  const user = getUser(req);

  if (!quizId) {
    return res.status(400).json({ message: "Quiz ID is required" });
  }

  const updatedQuiz = await updateQuizDb({
    QuizFieldsToUpdate,
    RewardFieldsToUpdate,
    quizId,
    user,
  });
  return res.status(200).json({
    message: "Quiz updated successfully",
    data: updatedQuiz,
  });
};

export const getQuiz = async (req: Request, res: Response) => {
  const { quizId } = req.params;
  const user = getUser(req);
  if (!quizId) {
    return res.status(400).json({
      message: "Quiz ID is required",
    });
  }

  const quiz = await getQuizDb({ quizId, user });
  return res.status(200).json({
    message: "Quiz fetched successfully",
    data: quiz,
  });
};

export const getUserMyQuizzes = async (req: Request, res: Response) => {
  const user = getUser(req);
  const quizzes = await getUserMyQuizzesDb({ user });

  return res.status(200).json({
    message: "My quizzes fetched successfully",
    data: quizzes,
  });
};
