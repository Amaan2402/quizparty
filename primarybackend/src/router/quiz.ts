import express, { Request, Response } from "express";
import { wrapAsync } from "../utils/wrapAsync";
import {
  banAndRemoveParticipant,
  createQuiz,
  createQuizDiscord,
  createQuizQuestion,
  deleteQuiz,
  deleteQuizQuestion,
  editQuestion,
  editQuiz,
  generateQuizQuestionAi,
  getQuiz,
  getQuizQuestionsAll,
  getUserDashboardAnalytics,
  getUserMyQuizzes,
  joinQuiz,
  leaveQuiz,
  longPollResults,
  startQuiz,
  submitAnswer,
  updateQuizToLive,
} from "../controllers/quiz";
const router = express.Router();

router.post("/", wrapAsync(createQuiz));
router.post("/discord", wrapAsync(createQuizDiscord));
router.delete("/:quizId", wrapAsync(deleteQuiz));
router.get("/my-quizzes", wrapAsync(getUserMyQuizzes));
router.get("/:quizId", wrapAsync(getQuiz));
router.get("/dashboard/analytics", wrapAsync(getUserDashboardAnalytics));
router.patch("/:quizId", wrapAsync(editQuiz));
router.patch("/live/:quizId", wrapAsync(updateQuizToLive));
router.patch("/start/:quizId", wrapAsync(startQuiz));
router.post("/question", wrapAsync(createQuizQuestion));
router.patch("/question/:questionId", wrapAsync(editQuestion));
router.delete("/question/:questionId", wrapAsync(deleteQuizQuestion));
router.get("/question/:quizId/all", wrapAsync(getQuizQuestionsAll));
router.post("/question/ai", wrapAsync(generateQuizQuestionAi));
router.post("/join/:quizId", wrapAsync(joinQuiz));
router.post("/answer/:questionId/", wrapAsync(submitAnswer));
router.get("/:quizId/result", wrapAsync(longPollResults));
router.delete("/ban/:quizId", wrapAsync(banAndRemoveParticipant));
router.delete("/leave/:quizId", wrapAsync(leaveQuiz));

export default router;
