import type { NextApiRequest, NextApiResponse } from "next";
import { getNotMembersOfGroup } from "~/server/lib/group";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { groupId } = req.query;

  if (req.method === "GET" && typeof groupId === "string") {
    const getMembers = await getNotMembersOfGroup(groupId);
    return res.status(200).json(getMembers);
  }
}
