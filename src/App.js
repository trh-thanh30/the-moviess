import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage";
import TrendingPage from "./pages/TrendingPage";
import SeriMoviesPage from "./pages/SeriMoviesPage";
import CartoonPage from "./pages/CartoonPage";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        <Route path="/trending" element={<TrendingPage></TrendingPage>}></Route>
        <Route
          path="/seri-movies"
          element={<SeriMoviesPage></SeriMoviesPage>}
        ></Route>
          <Route
          path="/cartoon-movie"
          element={<CartoonPage></CartoonPage>}
        ></Route>
          <Route
          path="/tv-series"
          element={<SeriMoviesPage></SeriMoviesPage>}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
