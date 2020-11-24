import React, { useEffect, useState } from "react";

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
  const [isHidden, setIsHidden] = useState(true);
  const [mountetd, setMounted] = useState(false);
  useEffect(() => {
    if (!mountetd) {
      setMounted(true);
      return;
    }
    if (visible) setIsHidden(!visible);
    else {
      setTimeout(() => {
        setIsHidden(!visible);
      }, 200);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);
  if (isHidden) return null;
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`z-${z} w-screen animated h-screen fixed ${
        visible ? "fadeIn" : "fadeOut"
      } flex items-center justify-center ${
        isHidden && " hidden "
      } ${className}`}
      style={{ backgroundColor: "rgba(0,0,0,0.4)", top: 0, right: 0 }}
    >
      {children}
    </div>
  );
};

export default Backdrop;
