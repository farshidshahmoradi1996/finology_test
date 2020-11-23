import React from "react";

interface Props {
  visible: boolean;
  onClick?(): void;
  className?: string;
  z?: 10 | 20 | 30 | 40 | 50;
}

const Backdrop: React.FC<Props> = ({
  visible,
  onClick = () => {},
  children,
  className = "",
  z = 20,
}) => {
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`z-${z} w-screen h-screen fixed fade-in flex items-center justify-center ${
        !visible && " hidden "
      } ${className}`}
      style={{ backgroundColor: "rgba(0,0,0,0.2)", top: 0, right: 0 }}
    >
      {children}
    </div>
  );
};

export default Backdrop;
