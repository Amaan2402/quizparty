import { Request, Response } from "express";
import { getUser } from "../utils/getUser";
import {
  handleLeaveQuiz,
  banAndRemoveParticipantDb,
  createAnswerDb,
  joinQuizdb,
} from "../helperfunctions/participant";

export const joinQuiz = async (req: Request, res: Response) => {
  const { quizId } = req.params;
  const user = getUser(req);

  if (!quizId) {
    return res.status(400).json({ message: "Quiz ID is required" });
  }

  const { participant, reconnected, reward, isQuizStarted, timePerQuestion } =
    await joinQuizdb({
      quizId,
      user,
    });

  return res.status(200).json({
    message: "JOINED_SUCCESSFULLY",
    participant: participant,
    reconnected: reconnected,
    isQuizStarted: isQuizStarted,
    timePerQuestion: timePerQuestion,
    reward,
  });
};
export const banAndRemoveParticipant = async (req: Request, res: Response) => {
  const { quizId } = req.params;
  const { participantId } = req.body;

  if (!quizId) {
    return res.status(400).json({ message: "Quiz ID is required" });
  }

  if (!participantId) {
    return res.status(400).json({ message: "Participant ID is required" });
  }

  const user = getUser(req);

  const removedParticipant = await banAndRemoveParticipantDb({
    quizId,
    participantId,
    user,
  });

  return res.status(200).json({
    message: "Participant banned and removed successfully",
    data: removedParticipant,
  });
};

export const submitAnswer = async (req: Request, res: Response) => {
  const questionId = req.params.questionId;
  console.log("REQ RECEIVED SUBMIT ANSWER", questionId);
  const { selectedOption } = req.body;
  const user = getUser(req);

  if (!questionId || typeof questionId !== "string") {
    return res
      .status(400)
      .json({ message: "Question ID is required and must be a string" });
  }

  if (
    selectedOption === null ||
    undefined ||
    typeof selectedOption !== "number"
  ) {
    return res.status(400).json({ message: "Selected option is required" });
  }

  await createAnswerDb({
    questionId,
    selectedOption,
    user,
  });

  return res.status(200).json({
    message: "Answer submitted successfully",
  });
};
export const leaveQuiz = async (req: Request, res: Response) => {
  const { quizId } = req.params;
  const user = getUser(req);
  if (!quizId) {
    return res.status(400).json({ message: "Quiz ID is required" });
  }

  const deletedParticipant = await handleLeaveQuiz({ quizId, user });
  return res.status(200).json({
    message: "Left quiz successfully",
    data: deletedParticipant,
  });
};
