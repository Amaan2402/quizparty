-- CreateEnum
CREATE TYPE "QuizStatus" AS ENUM ('CREATED', 'LIVE', 'STARTED', 'ENDED');

-- CreateEnum
CREATE TYPE "RewardBrands" AS ENUM ('amazon', 'flipkart', 'myntra', 'ajio', 'swiggy', 'zomato');

-- CreateTable
CREATE TABLE "Answer" (
    "id" TEXT NOT NULL,
    "participantId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "isAnswerCorrect" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "selectedOption" INTEGER NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnswerOutbox" (
    "id" TEXT NOT NULL,
    "answerId" TEXT NOT NULL,

    CONSTRAINT "AnswerOutbox_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Participant" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "quizId" TEXT NOT NULL,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isConnected" BOOLEAN NOT NULL DEFAULT false,
    "isBanned" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Participant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParticipantResult" (
    "id" TEXT NOT NULL,
    "participantId" TEXT NOT NULL,
    "quizId" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "rank" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ParticipantResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "questionText" TEXT NOT NULL,
    "questionIndex" INTEGER NOT NULL,
    "options" JSONB NOT NULL,
    "quizId" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "correctOption" INTEGER NOT NULL,
    "CorrectAnswerPercentage" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quiz" (
    "id" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "status" "QuizStatus" NOT NULL DEFAULT 'CREATED',
    "currentQuestionIndex" INTEGER NOT NULL,
    "timePerQuestion" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "maxParticipants" INTEGER NOT NULL DEFAULT 0,
    "totalParticipants" INTEGER NOT NULL DEFAULT 0,
    "isResultCalculated" BOOLEAN NOT NULL DEFAULT false,
    "avgScore" INTEGER NOT NULL DEFAULT 0,
    "lowestScore" INTEGER NOT NULL DEFAULT 0,
    "resultSentViaMail" BOOLEAN NOT NULL DEFAULT false,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Quiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizResultQueue" (
    "id" TEXT NOT NULL,
    "quizId" TEXT NOT NULL,

    CONSTRAINT "QuizResultQueue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizResultQueueOutbox" (
    "id" TEXT NOT NULL,
    "quizResultQueueId" TEXT NOT NULL,

    CONSTRAINT "QuizResultQueueOutbox_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reward" (
    "id" TEXT NOT NULL,
    "quizId" TEXT NOT NULL,
    "brand" "RewardBrands" NOT NULL,
    "voucherCode" TEXT NOT NULL,

    CONSTRAINT "Reward_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScoreDistribution" (
    "id" TEXT NOT NULL,
    "quizId" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "ScoreDistribution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "mailVerified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserDiscord" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "discordUsername" TEXT NOT NULL,
    "discordDiscriminator" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "connectedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserDiscord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Answer_participantId_questionId_key" ON "Answer"("participantId", "questionId");

-- CreateIndex
CREATE UNIQUE INDEX "AnswerOutbox_answerId_key" ON "AnswerOutbox"("answerId");

-- CreateIndex
CREATE UNIQUE INDEX "Participant_userId_quizId_key" ON "Participant"("userId", "quizId");

-- CreateIndex
CREATE UNIQUE INDEX "ParticipantResult_participantId_key" ON "ParticipantResult"("participantId");

-- CreateIndex
CREATE UNIQUE INDEX "ParticipantResult_participantId_quizId_key" ON "ParticipantResult"("participantId", "quizId");

-- CreateIndex
CREATE UNIQUE INDEX "Question_quizId_questionIndex_key" ON "Question"("quizId", "questionIndex");

-- CreateIndex
CREATE UNIQUE INDEX "Question_quizId_questionText_key" ON "Question"("quizId", "questionText");

-- CreateIndex
CREATE UNIQUE INDEX "QuizResultQueueOutbox_quizResultQueueId_key" ON "QuizResultQueueOutbox"("quizResultQueueId");

-- CreateIndex
CREATE UNIQUE INDEX "Reward_quizId_key" ON "Reward"("quizId");

-- CreateIndex
CREATE UNIQUE INDEX "ScoreDistribution_quizId_label_key" ON "ScoreDistribution"("quizId", "label");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserDiscord_userId_key" ON "UserDiscord"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserDiscord_discordId_key" ON "UserDiscord"("discordId");

-- CreateIndex
CREATE UNIQUE INDEX "UserDiscord_discordUsername_key" ON "UserDiscord"("discordUsername");

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Participant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnswerOutbox" ADD CONSTRAINT "AnswerOutbox_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "Answer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticipantResult" ADD CONSTRAINT "ParticipantResult_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Participant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticipantResult" ADD CONSTRAINT "ParticipantResult_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quiz" ADD CONSTRAINT "Quiz_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizResultQueue" ADD CONSTRAINT "QuizResultQueue_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizResultQueueOutbox" ADD CONSTRAINT "QuizResultQueueOutbox_quizResultQueueId_fkey" FOREIGN KEY ("quizResultQueueId") REFERENCES "QuizResultQueue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reward" ADD CONSTRAINT "Reward_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScoreDistribution" ADD CONSTRAINT "ScoreDistribution_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDiscord" ADD CONSTRAINT "UserDiscord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
