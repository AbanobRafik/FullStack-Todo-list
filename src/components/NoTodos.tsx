import { AlertCircle } from "lucide-react";

interface NoTodos {
  boldMsg: string;
  msg: string;
}

export function NoTodos({ boldMsg, msg }: NoTodos) {
  return (
    <div
      className="flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50"
      role="alert"
    >
      <AlertCircle className="flex-shrink-0 inline w-4 h-4 mr-3" />
      <div>
        <span className="font-medium">{boldMsg}</span> {msg}
      </div>
    </div>
  );
}
