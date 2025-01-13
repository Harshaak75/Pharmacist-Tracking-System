-- CreateTable
CREATE TABLE "comaplains" (
    "id" SERIAL NOT NULL,
    "representative_name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "subject" VARCHAR(100) NOT NULL,
    "message" VARCHAR(255) NOT NULL,
    "is_resolved" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comaplains_pkey" PRIMARY KEY ("id")
);
