import React, { useState } from "react";
import MovieList from "./MovieList";
import star from "../assets/image/star.svg";


const YouAlsoLike = ({ item }) => {
  return (
    <>
      <div className="flex items-center mt-7 md:mt-14 gap-x-2">
        <img src={star} alt="" />
        <h1 className="text-base font-semibold md:text-xl">You may also like</h1>
      </div>
      <MovieList callAPI="phim-le"></MovieList>
    </>
  );
};

export default YouAlsoLike;
