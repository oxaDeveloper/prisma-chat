import type { NextApiRequest, NextApiResponse } from "next";
import {
  createMessage,
  deleteMessage,
  getAllMessages,
} from "~/server/lib/message";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { body, groupId, userId } = req.body;
    const newMessage = await createMessage(body, groupId, userId);
    return res.status(201).json(newMessage);
  } else if (req.method === "GET") {
    const getMessages = await getAllMessages();
    return res.status(200).json(getMessages);
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    await deleteMessage(id);
    return res.status(200).json({ message: "Message deleted!" });
  }
}
