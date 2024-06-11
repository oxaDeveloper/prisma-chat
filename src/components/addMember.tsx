import Image from "next/image";
import React from "react";

const AddMember = ({ membersNotInGroup, addMemberToGroup }: any) => {
  return membersNotInGroup.map((member: any, idx: number) => (
    <div className="flex flex-col" key={idx}>
      <div className="cursor-pointer border-b border-gray-700 py-1">
        <div
          className={`flex items-center justify-between rounded-lg px-4 py-2.5 hover:bg-gray-700 hover:bg-opacity-10`}
          onClick={() => {
            addMemberToGroup(member.id);
          }}
        >
          <div className="flex items-center gap-4">
            <div>
              <Image
                src={"https://cdn-icons-png.flaticon.com/512/3541/3541871.png"}
                alt=""
                width={1280}
                height={1280}
                className="h-9 w-9"
              />
            </div>

            <h1>{member.name}</h1>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default AddMember;
