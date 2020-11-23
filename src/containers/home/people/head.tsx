import React from "react";
import { ReactComponent as HappyFaceSvg } from "assets/svg/happy-face.svg";
import { Button } from "components";
interface Props {}

const Head: React.FC<Props> = () => {
  return (
    <div className="md:flex px-12 items-center justify-between">
      <div className="md:w-8/12 flex">
        <div className="w-12 h-12 bg-red-600 rounded-full flex justify-center items-center">
          <HappyFaceSvg />
        </div>
        <h2 className="text-primary font-bold text-2xl pl-12 ">
          Our Important people is listed
          <br />
          here
        </h2>
      </div>
      <div className="md:w-4/12 flex items-center justify-end ">
        <Button title="Edit" />
        <Button
          title="Add"
          className="ml-4 bg-purple-200 text-purple-500"
          customColor
        />
      </div>
    </div>
  );
};

export default Head;
