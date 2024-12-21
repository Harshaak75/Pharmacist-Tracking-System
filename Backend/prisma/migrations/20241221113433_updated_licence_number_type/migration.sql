/*
  Warnings:

  - A unique constraint covering the columns `[licence_number]` on the table `doctor` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "doctor_licence_number_key" ON "doctor"("licence_number");
