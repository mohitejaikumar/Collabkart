/*
  Warnings:

  - You are about to drop the column `audienceType` on the `UserDetail` table. All the data in the column will be lost.
  - The `contentType` column on the `UserDetail` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `posts` on table `UserDetail` required. This step will fail if there are existing NULL values in that column.
  - Made the column `audienceAge` on table `UserDetail` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "UserDetail" DROP COLUMN "audienceType",
ADD COLUMN     "influencerType" TEXT[],
DROP COLUMN "contentType",
ADD COLUMN     "contentType" TEXT[],
ALTER COLUMN "posts" SET NOT NULL,
ALTER COLUMN "posts" SET DATA TYPE TEXT,
ALTER COLUMN "audienceAge" SET NOT NULL;
