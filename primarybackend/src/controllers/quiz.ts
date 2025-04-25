import {
  createAnswerDb,
  createQuestionDb,
  createQuizDb,
  generateQuizQuestionAiDb,
  joinQuizdb,
  updateQuizDbToStart,
} from "../helperfunctions/quiz";
import {
  aIQuestionGenerationSchema,
  QuestionSchema,
  quizCreationSchema,
} from "../utils/joi";
import { Request, Response } from "express";

export const createQuiz = async (req: Request, res: Response) => {
  const { error } = quizCreationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const quiz = await createQuizDb({ ...req.body, reqUser: req.user?.userId });
  return res
    .status(201)
    .json({ message: "Quiz created successfully", data: quiz });
};

export const startQuiz = async (req: Request, res: Response) => {
  const { quizId } = req.params;
  const reqUser = req?.user?.userId || "";

  if (!reqUser) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const updateQuiz = await updateQuizDbToStart({ quizId, reqUser });
  return res
    .status(200)
    .json({ message: "Quiz started successfully", data: updateQuiz });
};

export const createQuizQuestion = async (req: Request, res: Response) => {
  const { error } = QuestionSchema.validate(req.body);
  console.log(req.body);
  if (error) {
    console.log("Validation error", error);
    return res.status(400).json({ message: error.details[0].message });
  }

  const question = await createQuestionDb({
    ...req.body,
    reqUser: req.user?.userId,
  });
  return res
    .status(201)
    .json({ message: "Question created successfully", data: question });
};

export const generateQuizQuestionAi = async (req: Request, res: Response) => {
  const { error } = aIQuestionGenerationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const { quizId, creatorId, questionCount, quizTopic, quizDescription } =
    req.body;
  const questions = await generateQuizQuestionAiDb({
    quizId,
    creatorId,
    reqUser: req?.user?.userId || "",
    questionCount,
    quizTopic,
    quizDescription,
  });
  return res.status(200).json({
    message: "Quiz questions generated successfully",
    data: questions,
  });
};

export const joinQuiz = async (req: Request, res: Response) => {
  const { quizId } = req.params;
  const reqUser = req?.user?.userId || "";

  const { participant, reconnected } = await joinQuizdb({
    quizId,
    reqUser,
  });
  return res.status(200).json({
    message: "JOINED_SUCCESSFULLY",
    participant: participant,
    quizId: participant.quizId,
    reconnected: reconnected,
  });
};

export const submitAnswer = async (req: Request, res: Response) => {
  const questionId = req.params.questionId;
  const { participantId, selectedOption } = req.body;
  const reqUser = req?.user?.userId || "";

  if (!reqUser) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  await createAnswerDb({
    questionId,
    participantId,
    selectedOption,
    reqUser,
  });

  return res.status(200).json({
    message: "Answer submitted successfully",
  });
};
