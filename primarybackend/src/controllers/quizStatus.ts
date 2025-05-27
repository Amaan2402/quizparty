import { Request, Response } from "express";
import { getUser } from "../utils/getUser";
import {
  updateQuizDbToLive,
  updateQuizDbToStart,
} from "../helperfunctions/quizStatus";

export const updateQuizToLive = async (req: Request, res: Response) => {
  const { quizId } = req.params;
  const { isDiscord = false, discordUserId = "" } = req.query;

  if (!quizId) {
    return res.status(400).json({ message: "Quiz ID is required" });
  }

  let user;
  if (!isDiscord) {
    user = getUser(req);
  }

  if (isDiscord && !discordUserId) {
    return res.status(400).json({ message: "Discord user ID is required" });
  }

  const updatedQuiz = await updateQuizDbToLive({
    user: user ? user : "",
    discordUserId: typeof discordUserId === "string" ? discordUserId : "",
    quizId,
    isDiscord: isDiscord ? true : false,
  });

  return res.status(200).json({
    message: "Quiz updated to live successfully",
    data: updatedQuiz,
  });
};

export const startQuiz = async (req: Request, res: Response) => {
  const { quizId } = req.params;
  const { isDiscord = false, discordUserId } = req.query;

  if (!quizId) {
    return res.status(400).json({ message: "Quiz ID is required" });
  }

  let user;
  if (!isDiscord) {
    user = getUser(req);
  }

  if (isDiscord && !discordUserId) {
    return res.status(400).json({ message: "Discord user ID is required" });
  }

  const updateQuiz = await updateQuizDbToStart({
    quizId,
    user: user ? user : "",
    discordUserId: typeof discordUserId === "string" ? discordUserId : "",
    isDiscord: isDiscord ? true : false,
  });
  return res
    .status(200)
    .json({ message: "Quiz started successfully", data: updateQuiz });
};
