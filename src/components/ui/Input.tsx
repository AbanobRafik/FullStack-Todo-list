import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx"; // Install this using npm or yarn: npm install clsx

interface Input extends InputHTMLAttributes<HTMLInputElement> {
  className?: string; // Use lowercase "className" to follow HTML conventions
}

const Input = forwardRef<HTMLInputElement, Input>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          `
          border-2 border-gray-500 
          px-3 py-2 
          w-full
          rounded-md
          focus:outline-none focus:border-indigo-500 
          focus:ring-1 focus:ring-indigo-500 
          transition duration-300 
          text-sm md:text-base
          placeholder-gray-500
          shadow-sm shadow-white
          `,
          className // Merge additional styles dynamically
        )}
        {...rest}
      />
    );
  }
);

export default Input;
