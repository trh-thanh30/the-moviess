import React, { Fragment, useEffect, useState } from "react";
import BannerItem from "./BannerItem";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import useSWR from "swr";
import { fetcher } from "../config";

const Slider = () => {
  const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(
    `https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=3`,
    fetcher
  );
  console.log(data);
  const loading = !data && !error;
  useEffect(() => {
    if (data && data.items) setMovies(data.items);
  }, [data]);
  return (
    <Fragment>
      {loading && <div className="loading"></div>}
      <div className="slider-list">
        <Swiper
          className="-ml-16 -mr-16"
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
       
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          grabCursor={"true"}
          spaceBetween={40}
          slidesPerView={"auto"}
        >
          {!loading &&
            movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item._id}>
                <BannerItem item={item}></BannerItem>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </Fragment>
  );
};

export default Slider;
