import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-cyan-600 to-blue-500 shadow-lg text-white font-semibold text-lg z-50">
      <div className="max-w-6xl mx-auto px-6">
        <ul className="flex justify-center space-x-10 py-4">
          <li>
            <Link
              to="/"
              className="relative px-3 py-2 hover:text-cyan-100 transition-colors duration-300 before:absolute before:left-0 before:-bottom-1 before:h-0.5 before:w-0 before:bg-white before:transition-all hover:before:w-full"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="relative px-3 py-2 hover:text-cyan-100 transition-colors duration-300 before:absolute before:left-0 before:-bottom-1 before:h-0.5 before:w-0 before:bg-white before:transition-all hover:before:w-full"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/articles-list"
              className="relative px-3 py-2 hover:text-cyan-100 transition-colors duration-300 before:absolute before:left-0 before:-bottom-1 before:h-0.5 before:w-0 before:bg-white before:transition-all hover:before:w-full"
            >
              Articles
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
