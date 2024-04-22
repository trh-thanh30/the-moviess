import React from "react";
import logo from "../assets/image/the-moviess.svg";
import logoMovies from "../assets/image/logo-image.svg";
import { NavLink } from "react-router-dom";
import IconSearch from "../icon/IconSearch";
const Header = () => {
  //input-icon
  return (
    <div className="container">
      <div className="flex items-center justify-between mt-10">
        <div className="flex items-center gap-x-3">
          <img src={logoMovies} alt="" />
          <img src={logo} alt="" />
        </div>
        <div className="relative text-base">
          <input
            type="text"
            className="p-4 text-base text-black border border-gray-400 outline-none rounded-xl w-[410px] shadow-lg"
            placeholder="Search movies......."
          />
          <IconSearch className="pl-4 input-icon"></IconSearch>
        </div>
        <div className="flex items-center text-base text-gray-500 gap-x-5">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "text-rose-400" : "")}
          >
            Home
          </NavLink>
          <NavLink className="header-link">Movies</NavLink>
          <NavLink className="header-link">Series</NavLink>
          <NavLink className="header-link">Animation</NavLink>
        </div>
        <div className="flex items-center text-base text-gray-500 gap-x-2">
          <NavLink to={"/sign-in"} className="header-link">
            Sign In
          </NavLink>
          <span>/</span>
          <NavLink to={"/sign-up"} className="header-link">
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
