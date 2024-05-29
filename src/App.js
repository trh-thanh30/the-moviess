import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage";
import TrendingPage from "./pages/TrendingPage";
import SeriMoviesPage from "./pages/SeriMoviesPage";
import CartoonPage from "./pages/CartoonPage";
import HomePageDetails from "./pages/HomePageDetails";
import TiviSeriesPage from "./pages/TiviSeriesPage";
import SearchPage from "./pages/SearchPage";
import NewMoviesPage from "./pages/NewMoviesPage";
import MovieGenre from "./movie/MovieGenre";
import MovieNations from "./movie/MovieNations";
import FavoritePage from "./pages/FavoritePage";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/the-moviess" element={<HomePage></HomePage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        <Route
          path="/signle-movies"
          element={<TrendingPage></TrendingPage>}
        ></Route>

        <Route
          path="/seri-movies"
          element={<SeriMoviesPage></SeriMoviesPage>}
        ></Route>
        <Route
          path="/cartoon-movie"
          element={<CartoonPage></CartoonPage>}
        ></Route>
        <Route
          path="/new-movies"
          element={<NewMoviesPage></NewMoviesPage>}
        ></Route>
        <Route
          path="/tv-series"
          element={<TiviSeriesPage></TiviSeriesPage>}
        ></Route>

        <Route
          path="/favourite"
          element={<FavoritePage></FavoritePage>}
        ></Route>

        <Route
          path="/movie/:movieSlug"
          element={<HomePageDetails></HomePageDetails>}
        ></Route>

        <Route
          path="/the-loai/:movieGenre"
          element={<MovieGenre></MovieGenre>}
        ></Route>

        <Route
          path="/quoc-gia/:movieNation"
          element={<MovieNations></MovieNations>}
        ></Route>

        <Route
          path="/search/:movieQuery"
          element={<SearchPage></SearchPage>}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
