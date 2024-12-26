/*
  Warnings:

  - You are about to drop the column `date_of_birth` on the `doctor` table. All the data in the column will be lost.
  - You are about to drop the column `licence_number` on the `doctor` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "doctor_licence_number_key";

-- AlterTable
ALTER TABLE "doctor" DROP COLUMN "date_of_birth",
DROP COLUMN "licence_number";
