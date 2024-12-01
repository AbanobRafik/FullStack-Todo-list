import TodoList from "../components/TodoList";
import { userData } from "../UserData";

const Todos = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-3 text-center">
        <span className="text-teal-600">{userData.user.username}</span> Todo
        List 📝
      </h1>
      <TodoList />
    </div>
  );
};

export default Todos;
