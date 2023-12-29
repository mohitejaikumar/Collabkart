-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "eamil" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserDetail" (
    "id" SERIAL NOT NULL,
    "contentType" TEXT NOT NULL,
    "audienceType" TEXT NOT NULL,
    "audienceAge" TEXT NOT NULL,
    "posts" INTEGER NOT NULL,
    "platformLink" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "UserDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_eamil_key" ON "User"("eamil");

-- AddForeignKey
ALTER TABLE "UserDetail" ADD CONSTRAINT "UserDetail_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
