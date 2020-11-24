import React, { useEffect } from "react";
import MenuItem from "./MenuItem";

interface Props {
  isOpen: boolean;
}
const MobileMenu: React.FC<Props> = ({ isOpen }) => {
  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "initial";
  }, [isOpen]);
  return (
    <ul
      className=" md:hidden fixed md:static duration-300 h-screen w-screen bg-primary z-30 pt-24 px-12"
      style={{ transform: `translateY(${isOpen ? "0" : "-100"}%)`, top: 0 }}
    >
      <MenuItem>Home</MenuItem>
      <MenuItem>About Us</MenuItem>
      <MenuItem>Services</MenuItem>
      <MenuItem>Pricing</MenuItem>
      <MenuItem>Careers</MenuItem>
    </ul>
  );
};

export default MobileMenu;
