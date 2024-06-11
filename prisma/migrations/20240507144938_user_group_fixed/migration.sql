/*
  Warnings:

  - You are about to drop the column `chatId` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the `Chat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MembersOfGroups` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `Group` table without a default value. This is not possible if the table is not empty.
  - Added the required column `groupId` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MembersOfGroups" DROP CONSTRAINT "MembersOfGroups_chatId_fkey";

-- DropForeignKey
ALTER TABLE "MembersOfGroups" DROP CONSTRAINT "MembersOfGroups_groupId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_chatId_fkey";

-- AlterTable
ALTER TABLE "Group" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "chatId",
ADD COLUMN     "groupId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Chat";

-- DropTable
DROP TABLE "MembersOfGroups";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Membership" (
    "userId" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,

    CONSTRAINT "Membership_pkey" PRIMARY KEY ("userId","groupId")
);

-- AddForeignKey
ALTER TABLE "Membership" ADD CONSTRAINT "Membership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Membership" ADD CONSTRAINT "Membership_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
