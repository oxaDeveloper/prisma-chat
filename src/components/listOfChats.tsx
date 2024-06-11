import React, { useState } from "react";
import UsersAndGroups from "./usersAndGroups";

const ListOfChats = ({
  addNew,
  setAddNew,
  allChats,
  deleteData,
  activeChat,
  setActiveChat,
}: any) => {
  const [select, setSelect] = useState(false);

  return (
    <div className="flex w-[45vh] flex-col gap-5 p-5">
      <div className="flex items-center justify-between gap-3 border-b pb-4">
        <h1 className="text-xl">Chats</h1>

        <div className="flex gap-4">
          {select && (
            <div className="flex items-center justify-center gap-3 border-r border-white pr-4">
              <div
                className="cursor-pointer rounded-full bg-white px-2.5 py-1 text-black"
                onClick={() => {
                  setAddNew("G");
                  setSelect(false);
                }}
              >
                G
              </div>
              <div
                className="cursor-pointer rounded-full bg-white px-2.5 py-1 text-black"
                onClick={() => {
                  setAddNew("U");
                  setSelect(false);
                }}
              >
                U
              </div>
            </div>
          )}

          <button
            className={`rounded-full bg-white text-2xl text-black ${select ? "px-2.5 text-xl" : "px-2"}`}
            onClick={() => setSelect((select) => !select)}
          >
            {select ? "x" : "+"}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {allChats.map((chat: any) => (
          <UsersAndGroups
            key={chat.id}
            chat={chat}
            deleteData={deleteData}
            activeChat={activeChat}
            setActiveChat={setActiveChat}
          />
        ))}
      </div>
    </div>
  );
};

export default ListOfChats;
