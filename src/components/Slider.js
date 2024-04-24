import React, { useEffect, useState } from "react";
import BannerItem from "./BannerItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import useSWR from "swr";
import { fetcher } from "../config";

const Slider = () => {
  const [movies, setMovies] = useState([]);
  const { data, error, isLoading } = useSWR(
    `https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=1`,
    fetcher
  );
  useEffect(() => {
    if (data && data.items) setMovies(data.items);
  }, [data]);
  console.log(movies);

  return (
    <div>
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Slider;
