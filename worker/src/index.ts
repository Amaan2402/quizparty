import { PrismaClient } from "@prisma/client";
import { createClient } from "redis";

const redisSubmission = createClient(); // one connection for submissions
const redisResult = createClient(); // one connection for results
const prisma = new PrismaClient();

const ANSWER_SUBMISSION_QUEUE = "answer-submission-queue";
const RESULT_QUEUE = "result-queue";

async function processSubmissionsQueue(submission: {
  id: string;
  answerId: string;
}) {
  try {
    console.log("Processing submission:", submission);
    const submissionData = await prisma.answer.findUnique({
      where: { id: submission.answerId },
      include: { question: true },
    });

    if (!submissionData) {
      console.log("Submission not found:", submission.answerId);
      return;
    }

    const isAnswerCorrect =
      submissionData.selectedOption === submissionData.question.correctOption;

    await prisma.answer.update({
      where: { id: submission.answerId },
      data: { isAnswerCorrect },
    });
    console.log("Updated submission:", submission.answerId);
  } catch (error) {
    console.log("Error processing submission:", error);
    await redisSubmission.rPush(
      ANSWER_SUBMISSION_QUEUE,
      JSON.stringify(submission)
    ); // fix here too
    console.log("Re-queued submission:", submission.answerId);
  }
}

async function processResultQueue(data: {
  id: string;
  quizResultQueueId: string;
}) {
  try {
    console.log("Processing result queue:", data);
    const quizresultQueueData = await prisma.quizResultQueue.findUnique({
      where: { id: data.quizResultQueueId },
      include: {
        quiz: {
          include: {
            participants: {
              include: { answers: true },
            },
          },
        },
      },
    });

    if (!quizresultQueueData) {
      console.log("Quiz result queue not found:", data.quizResultQueueId);
      return;
    }

    const participantsScores = quizresultQueueData.quiz.participants.map(
      (p) => ({
        participantId: p.id,
        quizId: quizresultQueueData.quiz.id,
        score: p.answers.reduce(
          (acc, answer) => acc + (answer.isAnswerCorrect ? 1 : 0),
          0
        ),
      })
    );

    const sortedWithRanksParticipantResults = participantsScores
      .sort((a, b) => b.score - a.score)
      .map((p, index) => ({
        ...p,
        rank: index + 1,
      }));

    await prisma.participantResult.createMany({
      data: sortedWithRanksParticipantResults,
      skipDuplicates: true,
    });

    console.log(
      "Participants scores inserted:",
      sortedWithRanksParticipantResults
    );
  } catch (error) {
    console.log("Error processing result queue:", error);
  }
}

async function popSubmissions() {
  try {
    while (true) {
      console.log("Waiting for submission queue...");
      const submissionOutBox = await redisSubmission.brPop(
        ANSWER_SUBMISSION_QUEUE,
        0
      );
      const parsedSubmission = JSON.parse(submissionOutBox.element);
      await processSubmissionsQueue(parsedSubmission);
    }
  } catch (error) {
    console.error("Error processing submissions:", error);
  }
}

async function popResultQueue() {
  try {
    while (true) {
      console.log("Waiting for result queue...");
      const resultQueueOutBox = await redisResult.brPop(RESULT_QUEUE, 0);
      const parsedResult = JSON.parse(resultQueueOutBox.element);
      await processResultQueue(parsedResult);
    }
  } catch (error) {
    console.error("Error processing result queue:", error);
  }
}

async function connectToRedis() {
  try {
    await redisSubmission.connect();
    await redisResult.connect();
    console.log("Connected to Redis⚡");
  } catch (error) {
    console.error("❌ Error connecting to Redis:", error);
  }
}

async function startWorkers() {
  await connectToRedis();
  popSubmissions(); // no Promise.all needed
  popResultQueue(); // start separately
}

startWorkers()
  .then(() => {
    console.log("Processors started successfully.");
  })
  .catch((error) => {
    console.error("Error starting processors:", error);
  });
