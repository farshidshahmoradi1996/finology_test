import React from "react";
import { ReactComponent as SquareLeftSvg } from "assets/svg/banner-rounded.svg";

const Squares: React.FC = () => {
  return (
    <>
      <div
        className="absolute md:flex items-center justify-center hidden"
        style={{ width: 350, height: 350, bottom: -30, left: -70 }}
      >
        <SquareLeftSvg className="w-full h-full" />
      </div>
    </>
  );
};

export default Squares;
