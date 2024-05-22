import React from "react";
import treding from "../assets/image/trending.svg";
import { NavLink } from "react-router-dom";
import MovieList from "../movie/MovieList";
const HomePageCartoon = () => {
  return (
    <div className="container">
      <div className="lg:mt-[54px] flex items-center gap-x-1 movie__card--top">
        <img src={treding} alt="" />
        <p className="lg:text-xl lg:font-semibold md:text-[20px] md:font-medium text-nowrap ">
          CARTOONS MOVIES
        </p>
        <span className="division"></span>
        <NavLink
          to={"/cartoon-movie"}
          className="lg:text-lg lg:font-semibold md:text-[18px] md:font-normal text-slate-400 text-nowrap hover:text-[#c40f62] transition-colors"
        >
          View all
        </NavLink>
      </div>
      <MovieList callAPI={"hoat-hinh"}></MovieList>
    </div>
  );
};

export default HomePageCartoon;
