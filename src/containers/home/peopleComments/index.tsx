import React from "react";

//local
import { ReactComponent as HeartSvg } from "assets/svg/heart.svg";
import SwiperBox from "./SwiperBox";

const People: React.FC = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-col md:flex-row items-center container px-12">
        <div className="w-12 h-12 bg-red-600 rounded-full flex justify-center items-center">
          <HeartSvg />
        </div>
        <h2 className="text-primary font-bold text-2xl pl-12 mt-4 md:mt-0">
          What other People say about <br />
          our services
        </h2>
      </div>
      <div className="container mt-8 mb-16">
        <SwiperBox />
      </div>
    </div>
  );
};

export default People;
