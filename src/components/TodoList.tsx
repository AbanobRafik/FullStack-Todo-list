import { CheckCircle, Edit, Trash2 } from "lucide-react";
import Button from "./ui/Button";

export default function TodoList() {
  return (
    <div className="space-y-5 p-8">
      <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
        <div className="md:p-6 p-2 flex items-center justify-between hover:bg-gray-200 transition-colors duration-200">
          <div className="flex items-center space-x-2 md:space-x-4 ">
            <CheckCircle className="text-green-500 md:h-6 md:w-6 h-5 w-5" />
            <p className="md:text-lg text-sm font-semibold text-gray-800">
              My first todo
            </p>
          </div>
          <div className="flex items-center space-x-1 md:space-x-3">
            <Button className="flex items-center md:space-x-2 md:px-4 md:py-2 space-x-1 px-2 py-1 text-sm font-medium bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition duration-300 ease-in-out">
              <Edit className="w-2 h-2 md:w-4 md:h-4" />
              <span>Edit</span>
            </Button>
            <Button className="flex items-center md:space-x-2 md:px-4 md:py-2 space-x-1 px-2 py-1 text-sm font-medium bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 ease-in-out">
              <Trash2 className="w-2 h-2 md:w-4 md:h-4" />
              <span>Delete</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
