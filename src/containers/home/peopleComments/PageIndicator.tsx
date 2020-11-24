import React from "react";

interface Props {
  activeIndex: number;
  count: number;
}

const PageIndicator: React.FC<Props> = ({ count, activeIndex }) => {
  return (
    <div className="flex justify-center">
      {[...(Array(count).keys() as any)].map((i) => (
        <div
          key={i}
          className={`h-1 flex w-2 h-2 md:w-3 md:h-3  rounded-full mx-2 duration-300  ${
            activeIndex === i ? "bg-primary" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default PageIndicator;
