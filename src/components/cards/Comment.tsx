import React from "react";
import { IComment } from "types";

const Comment: React.FC<IComment> = ({ name, content, special, avatar }) => {
  return (
    <div className="bg-white shadow-md rounded-lg m-4 p-4">
      <div className="flex items-center">
        <img src={avatar} alt="avatar" className="w-20 h-20 rounded-full" />
        <div className="pl-4">
          <p className="text-sm font-bold">{name}</p>
          <p className="text-xs text-gray-400 mt-2">{special}</p>
        </div>
      </div>
      <p className="text-sm mt-4 text-gray-700">“{content}”</p>
    </div>
  );
};

export default Comment;
