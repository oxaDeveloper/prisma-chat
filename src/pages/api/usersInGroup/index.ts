import type { NextApiRequest, NextApiResponse } from "next";
import { deleteMemberFromGroup, getMembersOfGroup } from "~/server/lib/group";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    const { groupId } = req.query;
    const getMembers = await getMembersOfGroup(groupId);
    return res.status(200).json(getMembers);
  } else if (req.method === "DELETE") {
    const { groupId, userId } = req.query;
    await deleteMemberFromGroup(groupId, userId);
    return res.status(201).json({ message: "Member is deleted from group!" });
  }
}
