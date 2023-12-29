/*
  Warnings:

  - The `audienceAge` column on the `UserDetail` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "UserDetail" DROP COLUMN "audienceAge",
ADD COLUMN     "audienceAge" INTEGER;
