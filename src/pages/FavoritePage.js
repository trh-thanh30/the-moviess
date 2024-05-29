import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsMovieCard from "../News/NewsMovieCard";

const FavoritePage = () => {
  const favoriteMovies =
    JSON.parse(localStorage.getItem("favoriteMovies")) || [];

  return (
    <Fragment>
      <Header></Header>
      <div className="container">
        <div className="mt-10 md:mt-16">
          <h1 className="text-base font-medium uppercase md:text-lg md:font-semibold">
            {favoriteMovies.length > 0
              ? "List of favorite movies"
              : "You don't have any favorite movies yet"}
          </h1>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:gap-x-10 md:gap-x-6 xl:gap-y-6 md:gap-y-4 movie__card--reponsive--news">
            {favoriteMovies.map((item) => (
              <NewsMovieCard item={item}></NewsMovieCard>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Fragment>
  );
};

export default FavoritePage;
