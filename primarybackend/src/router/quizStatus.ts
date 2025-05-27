import express from "express";
import { wrapAsync } from "../utils/wrapAsync";
import { startQuiz, updateQuizToLive } from "../controllers/quizStatus";
const router = express.Router();

router.patch("/live/:quizId", wrapAsync(updateQuizToLive));
router.patch("/start/:quizId", wrapAsync(startQuiz));

export const quizStatusRouter = router;
