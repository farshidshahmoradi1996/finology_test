import React from "react";
import LogoImg from "assets/imgs/logo.png";

const Logo: React.FC = () => {
  return (
    <div>
      <img src={LogoImg} className="h-auto w-16" alt="logo" />
    </div>
  );
};

export default Logo;
