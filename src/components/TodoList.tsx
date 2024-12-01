import { CheckCircle, Edit, Trash2 } from "lucide-react";
import Button from "./ui/Button";
import { NoTodos } from "./NoTodos";
import { ITodo } from "../interfaces";
import { userData } from "../UserData";
import { useState } from "react";
import Modal from "./ui/Modal";
import Input from "./ui/Input";
import axiosInstance from "../config/axios.config";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { todoSchema, TodoSchemaType } from "./validation";
import TextArea from "./ui/Testarea";
import TodoSkeleton from "./TodoSkeleton";
import useCustomeQuery from "./hooks/useCustomeQuery";

function TodoList() {
  // States
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isToAdd, setIsToAdd] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState<ITodo>({
    id: 0,
    documentId: "",
    title: "",
    description: "",
  });

  const { data, isLoading, refetch } = useCustomeQuery({
    queryKey: ["TodoList"],
    apiUrl: "/users/me?populate=todos",
    config: {
      headers: {
        Authorization: `Bearer ${userData.jwt}`,
      },
    },
  });

  // React Hook Form Setup with Zod Validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // <-- added reset
  } = useForm<TodoSchemaType>({
    resolver: zodResolver(todoSchema),
  });

  // Handlers
  const onOpenEditModal = (todo: ITodo) => {
    setTodoToEdit(todo);
    reset({ title: todo.title, description: todo.description }); // <-- reset form with new values
    setIsEditModalOpen(true);
  };

  const onCloseEditModal = () => {
    setTodoToEdit({ id: 0, title: "", description: "" });
    setIsEditModalOpen(false);
  };

  const onOpenDeleteModal = (todo: ITodo) => {
    setTodoToEdit(todo);
    setIsOpenDeleteModal(true);
  };

  const oncloseDeleteModal = () => {
    setTodoToEdit({ id: 0, title: "", description: "" });
    setIsOpenDeleteModal(false);
  };

  const onOpenAddModal = () => {
    setIsToAdd(true);
    reset({ title: "", description: "" });
  };
  const onCloseAddModal = () => {
    reset({ title: "", description: "" });
    setIsToAdd(false);
  };

  const onSubmitHandlerToAdd = async (data: TodoSchemaType) => {
    setIsUpdating(true);
    try {
      const { status } = await axiosInstance.post(
        "/todos",
        {
          data: {
            title: data.title,
            description: data.description,
            user: [userData.user.id],
          },
        },
        {
          headers: {
            Authorization: `Bearer ${userData.jwt}`,
          },
        }
      );
      if (status === 201) {
        await refetch();
        onCloseAddModal();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsUpdating(false);
    }
  };

  // Submit Handler for edit with Validation
  const onSubmitHandlerToEdit = async (data: TodoSchemaType) => {
    setIsUpdating(true);
    try {
      const { status } = await axiosInstance.put(
        `/todos/${todoToEdit.documentId}`,
        {
          data: {
            title: data.title,
            description: data.description,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${userData.jwt}`,
          },
        }
      );
      if (status === 200) {
        onCloseEditModal();
        await refetch();
      }
    } catch (error) {
      console.error("Error updating todo:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  const onDeleteHandler = async () => {
    setIsUpdating(true);
    try {
      const { status } = await axiosInstance.delete(
        `/todos/${todoToEdit.documentId}`,
        {
          headers: {
            Authorization: `Bearer ${userData.jwt}`,
          },
        }
      );
      if (status === 204) {
        await refetch();
        oncloseDeleteModal();
      }
    } catch (error) {
      console.error("error", error);
    } finally {
      setIsUpdating(false);
    }
  };

  if (isLoading)
    return (
      <div>
        {Array.from({ length: 3 }, (_, idx) => (
          <TodoSkeleton key={idx} />
        ))}
      </div>
    );

  return (
    <div className="space-y-5 p-8">
      <div className="flex justify-center items-center gap-5">
        <Button
          width="w-fit"
          isLoading={isUpdating}
          onClick={onOpenAddModal}
          className="bg-cyan-500 hover:bg-cyan-800 duration-300 border-2 border-cyan-500 hover:border-cyan-800 ease-out"
        >
          Post New Todo
        </Button>
      </div>
      {data.todos.length ? (
        [...data.todos].reverse().map((todo: ITodo) => (
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
              <div className="flex items-center space-x-1 md:space-x-3">
                <Button
                  onClick={() => onOpenEditModal(todo)}
                  className="flex items-center md:space-x-2 md:px-4 md:py-2 space-x-1 px-2 py-1 text-sm font-medium bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition duration-300 ease-in-out"
                >
                  <Edit className="w-2 h-2 md:w-4 md:h-4" />
                  <span>Edit</span>
                </Button>
                <Button
                  onClick={() => onOpenDeleteModal(todo)}
                  className="flex items-center md:space-x-2 md:px-4 md:py-2 space-x-1 px-2 py-1 text-sm font-medium bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
                >
                  <Trash2 className="w-2 h-2 md:w-4 md:h-4" />
                  <span>Delete</span>
                </Button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <NoTodos
          boldMsg="No Todos"
          msg="You haven't added any todos yet. Start by adding a new task!"
        />
      )}

      {/* add todo modal */}
      <Modal isOpen={isToAdd} close={onCloseAddModal} title="Add a New Todo">
        <form
          className="flex flex-col gap-3"
          onSubmit={handleSubmit(onSubmitHandlerToAdd)}
        >
          <Input placeholder="Title" {...register("title")} />
          {errors.title && (
            <p className="text-red-500 text-sm mb-2">{errors.title.message}</p>
          )}

          {/* Description Textarea */}
          <TextArea
            placeholder="Description..."
            rows={6}
            {...register("description")} // Ensure correct registration here
          />

          <div className="flex gap-5 mt-5 p-2">
            <Button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-800 duration-300 text-white"
              isLoading={isUpdating}
            >
              Add
            </Button>
            <Button
              onClick={onCloseAddModal}
              className="bg-red-500 hover:bg-red-800 duration-300 text-white"
              type="button"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>

      {/* Edit Todo Modal */}
      <Modal
        isOpen={isEditModalOpen}
        close={onCloseEditModal}
        title="Edit Todo"
      >
        <form
          className="flex flex-col gap-3"
          onSubmit={handleSubmit(onSubmitHandlerToEdit)}
        >
          <Input placeholder="Title" {...register("title")} />
          {errors.title && (
            <p className="text-red-500 text-sm mb-2">{errors.title.message}</p>
          )}

          {/* Description Textarea */}
          <TextArea
            placeholder="Description..."
            rows={6}
            {...register("description")} // Ensure correct registration here
          />

          <div className="flex gap-5 mt-5 p-2">
            <Button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-800 duration-300 text-white"
              isLoading={isUpdating}
            >
              Update
            </Button>
            <Button
              onClick={onCloseEditModal}
              className="bg-red-500 hover:bg-red-800 duration-300 text-white"
              type="button"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>

      {/* Delete Todo Modal */}
      <Modal
        isOpen={isOpenDeleteModal}
        close={oncloseDeleteModal}
        title="Are you sure you want to delete this todo?"
        description="Deleting this todo will remove it permanently and you won't be able to recover it."
      >
        <div className="flex gap-4">
          <Button
            onClick={onDeleteHandler}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-300"
            isLoading={isUpdating}
          >
            Delete
          </Button>
          <Button
            onClick={oncloseDeleteModal}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md transition duration-300"
            type="button"
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default TodoList;
