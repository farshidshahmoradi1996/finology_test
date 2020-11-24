import React from "react";
import { ReactComponent as HappyFaceSvg } from "assets/svg/happy-face.svg";
import GarbageImg from "assets/svg/garbage.svg";
import { Button } from "components";
interface Props {
  onAddRequest(): void;
  onEditModeRequested(): void;
  onEditCancel(): void;
  onDelete(): void;
  isEditMode: boolean;
}

const Head: React.FC<Props> = ({
  onAddRequest,
  onEditModeRequested,
  onEditCancel,
  isEditMode,
  onDelete,
}) => {
  return (
    <div className="md:flex  items-center justify-between">
      <div className="md:w-8/12 w-full flex flex flex-col md:flex-row  items-center container ">
        <div
          className="w-12 h-12 bg-pink-500 rounded-full flex justify-center items-center"
          style={{ boxShadow: "0 10px 10px #fbc2ff" }}
        >
          <HappyFaceSvg />
        </div>
        <h2 className="text-primary font-bold text-2xl md:pl-12 mt-4 md:mt-0 ">
          Our Important people is listed
          <br />
          here
        </h2>
      </div>
      <div className="md:w-4/12 w-full flex justify-center items-center">
        {isEditMode ? (
          <div className=" w-full flex items-center justify-end ">
            <Button
              title="Cancel"
              customColor
              className="text-gray-600 fadeIn animated "
              onClick={onEditCancel}
            />
            <div
              onClick={onDelete}
              className="cursor-pointer select-none fadeIn animated "
            >
              <img src={GarbageImg} alt="delete icon" />
            </div>
          </div>
        ) : (
          <div className=" w-full flex  animated items-center justify-end ">
            <Button title="Edit" onClick={onEditModeRequested} />
            <Button
              title="Add"
              onClick={onAddRequest}
              className="ml-4 bg-purple-100 text-purple-500  "
              customColor
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Head;
