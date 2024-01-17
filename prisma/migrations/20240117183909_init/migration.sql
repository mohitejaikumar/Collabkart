/*
  Warnings:

  - You are about to drop the column `insta_username` on the `Brands` table. All the data in the column will be lost.
  - You are about to drop the column `insta_username` on the `Influencers` table. All the data in the column will be lost.
  - Added the required column `password` to the `Brands` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bussiness_email` to the `BrandsDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bussiness_email` to the `InfluencerDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Influencers` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `Influencers` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Brands_insta_username_key";

-- DropIndex
DROP INDEX "Influencers_insta_username_key";

-- AlterTable
ALTER TABLE "Brands" DROP COLUMN "insta_username",
ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "BrandsDetails" ADD COLUMN     "bussiness_email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "InfluencerDetail" ADD COLUMN     "bussiness_email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Influencers" DROP COLUMN "insta_username",
ADD COLUMN     "password" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL;
