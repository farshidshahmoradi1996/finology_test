import React from "react";

//local
import { ReactComponent as HeartSvg } from "assets/svg/heart.svg";
import SwiperBox from "./SwiperBox";
import { Button } from "components";

const People: React.FC = () => {
  return (
    <div className="mt-12 container">
      <div className="md:flex  md:px-12 items-center justify-between">
        <div className="md:w-8/12 w-full flex flex flex-col md:flex-row  items-center container px-12">
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
            <Button title="Edit" />
            <Button
              title="Add"
              className="ml-4 bg-purple-100 text-purple-500  "
              customColor
            />
          </div>
        </div>
      </div>
      <div className="container mt-8 mb-16">
        <SwiperBox />
      </div>
    </div>
  );
};

export default People;
