import { LoaderCircle } from "lucide-react";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: "w-full" | "w-fit";
  className?: string;
  children: ReactNode;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  width = "w-full",
  className = "",
  children,
  isLoading = false,
  type,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${className} ${width}  $ p-3 rounded-md text-white mt-1 flex items-center justify-center`}
      {...rest}
      disabled={isLoading}
    >
      {isLoading ? <LoaderCircle className="animate-spin w-4 h-4" /> : children}
    </button>
  );
};

export default Button;
