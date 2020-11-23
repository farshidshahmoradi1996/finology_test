import React from "react";
import MenuItem from "./MenuItem";

const Menu: React.FC = () => {
  return (
    <ul className="flex">
      <MenuItem>Home</MenuItem>
      <MenuItem>About Us</MenuItem>
      <MenuItem>Services</MenuItem>
      <MenuItem>Pricing</MenuItem>
      <MenuItem>Careers</MenuItem>
    </ul>
  );
};

export default Menu;
