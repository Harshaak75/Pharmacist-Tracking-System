/*
  Warnings:

  - You are about to drop the `admin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "admin";

-- CreateTable
CREATE TABLE "collection_of_models" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50),
    "employeeid" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "password" VARCHAR(15) NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'reprentative',

    CONSTRAINT "collection_of_models_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "collection_of_models_employeeid_key" ON "collection_of_models"("employeeid");

-- CreateIndex
CREATE UNIQUE INDEX "collection_of_models_email_key" ON "collection_of_models"("email");
