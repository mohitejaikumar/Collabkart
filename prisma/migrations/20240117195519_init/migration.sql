-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Influencers" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Influencers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InfluencerDetail" (
    "id" SERIAL NOT NULL,
    "bussiness_email" TEXT NOT NULL,
    "contentType" TEXT[],
    "influencerType" TEXT[],
    "audienceAge" INTEGER NOT NULL,
    "posts" TEXT NOT NULL,
    "platformLink" TEXT[],
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "InfluencerDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brands" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,

    CONSTRAINT "Brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BrandsDetails" (
    "id" SERIAL NOT NULL,
    "bussiness_email" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "productDescriptionFile" TEXT NOT NULL,
    "targetAudienceDescription" TEXT,
    "influencerType" TEXT[],
    "no_Of_Posts_or_PromotionVideos" INTEGER NOT NULL,
    "campaignGoal" TEXT NOT NULL,
    "campaignBudget" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "BrandsDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Influencers_email_key" ON "Influencers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "InfluencerDetail_authorId_key" ON "InfluencerDetail"("authorId");

-- CreateIndex
CREATE UNIQUE INDEX "Brands_email_key" ON "Brands"("email");

-- CreateIndex
CREATE UNIQUE INDEX "BrandsDetails_authorId_key" ON "BrandsDetails"("authorId");

-- AddForeignKey
ALTER TABLE "InfluencerDetail" ADD CONSTRAINT "InfluencerDetail_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Influencers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BrandsDetails" ADD CONSTRAINT "BrandsDetails_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
