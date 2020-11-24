import React, { useState } from "react";

//local
import { ReactComponent as HeartSvg } from "assets/svg/heart.svg";
import SwiperBox from "./SwiperBox";
import ArrowImg from "assets/svg/arrow-right.svg";

import PageIndicator from "./PageIndicator";
import { useDevice } from "hooks";
const People: React.FC = () => {
  const { isMobile } = useDevice();
  const [activeIndex, setActiveIndex] = useState(0);
  const getActivePage = () => {
    if (isMobile) return activeIndex;
    if (activeIndex <= 2) return 0;
    if (activeIndex <= 5) return 1;
    if (activeIndex <= 8) return 2;
    return 0;
  };
  return (
    <div className="mt-16 container">
      <div className="md:flex   items-center justify-between">
        <div className="md:w-8/12 w-full flex flex flex-col md:flex-row  items-center container ">
          <div
            className="w-12 h-12 bg-red-500 rounded-full flex justify-center items-center"
            style={{ boxShadow: "0 10px 10px #ff9a8f" }}
          >
            <HeartSvg />
          </div>
          <h2 className="text-primary font-bold text-2xl md:pl-12 mt-4 md:mt-0 ">
            What other People say about <br />
            our services
          </h2>
        </div>
        <div className="md:w-4/12 w-full flex justify-center items-center">
          <div className=" w-full flex  animated items-center justify-end ">
            <div className="w-12 h-12 flex items-center justify-center rounded-full cursor-pointer bg-purple-100  ">
              <img src={ArrowImg} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-8 mb-16 ">
        <SwiperBox onSlideChange={(_i) => setActiveIndex(_i)} />
      </div>
      <PageIndicator activeIndex={getActivePage()} count={isMobile ? 9 : 3} />
    </div>
  );
};

export default People;
