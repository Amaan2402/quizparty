import express from "express";
import { wrapAsync } from "../utils/wrapAsync";
import {
  createQuiz,
  createQuizQuestion,
  generateQuizQuestionAi,
  joinQuiz,
  shortPollResults,
  startQuiz,
  submitAnswer,
} from "../controllers/quiz";
const router = express.Router();

router.post("/", wrapAsync(createQuiz));
router.patch("/start/:quizId", wrapAsync(startQuiz));
router.post("/question", wrapAsync(createQuizQuestion));
router.get("/question/ai", wrapAsync(generateQuizQuestionAi));
router.post("/join/:quizId", wrapAsync(joinQuiz));
router.post("/answer/:questionId/", wrapAsync(submitAnswer));

router.get("/:quizId/result-status", wrapAsync(shortPollResults));

export default router;
