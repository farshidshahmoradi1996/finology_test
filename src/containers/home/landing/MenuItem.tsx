import React from "react";

interface Props {
  children: string;
}
const MenuItem: React.FC<Props> = ({ children }) => {
  return (
    <a
      href="/"
      className="p-4 text-white mx-2 duration-300 transition-color hover:text-blue-400 font-bold"
    >
      <li className="">{children}</li>
    </a>
  );
};

export default MenuItem;
