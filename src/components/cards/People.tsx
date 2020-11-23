import React from "react";
import type { IPeople } from "types";
interface Props extends IPeople {}

const People: React.FC<Props> = ({ name, position, avatar }) => {
  return (
    <div className="bg-white shadow-md rounded-lg">
      <img src={avatar} className="w-24 h-32 " alt="avatar" />
      <p className="text-md font-bold text-center">{name}</p>
      <p className="text-md text-gray-500">{position}</p>
    </div>
  );
};

export default People;
