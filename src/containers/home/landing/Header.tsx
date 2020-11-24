import React, { useState } from "react";

//local
import Logo from "./Logo";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import MobileMenuBtn from "./MobileMenuBtn";
import SearchBox from "./SearchBox";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="w-full flex px-6 md:px-0  items-center justify-between pt-8  ">
      <Logo />
      <Menu />
      <SearchBox />
      <MobileMenuBtn
        isOpen={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      <MobileMenu isOpen={isMobileMenuOpen} />
    </div>
  );
};

export default Header;
