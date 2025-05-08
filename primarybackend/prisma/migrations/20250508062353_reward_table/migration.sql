/*
  Warnings:

  - You are about to drop the column `reward` on the `Quiz` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "RewardBrands" AS ENUM ('amazon', 'flipkart', 'myntra', 'ajio', 'swiggy', 'zomato');

-- AlterTable
ALTER TABLE "Quiz" DROP COLUMN "reward";

-- CreateTable
CREATE TABLE "Reward" (
    "id" TEXT NOT NULL,
    "quizId" TEXT NOT NULL,
    "brand" "RewardBrands" NOT NULL,
    "voucherCode" TEXT NOT NULL,

    CONSTRAINT "Reward_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Reward_quizId_key" ON "Reward"("quizId");

-- AddForeignKey
ALTER TABLE "Reward" ADD CONSTRAINT "Reward_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
