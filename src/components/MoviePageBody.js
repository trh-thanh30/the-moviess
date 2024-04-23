import React from "react";
import HomePageTrending from "../pages/HomePageTrending";
import HomePageSeriesMovies from "../pages/HomePageSeriesMovies";
import HomePageCartoon from "../pages/HomePageCartoon";
import HomePageTVSeris from "../pages/HomPageTVSeris";

const MoviePageBody = () => {
  return (
    <div>
      <HomePageTrending></HomePageTrending>
      <HomePageSeriesMovies></HomePageSeriesMovies>
      <HomePageCartoon></HomePageCartoon>
      <HomePageTVSeris></HomePageTVSeris>
    </div>
  );
};

export default MoviePageBody;
