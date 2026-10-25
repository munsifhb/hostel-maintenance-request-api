
-- Rename the old maintenance request table.
ALTER TABLE "Maintanancerequest"
RENAME TO "MaintenanceRequest";

-- Rename the misspelled enum value.
ALTER TYPE "Status"
RENAME VALUE 'Ressolved' TO 'Resolved';

-- Rename the existing Hostel column.
ALTER TABLE "Hostel"
RENAME COLUMN "roomnumbers" TO "roomNumbers";

-- Add the relationship columns.
ALTER TABLE "MaintenanceRequest"
ADD COLUMN "userId" INTEGER NOT NULL,
ADD COLUMN "hostelId" INTEGER NOT NULL;

-- Add the foreign keys.
ALTER TABLE "MaintenanceRequest"
ADD CONSTRAINT "MaintenanceRequest_userId_fkey"
FOREIGN KEY ("userId") REFERENCES "User"("id")
ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "MaintenanceRequest"
ADD CONSTRAINT "MaintenanceRequest_hostelId_fkey"
FOREIGN KEY ("hostelId") REFERENCES "Hostel"("id")
ON DELETE RESTRICT ON UPDATE CASCADE;
