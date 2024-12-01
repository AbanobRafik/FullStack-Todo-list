import useCustomeQuery from "../components/hooks/useCustomeQuery";
import TodoSkeleton from "../components/TodoSkeleton";
import { userData } from "../UserData";
import { faker } from "@faker-js/faker";
import axiosInstance from "../config/axios.config";
import { useState } from "react";
import Button from "../components/ui/Button";
import { CheckCircle } from "lucide-react";
import { ITodo } from "../interfaces";
import Paginator from "../components/ui/Paginator";

const TodosPage = () => {
  const [isUpdating, setIsUpdating] = useState(false);

  const { data, isLoading, refetch } = useCustomeQuery({
    queryKey: ["TodoList"],
    apiUrl: "/users/me?populate=todos",
    config: {
      headers: {
        Authorization: `Bearer ${userData.jwt}`,
      },
    },
  });

  const onGenerateTodos = async () => {
    setIsUpdating(true);
    for (let i = 0; i < 5; i++) {
      try {
        const { data } = await axiosInstance.post(
          "/todos",
          {
            data: {
              title: faker.word.words(3),
              description: faker.lorem.paragraph(2),
              user: [userData.user.id],
            },
          },
          {
            headers: {
              Authorization: `Bearer ${userData.jwt}`,
            },
          }
        );
        refetch();
        console.log(data);
      } catch (error) {
        console.error(error);
        // Optionally show an error message here
      }
    }
    setIsUpdating(false);
  };

  if (isLoading)
    return (
      <div>
        {Array.from({ length: 3 }, (_, idx) => (
          <TodoSkeleton key={idx} />
        ))}
      </div>
    );

  const reversedTodos = [...data.todos].reverse();

  return (
    <div className="space-y-5 p-8">
      <div className="flex justify-center items-center">
        <Button
          width="w-fit"
          isLoading={isUpdating}
          className="bg-slate-100 border-2 border-sky-600 text-black hover:bg-sky-600 hover:text-white duration-300 ease-out"
          onClick={onGenerateTodos}
        >
          Generate ToDos
        </Button>
      </div>
      {reversedTodos.length ? (
        reversedTodos.map((todo: ITodo) => (
          <div
            key={todo.id}
            className="bg-gray-100 shadow-md rounded-lg overflow-hidden"
          >
            <div className="md:p-6 p-2 flex items-center justify-between hover:bg-gray-200 transition-colors duration-200">
              <div className="flex items-center space-x-2 md:space-x-4">
                <CheckCircle className="text-green-500 md:h-6 md:w-6 h-5 w-5" />
                <p className="md:text-lg text-sm font-semibold text-gray-800">
                  {todo.title}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No todos available.</p>
      )}
      <Paginator />
    </div>
  );
};

export default TodosPage;
