import React, { useState } from "react";
import MovieList from "./MovieList";
import useSWR from "swr";
import { fetcher } from "../config";

const YouAlsoLike = () => {
  return (
    <div className="mt-10">
      <h1 className="text-xl font-semibold">You may also like</h1>

      <MovieList callAPI="phim-le"></MovieList>
    </div>
  );
};

export default YouAlsoLike;