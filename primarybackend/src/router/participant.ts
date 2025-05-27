import express from "express";
import { wrapAsync } from "../utils/wrapAsync";
import {
  banAndRemoveParticipant,
  joinQuiz,
  leaveQuiz,
  submitAnswer,
} from "../controllers/participant";
const router = express.Router();

router.post("/join/:quizId", wrapAsync(joinQuiz));
router.delete("/ban/:quizId", wrapAsync(banAndRemoveParticipant));
router.post("/answer/:questionId/", wrapAsync(submitAnswer));
router.delete("/leave/:quizId", wrapAsync(leaveQuiz));

export const participantRouter = router;
