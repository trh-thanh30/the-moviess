import React from "react";
import treding from "../assets/image/trending.svg";
import { NavLink } from "react-router-dom";
import MovieList from "../movie/MovieList";
const HomePageTVSeris = () => {
  return (
    <div className="container">
      <div className="lg:mt-[60px] md:mt-[28px] mt-[14px] md:mb-[4px] -mb-[8px] flex items-center md:gap-x-1 gap-x-[2px] movie__card--top">
        <img className="md:w-[26px] w-[14px]" src={treding} alt="" />
        <p className="lg:text-xl lg:font-semibold md:text-[20px] text-xs md:font-medium text-nowrap">
          TV SERIES
        </p>
        <span className="division"></span>
        <NavLink
          to={"/tv-series"}
          className="lg:text-lg lg:font-semibold md:text-[18px] md:font-normal text-slate-400 text-nowrap hover:text-[#c40f62] transition-colors text-xs"
        >
          View all
        </NavLink>
      </div>
      <MovieList callAPI={"tv-shows"}></MovieList>
    </div>
  );
};

export default HomePageTVSeris;
