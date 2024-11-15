import { NavLink } from "react-router-dom";

export default function Component() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 shadow-md">
      {/* Logo on the left */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-white">ToDoze</h2>
      </div>

      {/* Main navigation links in the center */}
      <ul className="flex gap-10 justify-center flex-1">
        <li>
          <NavLink
            to="/"
            className="text-white hover:text-indigo-200 font-semibold transition duration-300 ease-in-out"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="text-white hover:text-indigo-200 font-semibold transition duration-300 ease-in-out"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/todos"
            className="text-white hover:text-indigo-200 font-semibold transition duration-300 ease-in-out"
          >
            Todos
          </NavLink>
        </li>
      </ul>

      {/* Login and Register links on the right */}
      <ul className="flex items-center gap-6 flex-1 justify-end">
        <li>
          <NavLink
            to="/login"
            className="text-white hover:text-indigo-200 font-semibold transition duration-300 ease-in-out"
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className="text-indigo-600 bg-white hover:bg-indigo-100 font-semibold px-4 py-2 rounded-lg shadow-md transition duration-300 ease-in-out"
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
