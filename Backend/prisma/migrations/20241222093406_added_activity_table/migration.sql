-- CreateTable
CREATE TABLE "activity" (
    "id" SERIAL NOT NULL,
    "representative_name" VARCHAR(50) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "doctor_name" VARCHAR(50) NOT NULL,
    "product_promoted" VARCHAR(50) NOT NULL,

    CONSTRAINT "activity_pkey" PRIMARY KEY ("id")
);
