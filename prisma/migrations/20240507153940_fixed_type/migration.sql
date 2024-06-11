-- AlterTable
ALTER TABLE "Group" ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'group';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'user';
