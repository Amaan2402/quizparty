/*
  Warnings:

  - Changed the type of `selectedOption` on the `Answer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Answer" DROP COLUMN "selectedOption",
ADD COLUMN     "selectedOption" INTEGER NOT NULL;
