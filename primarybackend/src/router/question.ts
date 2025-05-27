import express from "express";
import { wrapAsync } from "../utils/wrapAsync";
import {
  createQuizQuestion,
  deleteQuizQuestion,
  editQuestion,
  generateQuizQuestionAi,
  getQuizQuestionsAll,
} from "../controllers/question";
const router = express.Router();

router.post("/", wrapAsync(createQuizQuestion));
router.post("/ai", wrapAsync(generateQuizQuestionAi));
router.patch("/:questionId", wrapAsync(editQuestion));
router.get("/:quizId/all", wrapAsync(getQuizQuestionsAll));
router.delete("/:questionId", wrapAsync(deleteQuizQuestion));

export const questionRouter = router;
