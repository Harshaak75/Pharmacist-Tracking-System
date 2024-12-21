-- CreateTable
CREATE TABLE "doctor" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "gender" VARCHAR(5) NOT NULL,
    "date_of_birth" TIMESTAMP(3) NOT NULL,
    "qualification" TEXT NOT NULL,
    "year_of_expirened" INTEGER NOT NULL,
    "licence_number" TEXT NOT NULL,
    "hospital_name" TEXT NOT NULL,
    "speciality" VARCHAR(50) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "phone_number" TEXT,
    "email" VARCHAR(50) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'doctor',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "doctor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "doctor_email_key" ON "doctor"("email");
