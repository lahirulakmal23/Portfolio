import React, { useState } from "react";
import { LuSunMoon } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useDarkMode(false);

  const trogletheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className=" navbar w-full fixed top-0 px-5 lg:px-[6%] xl:px-[10%] flex items-center justify-between z-50 bg-white shadow py-3  dark:bg-[#1A0B2E] text-black dark:text-white ">
      {/* Logo */}
      <label className="w-28 cursor-pointer text-xl font-bold">Logo</label>

      {/* Desktop Nav */}
      <ul className=" dark:text-white  dark:bg-gray-800 hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-6 py-2 bg-gray-50 bg-opacity-20 shadow-sm text-md">
        <Link to="/">
          <li className="cursor-pointer hover:text-gray-500 transition">
            Home
          </li>
        </Link>
        <Link to="/About">
          <li className="cursor-pointer hover:text-gray-500 transition">
            About
          </li>
        </Link>
        <Link to="/Experience">
          <li className="cursor-pointer hover:text-gray-500 transition">
            Experience
          </li>
        </Link>
        <Link to="/Project">
          <li className="cursor-pointer hover:text-gray-500 transition">
            Projects
          </li>
        </Link>
        <Link to="/Contact">
          <li className="cursor-pointer hover:text-gray-500 transition">
            Contact
          </li>
        </Link>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-8">
        {/* Theme Icon */}
        <button onClick={trogletheme} className="text-2xl cursor-pointer">
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {/* Resume Button (Desktop Only) */}
        <button className="hidden lg:flex items-center gap-3 px-5 py-1.5 border border-gray-500 rounded-full text-sm hover:bg-gray-100 transition">
          Resume
        </button>

        {/* Hamburger (Mobile Only) */}
        <div className="md:hidden">
          {isOpen ? (
            <HiX
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <HiMenu
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-[50px] left-0 w-full bg-white text-center py-6 flex flex-col gap-4 shadow-md md:hidden z-40 dark:bg-[#1d1836] dark:text-white  ">
          <Link to="">
            <li className="cursor-pointer hover:text-gray-500 transition">
              Home
            </li>
          </Link>
          <Link to="/About">
            <li className="cursor-pointer hover:text-gray-500 transition">
              About
            </li>
          </Link>
          <Link to="/Experience">
            <li className="cursor-pointer hover:text-gray-500 transition">
              Experience
            </li>
          </Link>
       
          <Link to="/Project">
            <li className="cursor-pointer hover:text-gray-500 transition">
              Projects
            </li>
          </Link>
          <Link to="/Contact">
            <li className="cursor-pointer hover:text-gray-500 transition">
              Contact
            </li>
          </Link>
          <button className="mx-auto px-6 py-1 border border-gray-500 rounded-full text-sm hover:bg-gray-100 transition">
            Resume
          </button>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
