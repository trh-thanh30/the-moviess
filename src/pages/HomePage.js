import React, { Fragment, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MoviePageBody from "../components/MoviePageBody";
import Slider from "../components/Slider";

const HomePage = () => {
  useEffect(() => {
    document.title = "The Moives || Home";
  }, []);

  return (
    <Fragment>
      <Header></Header>
      <Slider></Slider>
      <MoviePageBody></MoviePageBody>
      <Footer></Footer>
    </Fragment>
  );
};

export default HomePage;
