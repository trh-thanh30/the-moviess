import React from "react";
import treding from "../assets/image/trending.svg";
import { NavLink } from "react-router-dom";
import MovieList from "../movie/MovieList";
const HomePageSeriesMovies = () => {
  return (
    <div className="container">
      <div className="mt-[72px] flex items-center gap-x-1">
        <img src={treding} alt="" />
        <p className="text-xl font-semibold text-nowrap">SERIES MOVIES</p>
        <span className="division"></span>
        <NavLink
          to={"/seri-movies"}
          className="text-lg font-semibold text-slate-500 text-nowrap"
        >
          View all
        </NavLink>
      </div>
      <MovieList callAPI="phim-bo"></MovieList>
    </div>
  );
};

export default HomePageSeriesMovies;