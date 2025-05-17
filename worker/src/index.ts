import { PrismaClient } from "@prisma/client";
import { createClient } from "redis";

const redisSubmission = createClient(); // one connection for submissions
const redisResult = createClient(); // one connection for results
const prisma = new PrismaClient();

const ANSWER_SUBMISSION_QUEUE = "answer-submission-queue";
const RESULT_QUEUE = "result-queue";
function generateBucket(maxScore: number) {
  let bucketCount = 0;

  if (maxScore <= 5) {
    bucketCount = 2;
  } else if (maxScore <= 10) {
    bucketCount = 3;
  } else {
    bucketCount = 4;
  }

  const bucketSize = Math.floor((maxScore + 1) / bucketCount);
  const buckets = [];

  let start = 0;
  for (let i = 0; i < bucketCount; i++) {
    let end = start + bucketSize - 1;

    // Make sure last bucket ends at maxScore
    if (i === bucketCount - 1) {
      end = maxScore;
    }

    buckets.push({ label: `${start}-${end}`, min: start, max: end });
    start = end + 1;
  }

  return buckets;
}

function countParticipantsInBuckets({
  participants,
  buckets,
  quizId,
}: {
  participants: { score: number }[];
  buckets: { label: string; min: number; max: number }[];
  quizId: string;
}) {
  const scoreDistribution = [];

  for (const bucket of buckets) {
    const count = participants.filter(
      (p) => p.score >= bucket.min && p.score <= bucket.max
    ).length;
    scoreDistribution.push({ label: bucket.label, count, quizId });
  }

  return scoreDistribution;
}
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
            questions: true,
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

    console.log("QUIZ ID", quizresultQueueData.quiz.id);

    //Logic for calculating average score
    const sumOfScores = participantsScores.reduce((acc, participant) => {
      return acc + participant.score;
    }, 0);

    const avgScore =
      participantsScores.length > 0
        ? sumOfScores / participantsScores.length
        : 0;

    const lowestScore = Math.min(...participantsScores.map((p) => p.score));

    await prisma.quiz.update({
      where: {
        id: quizresultQueueData.quiz.id,
      },
      data: {
        isResultCalculated: true,
        avgScore: avgScore,
        lowestScore: lowestScore,
      },
    });

    //Logic for Score distriubution graph

    const questionsLength = quizresultQueueData.quiz.questions.length;

    const buckets = generateBucket(questionsLength);
    const bucketCounts = countParticipantsInBuckets({
      participants: sortedWithRanksParticipantResults,
      buckets,
      quizId: quizresultQueueData.quiz.id,
    });

    console.log("BUCKET COUNTS", bucketCounts);

    await prisma.scoreDistribution.deleteMany({
      where: { quizId: quizresultQueueData.quiz.id },
    });

    await prisma.scoreDistribution.createMany({
      data: bucketCounts,
      skipDuplicates: true,
    });
    // logic for correctAnswerPercentage for each question
    const questions = await prisma.question.findMany({
      where: {
        quizId: quizresultQueueData.quiz.id,
      },
    });

    const answers = await prisma.answer.findMany({
      where: {
        questionId: {
          in: questions.map((q) => q.id),
        },
      },
    });
    await Promise.all(
      questions.map(async (question) => {
        const answersForQuestion = answers.filter(
          (a) => a.questionId === question.id
        );
        const correctAnswers = answersForQuestion.filter(
          (a) => a.isAnswerCorrect
        ).length;

        const percentageForCorrectAnswers =
          answersForQuestion.length === 0
            ? 0
            : (correctAnswers / answersForQuestion.length) * 100;

        await prisma.question.update({
          where: { id: question.id },
          data: { CorrectAnswerPercentage: percentageForCorrectAnswers },
        });
      })
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
