const TodoSkeleton = () => {
  return (
    <div className="space-y-5 p-3">
      <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
        <div className="md:p-6 p-2 flex items-center justify-between hover:bg-gray-200 transition-colors duration-200">
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="bg-gray-400 rounded-full h-5 w-5 md:h-6 md:w-6 animate-pulse"></div>
            <div className="bg-gray-400 rounded-md h-4 md:h-6 w-24 md:w-48 animate-pulse"></div>
          </div>
          <div className="flex items-center space-x-1 md:space-x-3">
            <div className="bg-gray-400 h-8 md:h-9 w-16 md:w-20 rounded-md animate-pulse"></div>
            <div className="bg-gray-400 h-8 md:h-9 w-16 md:w-20 rounded-md animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoSkeleton;
