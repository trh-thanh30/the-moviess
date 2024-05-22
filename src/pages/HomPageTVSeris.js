import React from "react";
import treding from "../assets/image/trending.svg";
import { NavLink } from "react-router-dom";
import MovieList from "../movie/MovieList";
const HomePageTVSeris = () => {
  return (
    <div className="container">
      <div className="lg:mt-[54px] flex items-center gap-x-1  movie__card--top">
        <img src={treding} alt="" />
        <p className="lg:text-xl lg:font-semibold md:text-[20px] md:font-medium text-nowrap">
          TV SERIES
        </p>
        <span className="division"></span>
        <NavLink
          to={"/tv-series"}
          className="lg:text-lg lg:font-semibold md:text-[18px] md:font-normal text-slate-400 text-nowrap hover:text-[#c40f62] transition-colors"
        >
          View all
        </NavLink>
      </div>
      <MovieList callAPI={"tv-shows"}></MovieList>
    </div>
  );
};

export default HomePageTVSeris;
