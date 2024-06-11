import type { NextApiRequest, NextApiResponse } from "next";
import { createUser, deleteUser, getAllUsers } from "~/server/lib/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { name } = req.body;
    const newUser = await createUser({ name });
    return res.status(201).json(newUser);
  } else if (req.method === "GET") {
    const getUsers = await getAllUsers();
    return res.status(200).json(getUsers);
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    await deleteUser(id);
    return res.status(200).json({ message: "User deleted!" });
  }
}
