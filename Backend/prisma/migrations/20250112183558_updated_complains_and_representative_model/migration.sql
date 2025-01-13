/*
  Warnings:

  - Added the required column `representative_id` to the `comaplains` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "comaplains" ADD COLUMN     "representative_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "comaplains" ADD CONSTRAINT "comaplains_representative_id_fkey" FOREIGN KEY ("representative_id") REFERENCES "representative"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
