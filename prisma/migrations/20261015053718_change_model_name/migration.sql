/*
  Warnings:

  - You are about to drop the `Maintainancerequest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Maintainancerequest";

-- CreateTable
CREATE TABLE "Maintanancerequest" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'Submitted',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Maintanancerequest_pkey" PRIMARY KEY ("id")
);
