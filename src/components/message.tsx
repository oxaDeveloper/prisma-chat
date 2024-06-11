import React, { useEffect, useState } from "react";

const Message = ({ allChats, message, deleteMessage }: any) => {
  const [writter, setWritter] = useState(null);
  const [createdAt, setCreatedAt] = useState<string | null>(null);

  useEffect(() => {
    const date = new Date(message.createdAt);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    setCreatedAt(
      `${date.getDate()}-${months[date.getMonth()]}, ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`,
    );
  }, [createdAt]);

  const getWritter = () => {
    allChats.map((chat: any) => {
      if (chat.id === message.userId) {
        setWritter(chat.name);
      }
    });
  };

  useEffect(() => {
    getWritter();
  });

  return (
    <div
      className="max-w-[40%]"
      onClick={async () => {
        if (confirm("Do you want to delete this message?")) {
          await deleteMessage(message.id);
        }
      }}
    >
      <div className="flex flex-col gap-2 rounded-t-2xl rounded-bl-2xl bg-black px-5 py-3">
        <h1
          className={`${writter !== null ? "text-[#3ba0ff]" : "text-[#8b8b8b]"} cursor-pointer text-lg`}
        >
          {writter !== null ? writter : "Deleted Account"}
        </h1>
        <p>{message.body}</p>
        <span className="text-right text-xs text-gray-600">{createdAt}</span>
      </div>
    </div>
  );
};

export default Message;
