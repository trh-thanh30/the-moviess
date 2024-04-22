import React from "react";
import treding from "../assets/image/trending.svg";
import { NavLink } from "react-router-dom";
const HomePageTrending = () => {
  return (
    <div className="container">
      <div className="mt-[72px] flex items-center gap-x-2">
        <img src={treding} alt="" />
        <p className="text-2xl font-semibold">Trending</p>
        <span className="division"></span>
        <NavLink to={"/trending"} className="text-base">More</NavLink>
      </div>
    </div>
  );
};

export default HomePageTrending;
