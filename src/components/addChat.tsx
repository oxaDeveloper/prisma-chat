import React from "react";

const AddChat = ({ addNew, setInputValue, inputValue, createChat }: any) => {
  return (
    addNew !== null && (
      <div className="fixed z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50">
        <div className="rounded-lg bg-white px-5 py-4 text-black">
          <h1 className="text-xl font-semibold">
            {addNew === "G" ? "Create new group" : "Add new Chat"}
          </h1>

          <div className="mt-5 flex flex-col gap-3">
            <input
              type="text"
              className="rounded-lg border-2 border-gray-400 bg-inherit px-3 text-lg"
              placeholder={addNew === "G" ? "Name of Group" : "Name of User"}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <button
              className="rounded-lg border-2 border-blue-500 bg-blue-500 text-lg uppercase text-white"
              onClick={() => {
                if (inputValue !== "") {
                  createChat();
                } else {
                  alert("Please enter a chat name");
                }
              }}
            >
              {addNew === "G" ? "Create" : "Add"}
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default AddChat;
