import React from "react";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  className?: string;
  value?: string;
}

const TextBox: React.FC<Props> = ({
  label,
  error,
  className,
  value,
  ...rest
}) => {
  return (
    <div className={className}>
      <p className="text-primary text-md">{label}</p>

      <input
        {...rest}
        value={value}
        className="px-3 py-4 text-gray-900 placeholder-gray-300 rounded-md border w-full text-sm duration-300 mt-2 focus:border-primary "
      />

      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
    </div>
  );
};

export default TextBox;
