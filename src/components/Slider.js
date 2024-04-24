import React, { useEffect, useState } from "react";
import BannerItem from "./BannerItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import useSWR from "swr";
import { fetcher } from "../config";

const Slider = () => {
  const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(
    `https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=1`,
    fetcher
  );
  const loading = !data && !error;
  useEffect(() => {
    if (data && data.items) setMovies(data.items);
  }, [data]);

  console.log(movies);

  return (
    <div>
      {loading && <div className="loading"></div>}
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {!loading &&
          movies.length > 0 &&
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
