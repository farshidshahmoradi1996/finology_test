import React from "react";

//local
import Logo from "./Logo";
import Menu from "./Menu";
import SearchBox from "./SearchBox";

const Header: React.FC = () => {
  return (
    <div className="w-full  items-center justify-between pt-8 hidden md:flex">
      <Logo />
      <Menu />
      <SearchBox />
    </div>
  );
};

export default Header;
