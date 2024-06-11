import { prisma } from "~/server/db";

export const createGroup = async (name: string, users: Object) => {
  const group = await prisma.group.create({
    data: {
      name,
      users,
    },
  });

  return group;
};

export const getAllGroups = async () => {
  const groups = await prisma.group.findMany({
    include: {
      users: true,
    },
  });
  return groups;
};

export const getMembersOfGroup = async (groupId: string) => {
  const array: { id: string }[] = [];
  const membersInGroup = await prisma.group.findMany({
    where: {
      users: {
        every: {
          groupId: groupId,
        },
      },
    },
    select: {
      users: true,
    },
  });
  membersInGroup.map((member) =>
    member.users.map((user) =>
      array.push({
        id: user.userId,
      }),
    ),
  );
  const users = await prisma.user.findMany({
    where: {
      OR: array,
    },
  });
  return users;
};

export const getNotMembersOfGroup = async (groupId: string) => {
  const array: { id: string }[] = [];
  const membersInGroup = await prisma.group.findMany({
    where: {
      users: {
        every: {
          groupId: groupId,
        },
      },
    },
    select: {
      users: true,
    },
  });
  membersInGroup.map((member) =>
    member.users.map((user) =>
      array.push({
        id: user.userId,
      }),
    ),
  );
  const users = await prisma.user.findMany({
    where: {
      NOT: array,
    },
  });
  return users;
};

export const addMembersToGroup = async (groupId: string, members: Object) => {
  const group = await prisma.group.update({
    where: { id: groupId },
    data: {
      users: members,
    },
  });
  return group;
};

export const deleteMemberFromGroup = async (
  groupId: string,
  userId: string,
) => {
  const result = await prisma.membership.delete({
    where: {
      userId_groupId: {
        groupId: groupId,
        userId: userId,
      },
    },
  });
  return result;
};

export const deleteGroup = async (id: string) => {
  await prisma.membership.deleteMany({
    where: {
      groupId: id,
    },
  });
  await prisma.message.deleteMany({
    where: {
      groupId: id,
    },
  });
  const group = await prisma.group.delete({
    where: { id: id },
  });
  return group;
};
