-- CreateTable
CREATE TABLE "admin" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50),
    "employeeid" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "password" VARCHAR(15) NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "representative" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "employeeid" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "password" VARCHAR(15) NOT NULL,
    "phone_number" INTEGER,
    "role" TEXT NOT NULL DEFAULT 'representative',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "representative_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_employeeid_key" ON "admin"("employeeid");

-- CreateIndex
CREATE UNIQUE INDEX "admin_email_key" ON "admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "representative_employeeid_key" ON "representative"("employeeid");

-- CreateIndex
CREATE UNIQUE INDEX "representative_email_key" ON "representative"("email");
