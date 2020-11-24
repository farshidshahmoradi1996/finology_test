import CheckBox from "components/inputs/CheckBox";
import React, { useState } from "react";
import type { IPeople } from "types";
import { ReactComponent as PencilSvg } from "assets/svg/pencil.svg";
interface Props {
  data: IPeople;
  isEditMode: boolean;
  isSelected?: boolean;
  onSelect(id: number): void;
  onEdit(data: IPeople): void;
}

const PeopleCard: React.FC<Props> = ({
  data,
  isEditMode,
  onSelect,
  onEdit,
  isSelected = false,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={() => onSelect(data?.id)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="bg-white fadeInUp overflow-hidden relative animated shadow-md rounded-lg mx-2 md:mx-8  my-2 md:my-6  w-40 h-60 cursor-pointer duration-300 hover:shadow-xl"
    >
      <img
        src={data.avatar?.name ? URL.createObjectURL(data.avatar) : data.avatar}
        className="w-full h-32 object-cover "
        alt="avatar"
      />

      <p className="text-md font-bold text-center mt-6 ">{data.name}</p>
      <p className="text-md text-gray-400 text-center mt-2">{data.position}</p>
      {isEditMode && (
        <div className="absolute animated fadeIn" style={{ top: 10, left: 10 }}>
          <CheckBox checked={isSelected} onChange={() => {}} />
        </div>
      )}
      {hover && !isEditMode && (
        <div
          className="w-8 h-8  justify-center flex rounded-full fadeInUp animated items-center absolute bg-blue-200"
          style={{ top: 10, right: 10 }}
          onClick={(e) => {
            e.stopPropagation();
            onEdit(data);
          }}
        >
          <PencilSvg />
        </div>
      )}
    </div>
  );
};

export default PeopleCard;
