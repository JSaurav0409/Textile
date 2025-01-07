import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink

const Header = () => {
  return (
    <header className="bg-gray-200 text-black p-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Textile Company</h1>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-500 text-white px-4 py-2 rounded-full transition-all duration-300"
                    : "text-black hover:text-white hover:bg-blue-500 px-4 py-2 rounded-full transition-all duration-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-500 text-white px-4 py-2 rounded-full transition-all duration-300"
                    : "text-black hover:text-white hover:bg-blue-500 px-4 py-2 rounded-full transition-all duration-300"
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-500 text-white px-4 py-2 rounded-full transition-all duration-300"
                    : "text-black hover:text-white hover:bg-blue-500 px-4 py-2 rounded-full transition-all duration-300"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-500 text-white px-4 py-2 rounded-full transition-all duration-300"
                    : "text-black hover:text-white hover:bg-blue-500 px-4 py-2 rounded-full transition-all duration-300"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
