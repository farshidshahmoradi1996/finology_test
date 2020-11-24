import React from "react";
import { ReactComponent as UserSvg } from "assets/svg/user.svg";
import { ReactComponent as PencilSvg } from "assets/svg/pencil.svg";
interface Props {
  onClick(): void;
  src?: any;
}

const AvatarEdit: React.FC<Props> = ({ onClick, src }) => {
  return (
    <>
      <div
        onClick={onClick}
        className="w-24 h-24 bg-blue-200  rounded-full relative cursor-pointer flex items-center justify-center"
      >
        {src ? (
          <img
            src={src?.name ? URL.createObjectURL(src) : src}
            className="w-full h-full rounded-full object-fill"
            alt="avatar"
          />
        ) : (
          <UserSvg className="w-24" />
        )}

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
