/*
  Warnings:

  - You are about to drop the `comaplains` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "comaplains" DROP CONSTRAINT "comaplains_representative_id_fkey";

-- DropTable
DROP TABLE "comaplains";

-- CreateTable
CREATE TABLE "complains" (
    "id" SERIAL NOT NULL,
    "representative_name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "subject" VARCHAR(100) NOT NULL,
    "message" VARCHAR(255) NOT NULL,
    "representative_id" INTEGER NOT NULL,
    "is_resolved" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "complains_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "complains" ADD CONSTRAINT "complains_representative_id_fkey" FOREIGN KEY ("representative_id") REFERENCES "collection_of_models"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
