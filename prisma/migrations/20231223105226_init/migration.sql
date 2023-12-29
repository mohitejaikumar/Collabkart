/*
  Warnings:

  - The `platformLink` column on the `UserDetail` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "UserDetail" DROP COLUMN "platformLink",
ADD COLUMN     "platformLink" TEXT[];
