import React, { Fragment, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import MoviePageBody from "../components/MoviePageBody";
import SliderMobile from "../components/SliderMobile";
import useSWR from "swr";
import { fetcher } from "../config";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(
    `https://phimapi.com/v1/api/danh-sach/phim-le`,
    fetcher
  );
  const loading = !data && !error;
  useEffect(() => {
    document.title = "The Moives || Home";
  }, []);

  return (
    <Fragment>
      <Header></Header>
      {loading && <div className="header__loading"></div>}
      <Slider></Slider>
      <SliderMobile></SliderMobile>
      <MoviePageBody></MoviePageBody>
      <Footer></Footer>
    </Fragment>
  );
};

export default HomePage;
