import { Request, Response } from "express";
import {
  createQuestionDb,
  deleteQuizQuestionDb,
  editQuizQuestionDb,
  generateQuizQuestionAiDb,
  getQuizQuestions,
} from "../helperfunctions/question";
import { getUser } from "../utils/getUser";
import {
  aIQuestionGenerationSchema,
  QuestionSchema,
  questionupdateSchema,
} from "../utils/joi";

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

  const { quizId, quizTopic, quizDescription } = req.body;

  const user = getUser(req);
  const questions = await generateQuizQuestionAiDb({
    quizId,
    user,
    quizTopic,
    quizDescription,
  });
  return res.status(200).json({
    message: "Quiz questions generated successfully",
    data: questions,
  });
};

export const editQuestion = async (req: Request, res: Response) => {
  const { error } = questionupdateSchema.validate(
    req.body.questionUpdateFields
  );
  if (error) {
    console.log("Validation error", error);
    return res.status(400).json({ message: error.details[0].message });
  }

  const { questionId } = req.params;
  if (!questionId) {
    return res.status(400).json({ message: "Question ID is required" });
  }

  const user = getUser(req);
  const updateQuestion = await editQuizQuestionDb({
    ...req.body,
    questionId,
    user,
  });

  return res.status(200).json({
    message: "Question updated successfully",
    data: updateQuestion,
  });
};

export const getQuizQuestionsAll = async (req: Request, res: Response) => {
  const { quizId } = req.params;
  const user = getUser(req);
  if (!quizId) {
    return res.status(400).json({
      message: "Quiz ID is required",
    });
  }

  const questions = await getQuizQuestions({ quizId, user });
  return res.status(200).json({
    message: "Quiz questions fetched successfully",
    data: questions,
  });
};

export const deleteQuizQuestion = async (req: Request, res: Response) => {
  const { questionId } = req.params;
  if (!questionId) {
    return res.status(400).json({ message: "Question ID is required" });
  }

  const user = getUser(req);
  const question = await deleteQuizQuestionDb({
    questionId,
    user,
  });

  return res.status(200).json({
    message: "Question deleted successfully",
    data: question,
  });
};
