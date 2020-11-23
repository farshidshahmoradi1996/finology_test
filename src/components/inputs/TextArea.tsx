import React from "react";

interface Props extends React.HTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  className?: string;
  value?: string;
}

const TextArea: React.FC<Props> = ({
  label,
  error,
  value,
  className,
  ...rest
}) => {
  return (
    <div className={className}>
      <p className="text-primary text-md">{label}</p>

      <textarea
        {...rest}
        className="px-3 py-4 text-gray-900 placeholder-gray-300 rounded-md border w-full text-sm duration-300 mt-2 focus:border-primary"
      >
        {value}
      </textarea>

      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
    </div>
  );
};

export default TextArea;
