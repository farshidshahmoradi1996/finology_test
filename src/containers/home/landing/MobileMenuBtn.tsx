import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}

const MobileMenuBtn: React.FC<Props> = ({ isOpen, ...props }) => {
  return (
    <div
      id="nav-icon"
      className={` md:hidden ${isOpen && " open z-40"}${props.className}`}
      {...props}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MobileMenuBtn;
