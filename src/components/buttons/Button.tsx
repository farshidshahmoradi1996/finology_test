import React from "react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
  customColor?: boolean;
}

const Button: React.FC<Props> = ({
  title,
  className,
  customColor = false,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`rounded-md font-bold px-6 py-2 select-none hover:shadow-xl duration-300 ${
        !customColor && "bg-yellow-100 text-yellow-500"
      } ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
