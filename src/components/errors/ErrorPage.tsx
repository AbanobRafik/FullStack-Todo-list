import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Button from "../ui/Button";

const ErrorPage = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  const handleBackToHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col items-center justify-center h-svh bg-gray-100 text-gray-800 p-4">
      <AlertTriangle className="w-16 h-16 text-red-500 mb-6" />
      <h1 className="text-4xl font-bold mb-4 text-center">
        Oops! Something went wrong.
      </h1>
      <p className="text-xl mb-8 max-w-md text-center">
        We're sorry, but an error occurred while processing your request. Please
        try again later.
      </p>
      <div className=" flex items-center gap-5">
        <Button
          onClick={handleBackToHome}
          className="bg-emerald-600 hover:bg-emerald-800 duration-300 ease-in flex gap-3 "
        >
          <Home className="w-5 h-5" />
          Home
        </Button>
        <Button
          onClick={handleRefresh}
          className="bg-cyan-600 hover:bg-cyan-800 duration-300 ease-in flex gap-3 "
        >
          <RefreshCw className="w-5 h-5" />
          Refresh
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
