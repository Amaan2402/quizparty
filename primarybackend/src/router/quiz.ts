import express from "express";
import { wrapAsync } from "../utils/wrapAsync";
import {
  banAndRemoveParticipant,
  createQuiz,
  createQuizQuestion,
  deleteQuiz,
  deleteQuizQuestion,
  editQuestion,
  editQuiz,
  generateQuizQuestionAi,
  getQuiz,
  getQuizQuestionsAll,
  getUserMyQuizzes,
  joinQuiz,
  longPollResults,
  startQuiz,
  submitAnswer,
} from "../controllers/quiz";
const router = express.Router();

router.post("/", wrapAsync(createQuiz));
router.delete("/:quizId", wrapAsync(deleteQuiz));
router.get("/my-quizzes", wrapAsync(getUserMyQuizzes));
router.get("/:quizId", wrapAsync(getQuiz));
router.patch("/:quizId", wrapAsync(editQuiz));
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

export default router;
