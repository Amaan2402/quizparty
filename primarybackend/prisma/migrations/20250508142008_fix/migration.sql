/*
  Warnings:

  - Made the column `brand` on table `Reward` required. This step will fail if there are existing NULL values in that column.
  - Made the column `voucherCode` on table `Reward` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Reward" ALTER COLUMN "brand" SET NOT NULL,
ALTER COLUMN "voucherCode" SET NOT NULL;
