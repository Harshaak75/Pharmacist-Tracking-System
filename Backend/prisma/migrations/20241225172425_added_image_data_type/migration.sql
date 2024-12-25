/*
  Warnings:

  - Added the required column `image_data` to the `activity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "activity" ADD COLUMN     "image_data" BYTEA NOT NULL;
