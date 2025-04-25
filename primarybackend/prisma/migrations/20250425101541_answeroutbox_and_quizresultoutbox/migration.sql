-- AlterTable
ALTER TABLE "Answer" ALTER COLUMN "isAnswerCorrect" DROP NOT NULL,
ALTER COLUMN "isAnswerCorrect" DROP DEFAULT;

-- CreateTable
CREATE TABLE "AnswerOutbox" (
    "id" TEXT NOT NULL,
    "answerId" TEXT NOT NULL,

    CONSTRAINT "AnswerOutbox_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizResultQueueOutbox" (
    "id" TEXT NOT NULL,
    "quizResultQueueId" TEXT NOT NULL,

    CONSTRAINT "QuizResultQueueOutbox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AnswerOutbox_answerId_key" ON "AnswerOutbox"("answerId");

-- CreateIndex
CREATE UNIQUE INDEX "QuizResultQueueOutbox_quizResultQueueId_key" ON "QuizResultQueueOutbox"("quizResultQueueId");

-- AddForeignKey
ALTER TABLE "AnswerOutbox" ADD CONSTRAINT "AnswerOutbox_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "Answer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizResultQueueOutbox" ADD CONSTRAINT "QuizResultQueueOutbox_quizResultQueueId_fkey" FOREIGN KEY ("quizResultQueueId") REFERENCES "QuizResultQueue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
