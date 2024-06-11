import { prisma } from "~/server/db";

export const createMessage = async (
  body: string,
  groupId: string,
  userId: string,
) => {
  const message = await prisma.message.create({
    data: {
      body,
      groupId,
      userId,
    },
  });
  return message;
};

export const getAllMessages = async () => {
  const messages = await prisma.message.findMany();
  return messages;
};

export const deleteMessage = async (id: any) => {
  const message = await prisma.message.delete({
    where: { id: id },
  });
  return message;
};
