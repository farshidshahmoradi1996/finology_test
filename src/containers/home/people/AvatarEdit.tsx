import React, { useRef } from "react";
import { ReactComponent as UserSvg } from "assets/svg/user.svg";
import { ReactComponent as PencilSvg } from "assets/svg/pencil.svg";
interface Props {}

const AvatarEdit: React.FC<Props> = ({}) => {
  const imgeInputRef = useRef(null);
  return (
    <>
      <input
        onChange={(e) => {}}
        ref={imgeInputRef}
        className="input"
        accept="image/x-png,image/jpeg,image/gif"
        type="file"
        multiple
        style={{ display: "none" }}
      />
      <div
        onClick={() => (imgeInputRef?.current as any)?.click()}
        className="w-24 h-24 bg-blue-200 rounded-full relative cursor-pointer flex items-center justify-center"
      >
        <UserSvg className="w-24" />
        <div
          className="w-6 h-6 bg-blue-200 shadow-md rounded-full absolute cursor-pointer flex items-center justify-center"
          style={{ bottom: 0, right: 6 }}
        >
          <PencilSvg />
        </div>
      </div>
    </>
  );
};

export default AvatarEdit;
