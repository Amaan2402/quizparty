-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "CorrectAnswerPercentage" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Quiz" ADD COLUMN     "avgScore" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "lowestScore" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "ScoreDistribution" (
    "id" TEXT NOT NULL,
    "quizId" TEXT NOT NULL,
    "range_0_3" INTEGER NOT NULL DEFAULT 0,
    "range_4_7" INTEGER NOT NULL DEFAULT 0,
    "range_8_10" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ScoreDistribution_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ScoreDistribution_quizId_key" ON "ScoreDistribution"("quizId");

-- AddForeignKey
ALTER TABLE "ScoreDistribution" ADD CONSTRAINT "ScoreDistribution_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
