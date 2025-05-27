import express from "express";
import {
  createQuiz,
  createQuizDiscord,
  deleteQuiz,
  editQuiz,
  getQuiz,
  getUserMyQuizzes,
} from "../controllers/quiz";
import { wrapAsync } from "../utils/wrapAsync";
const router = express.Router();

router.post("/", wrapAsync(createQuiz));
router.post("/discord", wrapAsync(createQuizDiscord));
router.delete("/:quizId", wrapAsync(deleteQuiz));
router.get("/my-quizzes", wrapAsync(getUserMyQuizzes));
router.get("/:quizId", wrapAsync(getQuiz));
router.patch("/:quizId", wrapAsync(editQuiz));

export default router;
