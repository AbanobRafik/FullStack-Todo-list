import { ReactNode } from "react";

interface Button {
  width?: "w-full" | "w-fit";
  className: string;
  children: ReactNode;
}

const Button = ({ width = "w-full", className, children, ...rest }: Button) => {
  return (
    <button
      className={`${className} ${width} p-3 rounded-md text-white mt-1`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
