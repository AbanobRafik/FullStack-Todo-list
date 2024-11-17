import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-indigo-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className="text-2xl font-bold text-white">ToDoze</h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-between md:flex-1">
            {/* Main navigation links */}
            <ul className="flex gap-10 justify-center flex-1">
              <li>
                <NavLink
                  to="/"
                  className="text-white hover:text-indigo-200 font-semibold transition duration-500 ease-in-out"
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

            {/* Login and Register links */}
            <ul className="flex items-center gap-6">
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
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        id="mobile-menu"
      >
        <div className="p-2 flex flex-col">
          {/* Main navigation links */}
          <div className="flex-grow flex flex-col items-center justify-center space-y-4">
            <NavLink
              to="/"
              className="text-white hover:text-indigo-200 rounded-md text-lg font-medium"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-white hover:text-indigo-200 px-3 py-2 rounded-md text-lg font-medium"
            >
              About
            </NavLink>
            <NavLink
              to="/todos"
              className="text-white hover:text-indigo-200 px-3 py-2 rounded-md text-lg font-medium"
            >
              Todos
            </NavLink>
          </div>
          {/* Login and Register links */}
          <div className="mt-auto flex justify-between items-center p-2">
            <NavLink
              to="/login"
              className="text-white hover:text-indigo-200 p-2 rounded-md text-base font-medium"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="text-indigo-600 bg-white hover:bg-indigo-100 px-4 py-2 rounded-lg shadow-md text-base font-medium"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
