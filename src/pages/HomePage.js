import React, { Fragment, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import MoviePageBody from "../components/MoviePageBody";
import SliderMobile from "../components/SliderMobile";

const HomePage = () => {
  useEffect(() => {
    document.title = "The Moives || Home";
  }, []);

  return (
    <Fragment>
      <Header></Header>
      <Slider></Slider>
      <SliderMobile></SliderMobile>
      <MoviePageBody></MoviePageBody>
      <Footer></Footer>
    </Fragment>
  );
};

export default HomePage;
