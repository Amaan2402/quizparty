import { Request, Response } from "express";
import { getUser } from "../utils/getUser";
import { sendResultsToParticipantsMail } from "../helperfunctions/result";
import {
  getQuizResultsDb,
  getUserDashboardAnalyticsDb,
} from "../helperfunctions/result";

export const longPollResults = async (req: Request, res: Response) => {
  const { quizId } = req.params;
  const user = getUser(req);

  if (!quizId) {
    return res.status(400).json({ message: "Quiz ID is required" });
  }

  const results = await getQuizResultsDb({ quizId, user });
  console.log("CONTROLLER RESULTS", results);
  return res.status(200).json(results);
};

export const getUserDashboardAnalytics = async (
  req: Request,
  res: Response
) => {
  const user = getUser(req);
  const dashboardAnalytics = await getUserDashboardAnalyticsDb(user);
  return res.status(200).json({
    message: "Dashboard analytics fetched successfully",
    data: dashboardAnalytics,
  });
};

export const sendResultsToParticipants = async (
  req: Request,
  res: Response
) => {
  const { quizId } = req.params;
  if (!quizId) {
    return res.status(400).json({ message: "Quiz ID is required" });
  }

  const user = getUser(req);

  const data = await sendResultsToParticipantsMail({
    quizId,
    user,
  });

  return res.status(200).json({
    message: "Results sent to participants successfully",
    status: data,
  });
};
