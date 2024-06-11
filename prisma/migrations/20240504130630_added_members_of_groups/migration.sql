-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MembersOfGroups" (
    "chatId" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,

    CONSTRAINT "MembersOfGroups_pkey" PRIMARY KEY ("chatId","groupId")
);

-- AddForeignKey
ALTER TABLE "MembersOfGroups" ADD CONSTRAINT "MembersOfGroups_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "Chat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MembersOfGroups" ADD CONSTRAINT "MembersOfGroups_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
