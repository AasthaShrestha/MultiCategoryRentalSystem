import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleLoginClick = () => {
    setIsModalOpen(true); // Open the modal on button click
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-pink-500 font-bold border-b-2 border-pink-500"
              : "text-black hover:text-gray-300 transition duration-300"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/rooms"
          className={({ isActive }) =>
            isActive
              ? "text-pink-500 font-bold border-b-2 border-pink-500"
              : "text-black hover:text-gray-300 transition duration-300"
          }
        >
          Rooms
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/vehicles"
          className={({ isActive }) =>
            isActive
              ? "text-pink-500 font-bold border-b-2 border-pink-500"
              : "text-black hover:text-gray-300 transition duration-300"
          }
        >
          Vehicles
        </NavLink>
      </li>
      <li>
        <button className="flex items-center space-x-1 text-black hover:text-gray-300 transition duration-300">
          <FaPlus />
          <span>Post for free</span>
        </button>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-4">
      <div className="flex items-center justify-between w-full">
        <div className="navbar-start flex items-center space-x-4">
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box mt-3 w-52 p-2 shadow z-[1]"
            >
              {navItems}
            </ul>
          </div>
          <a className="text-2xl font-bold text-pink-600 cursor-pointer">
            YatriKuti
          </a>
        </div>

        <div className="flex flex-1 justify-start lg:w-1/3">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full max-w-sm lg:w-96"
          />
        </div>

        <div className="navbar-end hidden lg:flex items-center space-x-4">
          <ul className="menu menu-horizontal px-1 space-x-4">{navItems}</ul>
        </div>

        <div>
          <button
            onClick={handleLoginClick} // Open modal on click
            className="px-3 py-3 text-white font-semibold bg-gradient-to-r from-pink-500 to-pink-500 rounded-lg shadow-md hover:pink-600 transform transition duration-200 ease-in-out hover:scale-105 flex items-center space-x-2"
          >
            <span>Login</span>
          </button>
        </div>
      </div>

      {/* Login Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="w-full max-w-md p-5 space-y-8 bg-opacity-60 bg-yellow-100 rounded-xl shadow-lg transform transition-all duration-300">
            <button
              onClick={() => setIsModalOpen(false)} // Close the modal
              className="absolute right-2 top-2 text-xl font-bold text-gray-800 hover:text-red-600"
            >
              ✕
            </button>
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Welcome Back
            </h2>

            <p className="text-center text-gray-800">
              Log in to access your account
            </p>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full p-3 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="yourname@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-800"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  className="w-full p-3 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-600 focus:outline-none transform transition duration-200 ease-in-out hover:scale-105"
              >
                Log In
              </button>
            </form>
            <p className="text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <a href="/signup" className="text-indigo-500 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
