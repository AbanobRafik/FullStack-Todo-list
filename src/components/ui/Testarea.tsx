import { TextareaHTMLAttributes } from "react";
import clsx from "clsx";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const TextArea = ({ className, ...rest }: IProps) => {
  return (
    <textarea
      className={clsx(
        "border-2  border-gray-500 px-3 py-2  focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-lg text-md w-full bg-transparent resize-y",
        className
      )}
      {...rest}
    />
  );
};

export default TextArea;
