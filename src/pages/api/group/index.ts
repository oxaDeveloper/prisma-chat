import type { NextApiRequest, NextApiResponse } from "next";
import {
  createGroup,
  deleteGroup,
  getAllGroups,
  addMembersToGroup,
} from "~/server/lib/group";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { name, users } = req.body;
    const newGroup = await createGroup(name, users);
    return res.status(201).json(newGroup);
  } else if (req.method === "GET") {
    const getGroups = await getAllGroups();
    return res.status(200).json(getGroups);
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    await deleteGroup(id);
    return res.status(200).json({ message: "Group deleted!" });
  } else if (req.method === "PUT") {
    const { groupId, members } = req.body;
    await addMembersToGroup(groupId, members);
    return res.status(200).json({ message: "Members added to the group!" });
  }
}
