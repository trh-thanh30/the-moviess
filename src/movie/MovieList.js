import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {} from "swiper";
import "swiper/scss";
import useSWR from "swr";
import MovieCard from "../pages/MovieCard";
import { fetcher } from "../config";
const MovieList = ({ callAPI }) => {
  const [movies, setMovies] = useState([]);
  // const callAPI = "";
  const { data, error, isLoading } = useSWR(
    `https://phimapi.com/v1/api/danh-sach/${callAPI}`,
    fetcher
  );
  const loading = !data && !error;
  useEffect(() => {
    if (data && data.data && data.data.items) setMovies(data.data.items);
  }, [data]);

  return (
    <>
      {loading && <div className="loading"></div>}
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
          spaceBetween={20}
          slidesPerView={"auto"}
        >
          {!loading &&
            movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default MovieList;
