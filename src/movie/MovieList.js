import React, { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {} from "swiper";
import "swiper/scss";
import useSWR from "swr";
// import MovieCard from "../pages/MovieCard";
import { fetcher } from "../config";
import MovieCardHome from "./MovieCardHome";
const MovieList = ({ callAPI }) => {
  const [movies, setMovies] = useState([]);

  const { data, error } = useSWR(
    `https://phimapi.com/v1/api/danh-sach/${callAPI}`,
    fetcher
  );

  const loading = !data && !error;
  useEffect(() => {
    if (data && data.data && data.data.items) setMovies(data.data.items);
    window.scrollTo(0, 0);
  }, [data]);
  const slidesPerView =
    window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 2;
  const spaceBetween =
    window.innerWidth >= 1024 ? 28 : window.innerWidth >= 768 ? 22 : 14;
  return (
    <Fragment>
      {/* {loading && <div className="loading"></div>} */}
      <div className="movie-list">
        <Swiper
          className="-ml-16 -mr-16"
          centeredSlides={false}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          grabCursor={"true"}
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
        >
          {!loading &&
            movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item._id}>
                <MovieCardHome item={item}></MovieCardHome>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </Fragment>
  );
};

export default MovieList;
