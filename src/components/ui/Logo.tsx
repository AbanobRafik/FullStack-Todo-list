import { CheckCircle } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center p-2 relative group cursor-pointer">
      {/* Main logo container with gradient background and hover effect */}
      <div className="relative rounded-lg overflow-hidden transition-all duration-300 transform group-hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-red-500 to-orange-500 animate-gradient-xy"></div>

        <div className="relative px-4 py-2 flex items-center space-x-2">
          {/* Icon with animation */}
          <CheckCircle className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-12" />

          {/* Text with modern styling */}
          <h2 className="text-2xl font-extrabold text-white">
            <span className="inline-block transform transition-transform duration-300 group-hover:-translate-y-1">
              T
            </span>
            <span className="inline-block transform transition-transform duration-300 group-hover:-translate-y-0.5">
              o
            </span>
            <span className="inline-block text-3xl transform transition-transform duration-300 group-hover:translate-y-0.5">
              D
            </span>
            <span className="inline-block transform transition-transform duration-300 group-hover:-translate-y-1">
              o
            </span>
            <span className="inline-block transform transition-transform duration-300 group-hover:translate-y-0.5">
              z
            </span>
            <span className="inline-block transform transition-transform duration-300 group-hover:-translate-y-1">
              e
            </span>
          </h2>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default Logo;
