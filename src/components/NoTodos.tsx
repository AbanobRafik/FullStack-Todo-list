import { AlertCircle } from "lucide-react";

export function NoTodos() {
  return (
    <div
      className="flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50"
      role="alert"
    >
      <AlertCircle className="flex-shrink-0 inline w-4 h-4 mr-3" />
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium">No Todos</span> You haven't added any
        todos yet. Start by adding a new task!
      </div>
    </div>
  );
}
