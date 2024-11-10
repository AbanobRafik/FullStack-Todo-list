import { ReactNode } from "react";

interface InputError {
  children: ReactNode;
}

const InputError = ({ children }: InputError) => {
  return (
    <p className="text-red-500 text-base my-2 mx-2 text-center">{children}</p>
  );
};

export default InputError;
