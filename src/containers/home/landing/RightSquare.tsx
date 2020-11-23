import React from "react";

import SquareRightSvg from "assets/svg/banner-rounded-right.svg";

const RightSquare: React.FC = () => {
  return (
    <img
      className="absolute hidden md:inline "
      style={{ top: 182, maxWidth: 300, right: -136 }}
      src={SquareRightSvg}
      alt="square"
    />
  );
};

export default RightSquare;
