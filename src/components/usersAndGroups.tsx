import Image from "next/image";
import React from "react";

export default function UsersAndGroups({
  chat,
  deleteData,
  activeChat,
  setActiveChat,
}: any) {
  return (
    <div className="cursor-pointer border-b border-gray-700 pb-3">
      <div
        className={`flex items-center justify-between rounded-lg px-4 py-2.5 ${activeChat === chat.id ? "bg-gray-200 bg-opacity-20" : "hover:bg-gray-200 hover:bg-opacity-10"}`}
        onClick={() => {
          if (chat.type === "group") {
            if (activeChat === chat.id) {
              setActiveChat(null);
            } else {
              setActiveChat(chat.id);
            }
          }
        }}
      >
        <div className="flex items-center gap-4">
          <div>
            <Image
              src={
                chat.type === "group"
                  ? "https://cdn-icons-png.flaticon.com/512/568/568074.png"
                  : "https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
              }
              alt=""
              width={1280}
              height={1280}
              className="h-9 w-9"
            />
          </div>

          <h1>{chat.name}</h1>
        </div>

        <div
          className="rounded-full px-2.5 py-1 hover:bg-gray-600"
          onClick={async () => {
            if (confirm("Do you want to delete the chat?")) {
              await deleteData(chat.id, chat.type);
            }
          }}
        >
          <h1 className="text-xl">D</h1>
        </div>
      </div>
    </div>
  );
}
