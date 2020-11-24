import React from "react";
import CheckSvg from "assets/svg/checked.svg";
interface Props {
  checked: boolean;
  onChange(val: boolean): void;
}

const CheckBox: React.FC<Props> = ({ checked, onChange }) => {
  return (
    <div
      className={`w-6 h-6 border border-gray-400 duration-300 rounded-full flex items-center justify-center ${
        checked && "bg-primary"
      }`}
    >
      {checked && <img src={CheckSvg} className="fadeIn animated" alt="" />}
    </div>
  );
};

export default CheckBox;
