import { PrismaClient } from "@prisma/client";
import { createClient } from "redis";

const prisma = new PrismaClient();
const redis = createClient();

const ANSWER_SUBMISSION_QUEUE = "answer-submission-queue";
const RESULT_QUEUE = "result-queue";

async function connectToRedis() {
  try {
    await redis.connect();
    console.log("Connected to Redis⚡");
  } catch (error) {
    console.error("❌ Error connecting to Redis:", error);
  }
}

async function processAnswerSubmissionQueue() {
  try {
    while (true) {
      const pendingRows = await prisma.answerOutbox.findMany({
        take: 10,
      });

      if (pendingRows.length === 0) {
        await new Promise((res) => setTimeout(res, 3000));
        continue;
      }

      for (const record of pendingRows) {
        await redis.lPush(ANSWER_SUBMISSION_QUEUE, JSON.stringify(record));
        console.log("📥Pushed to Redis:", record.id, "SUBMISSION QUEUE");
      }

      await prisma.answerOutbox.deleteMany({
        where: {
          id: {
            in: pendingRows.map((row) => row.id),
          },
        },
      });

      console.log(
        `🧹 Cleaned ${pendingRows.length} records from SUBMISSIONoutbox.`
      );
    }
  } catch (error) {
    console.error("❌ Error processing answer submission queue:", error);
  }
}

async function processresultQueue() {
  try {
    while (true) {
      const pendingRecords = await prisma.quizResultQueueOutbox.findMany({
        take: 10,
      });

      if (pendingRecords.length === 0) {
        await new Promise((res) => setTimeout(res, 3000));
        continue;
      }

      for (const record of pendingRecords) {
        await redis.lPush(RESULT_QUEUE, JSON.stringify(record));
        console.log("📥Pushed to Redis:", record.id, "RESULT QUEUE");
      }

      await prisma.quizResultQueueOutbox.deleteMany({
        where: {
          id: {
            in: pendingRecords.map((row) => row.id),
          },
        },
      });
      console.log(
        `🧹 Cleaned ${pendingRecords.length} records from RESULToutbox.`
      );
    }
  } catch (error) {
    console.error("❌ Error processing result queue:", error);
  }
}

async function startProcessors() {
  await connectToRedis();
  await Promise.all([processAnswerSubmissionQueue(), processresultQueue()]);
}

startProcessors()
  .then(() => {
    console.log("Processors started successfully.");
  })
  .catch((error) => {
    console.error("Error starting processors:", error);
  });
