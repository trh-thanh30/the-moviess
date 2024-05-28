import React, { Fragment, useEffect, useState } from "react";
import BannerItem from "./BannerItem";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import useSWR from "swr";
import { fetcher } from "../config";

import "swiper/css/effect-fade";

const Slider = () => {
  const [movies, setMovies] = useState([]);

  const { data, error } = useSWR(
    `https://phimapi.com/v1/api/the-loai/hanh-dong`,
    fetcher
  );
  const loading = !data && !error;
  useEffect(() => {
    if (data && data.data && data.data.items) setMovies(data.data.items);
  }, [data]);
  return (
    <Fragment>
      {/* {loading && <div className="loading"></div>} */}
      <div className="slider-list--banner">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          grabCursor={"true"}
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
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
