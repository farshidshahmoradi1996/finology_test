import React from "react";
import type { IPeople } from "types";
interface Props {
  data: IPeople;
}

const People: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white shadow-md rounded-lg mx-2 md:mx-8  my-2 md:my-6  w-40 h-60 cursor-pointer duration-300 hover:shadow-xl">
      <img
        src={data.avatar}
        className="w-full h-32 object-cover "
        alt="avatar"
      />

      <p className="text-md font-bold text-center mt-6 ">{data.name}</p>
      <p className="text-md text-gray-400 text-center mt-2">{data.position}</p>
    </div>
  );
};

export default People;
