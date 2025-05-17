/*
  Warnings:

  - A unique constraint covering the columns `[quizId,label]` on the table `ScoreDistribution` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ScoreDistribution_quizId_label_key" ON "ScoreDistribution"("quizId", "label");
