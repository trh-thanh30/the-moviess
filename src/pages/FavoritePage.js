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
        <div className="mt-16">
          <h1 className="text-lg font-semibold uppercase">
            list of favorite movies
          </h1>
          <div className="grid grid-cols-4 gap-x-10 gap-y-6">
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
