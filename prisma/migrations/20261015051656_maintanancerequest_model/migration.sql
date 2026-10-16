-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Electronics', 'Plumbing');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Submitted', 'InProgress', 'Ressolved');

-- CreateTable
CREATE TABLE "Maintainancerequest" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'Submitted',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Maintainancerequest_pkey" PRIMARY KEY ("id")
);
