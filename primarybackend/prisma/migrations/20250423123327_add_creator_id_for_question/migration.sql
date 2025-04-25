/*
  Warnings:

  - A unique constraint covering the columns `[quizId,questionIndex]` on the table `Question` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `creatorId` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "creatorId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Question_quizId_questionIndex_key" ON "Question"("quizId", "questionIndex");

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
