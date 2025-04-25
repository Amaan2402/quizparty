/*
  Warnings:

  - A unique constraint covering the columns `[quizId,questionText]` on the table `Question` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Question_quizId_questionText_key" ON "Question"("quizId", "questionText");
