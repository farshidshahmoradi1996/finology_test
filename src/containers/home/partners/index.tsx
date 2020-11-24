import React from "react";

import _data from "./_data";
const Partners: React.FC = () => {
  return (
    <div className="mt-16">
      <h2 className="text-center text-3xl text-primary font-bold">
        We've worked with
      </h2>
      <div className="flex md:justify-center  overflow-x-auto  mt-8 px-8 md:px-0">
        {_data.map((_i, index) => (
          <img className="w-16 mx-4 h-auto" alt="partner" src={_i} />
        ))}
      </div>
    </div>
  );
};
export default Partners;
