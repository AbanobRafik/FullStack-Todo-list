import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 shadow-md">
      <h2 className="text-2xl font-bold text-white">ToDoze</h2>
      <ul className="flex gap-6">
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
};

export default NavBar;
