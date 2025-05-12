/*
  Warnings:

  - The values [ONGOING,COMPLETED] on the enum `QuizStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "QuizStatus_new" AS ENUM ('CREATED', 'LIVE', 'STARTED', 'ENDED');
ALTER TABLE "Quiz" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Quiz" ALTER COLUMN "status" TYPE "QuizStatus_new" USING ("status"::text::"QuizStatus_new");
ALTER TYPE "QuizStatus" RENAME TO "QuizStatus_old";
ALTER TYPE "QuizStatus_new" RENAME TO "QuizStatus";
DROP TYPE "QuizStatus_old";
ALTER TABLE "Quiz" ALTER COLUMN "status" SET DEFAULT 'CREATED';
COMMIT;

-- AlterTable
ALTER TABLE "Quiz" ADD COLUMN     "totalParticipants" INTEGER NOT NULL DEFAULT 0;
