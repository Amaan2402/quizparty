import {
  banAndRemoveParticipantDb,
  createAnswerDb,
  createQuestionDb,
  createQuizDb,
  createQuizViaDiscordDb,
  deleteQuizDb,
  deleteQuizQuestionDb,
  editQuizQuestionDb,
  generateQuizQuestionAiDb,
  getQuizDb,
  getQuizResultsDb,
  getUserDashboardAnalyticsDb,
  getUserMyQuizzesDb,
  handleLeaveQuiz,
  joinQuizdb,
  updateQuizDb,
  updateQuizDbToLive,
  updateQuizDbToStart,
} from "../helperfunctions/quiz";
import { getUser } from "../utils/getUser";
import {
  aIQuestionGenerationSchema,
  QuestionSchema,
  questionupdateSchema,
  quizCreationSchema,
  updateQuizPayloadSchema,
} from "../utils/joi";
import { Request, Response } from "express";
import { getQuizQuestions } from "../helperfunctions/quiz";

export const createQuiz = async (req: Request, res: Response) => {
  const { error } = quizCreationSchema.validate(req.body);
  if (error) {
    console.log("Validation error", error);
    return res.status(400).json({ message: error.details[0].message });
  }

  const quiz = await createQuizDb({ ...req.body, creatorId: req.user?.userId });
  return res
    .status(201)
    .json({ message: "Quiz created successfully", data: quiz });
};

export const createQuizDiscord = async (req: Request, res: Response) => {
  const {
    title,
    description,
    timePerQuestion,
    maxParticipants,
    topic,
    aiPrompt,
    discordId,
  } = req.body;
  const quiz = await createQuizViaDiscordDb({
    discordId,
    title,
    description,
    timePerQuestion,
    maxParticipants,
    topic,
    aiPrompt,
  });

  return res.status(200).json({
    message: "Quiz created successfully",
    data: quiz,
  });
};

export const deleteQuiz = async (req: Request, res: Response) => {
  const { quizId } = req.params;
  if (!quizId) {
    return res.status(400).json({ message: "Quiz ID is required" });
  }
  const user = getUser(req);
  const quiz = await deleteQuizDb({ user, quizId });

  return res.status(200).json({
    message: "Quiz deleted successfully",
    data: quiz,
  });
};

export const editQuiz = async (req: Request, res: Response) => {
  console.log(req.body);
  const { error } = updateQuizPayloadSchema.validate(req.body);
  if (error) {
    console.log("Validation error", error);
    return res.status(400).json({ message: error.details[0].message });
  }

  const { quizId } = req.params;
  const { QuizFieldsToUpdate, RewardFieldsToUpdate } = req.body;
  const user = getUser(req);

  if (!quizId) {
    return res.status(400).json({ message: "Quiz ID is required" });
  }

  const updatedQuiz = await updateQuizDb({
    QuizFieldsToUpdate,
    RewardFieldsToUpdate,
    quizId,
    user,
  });
  return res.status(200).json({
    message: "Quiz updated successfully",
    data: updatedQuiz,
  });
};

export const getQuiz = async (req: Request, res: Response) => {
  const { quizId } = req.params;
  const user = getUser(req);
  if (!quizId) {
    return res.status(400).json({
      message: "Quiz ID is required",
    });
  }

  const quiz = await getQuizDb({ quizId, user });
  return res.status(200).json({
    message: "Quiz fetched successfully",
    data: quiz,
  });
};

export const getUserMyQuizzes = async (req: Request, res: Response) => {
  const user = getUser(req);
  const quizzes = await getUserMyQuizzesDb({ user });

  return res.status(200).json({
    message: "My quizzes fetched successfully",
    data: quizzes,
  });
};

export const updateQuizToLive = async (req: Request, res: Response) => {
  const { quizId } = req.params;
  const { isDiscord = false, discordUserId = "" } = req.query;

  if (!quizId) {
    return res.status(400).json({ message: "Quiz ID is required" });
  }

  let user;
  if (!isDiscord) {
    user = getUser(req);
  }

  if (isDiscord && !discordUserId) {
    return res.status(400).json({ message: "Discord user ID is required" });
  }

  const updatedQuiz = await updateQuizDbToLive({
    user: user ? user : "",
    discordUserId: typeof discordUserId === "string" ? discordUserId : "",
    quizId,
    isDiscord: isDiscord ? true : false,
  });

  return res.status(200).json({
    message: "Quiz updated to live successfully",
    data: updatedQuiz,
  });
};

export const startQuiz = async (req: Request, res: Response) => {
  const { quizId } = req.params;
  const { isDiscord = false, discordUserId } = req.query;

  if (!quizId) {
    return res.status(400).json({ message: "Quiz ID is required" });
  }

  let user;
  if (!isDiscord) {
    user = getUser(req);
  }

  if (isDiscord && !discordUserId) {
    return res.status(400).json({ message: "Discord user ID is required" });
  }

  const updateQuiz = await updateQuizDbToStart({
    quizId,
    user: user ? user : "",
    discordUserId: typeof discordUserId === "string" ? discordUserId : "",
    isDiscord: isDiscord ? true : false,
  });
  return res
    .status(200)
    .json({ message: "Quiz started successfully", data: updateQuiz });
};

export const createQuizQuestion = async (req: Request, res: Response) => {
  const { error } = QuestionSchema.validate(req.body);
  if (error) {
    console.log("Validation error", error);
    return res.status(400).json({ message: error.details[0].message });
  }

  const user = getUser(req);
  console.log(req.body);
  const question = await createQuestionDb({
    ...req.body,
    user,
  });
  return res
    .status(201)
    .json({ message: "Question created successfully", data: question });
};

export const editQuestion = async (req: Request, res: Response) => {
  const { error } = questionupdateSchema.validate(
    req.body.questionUpdateFields
  );
  if (error) {
    console.log("Validation error", error);
    return res.status(400).json({ message: error.details[0].message });
  }

  const { questionId } = req.params;
  if (!questionId) {
    return res.status(400).json({ message: "Question ID is required" });
  }

  const user = getUser(req);
  const updateQuestion = await editQuizQuestionDb({
    ...req.body,
    questionId,
    user,
  });

  return res.status(200).json({
    message: "Question updated successfully",
    data: updateQuestion,
  });
};

export const getQuizQuestionsAll = async (req: Request, res: Response) => {
  const { quizId } = req.params;
  const user = getUser(req);
  if (!quizId) {
    return res.status(400).json({
      message: "Quiz ID is required",
    });
  }

  const questions = await getQuizQuestions({ quizId, user });
  return res.status(200).json({
    message: "Quiz questions fetched successfully",
    data: questions,
  });
};

export const deleteQuizQuestion = async (req: Request, res: Response) => {
  const { questionId } = req.params;
  if (!questionId) {
    return res.status(400).json({ message: "Question ID is required" });
  }

  const user = getUser(req);
  const question = await deleteQuizQuestionDb({
    questionId,
    user,
  });

  return res.status(200).json({
    message: "Question deleted successfully",
    data: question,
  });
};

export const generateQuizQuestionAi = async (req: Request, res: Response) => {
  const { error } = aIQuestionGenerationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const { quizId, quizTopic, quizDescription } = req.body;

  const user = getUser(req);
  const questions = await generateQuizQuestionAiDb({
    quizId,
    // creatorId,
    user,
    // questionCount,
    quizTopic,
    quizDescription,
  });
  return res.status(200).json({
    message: "Quiz questions generated successfully",
    data: questions,
  });
};

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

export const submitAnswer = async (req: Request, res: Response) => {
  const questionId = req.params.questionId;
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
