/*
  Warnings:

  - You are about to drop the column `range_0_3` on the `ScoreDistribution` table. All the data in the column will be lost.
  - You are about to drop the column `range_4_7` on the `ScoreDistribution` table. All the data in the column will be lost.
  - You are about to drop the column `range_8_10` on the `ScoreDistribution` table. All the data in the column will be lost.
  - Added the required column `count` to the `ScoreDistribution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `label` to the `ScoreDistribution` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ScoreDistribution" DROP COLUMN "range_0_3",
DROP COLUMN "range_4_7",
DROP COLUMN "range_8_10",
ADD COLUMN     "count" INTEGER NOT NULL,
ADD COLUMN     "label" TEXT NOT NULL;
