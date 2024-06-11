import { prisma } from "~/server/db";

export const createUser = async ({ name }: any) => {
  const user = await prisma.user.create({
    data: {
      name,
    },
  });

  return user;
};

export const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

export const deleteUser = async (id: any) => {
  await prisma.membership.deleteMany({
    where: {
      userId: id,
    },
  });
  const user = await prisma.user.delete({
    where: { id: id },
  });
  return user;
};
