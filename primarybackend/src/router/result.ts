import express from "express";
import { wrapAsync } from "../utils/wrapAsync";
import {
  getUserDashboardAnalytics,
  longPollResults,
  sendResultsToParticipants,
} from "../controllers/result";
const router = express.Router();

router.get("/dashboard/analytics", wrapAsync(getUserDashboardAnalytics));
router.get("/:quizId", wrapAsync(longPollResults));
router.post("/:quizId/send-results-mail", wrapAsync(sendResultsToParticipants));

export const resultRouter = router;
