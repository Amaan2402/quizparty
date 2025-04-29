import {
  createAnswerDb,
  createQuestionDb,
  createQuizDb,
  generateQuizQuestionAiDb,
  getQuizResultsDb,
  joinQuizdb,
  updateQuizDbToStart,
} from "../helperfunctions/quiz";
import { getUser } from "../utils/getUser";
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

  const quiz = await createQuizDb({ ...req.body, user: req.user?.userId });
  return res
    .status(201)
    .json({ message: "Quiz created successfully", data: quiz });
};

export const startQuiz = async (req: Request, res: Response) => {
  const { quizId } = req.params;
  if (!quizId) {
    return res.status(400).json({ message: "Quiz ID is required" });
  }

  const user = getUser(req);

  const updateQuiz = await updateQuizDbToStart({ quizId, user });
  return res
    .status(200)
    .json({ message: "Quiz started successfully", data: updateQuiz });
};

export const createQuizQuestion = async (req: Request, res: Response) => {
  const { error } = QuestionSchema.validate(req.body);
  if (error) {
    console.log("Validation error", error);
    return res.status(400).json({ message: error.details[0].message });
  }

  const user = getUser(req);

  const question = await createQuestionDb({
    ...req.body,
    user,
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
  const user = getUser(req);
  const questions = await generateQuizQuestionAiDb({
    quizId,
    creatorId,
    user,
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
  const user = getUser(req);

  if (!quizId) {
    return res.status(400).json({ message: "Quiz ID is required" });
  }

  const { participant, reconnected } = await joinQuizdb({
    quizId,
    user,
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
  const { selectedOption } = req.body;
  const user = getUser(req);

  if (!questionId || typeof questionId !== "string") {
    return res
      .status(400)
      .json({ message: "Question ID is required and must be a string" });
  }

  if (!selectedOption || typeof selectedOption !== "number") {
    return res.status(400).json({ message: "Selected option is required" });
  }

  await createAnswerDb({
    questionId,
    selectedOption,
    user,
  });

  return res.status(200).json({
    message: "Answer submitted successfully",
  });
};

export const shortPollResults = async (req: Request, res: Response) => {
  const { quizId } = req.params;
  const user = getUser(req);

  if (!quizId) {
    return res.status(400).json({ message: "Quiz ID is required" });
  }

  const results = await getQuizResultsDb({ quizId, user });
  return res.status(200).json(results);
};
