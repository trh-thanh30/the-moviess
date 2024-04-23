import React from "react";
import BannerItem from "./BannerItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

const Slider = () => {
  return (
    <div>
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        <SwiperSlide>
          <BannerItem></BannerItem>
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem></BannerItem>
        </SwiperSlide>

        <SwiperSlide>
          <BannerItem></BannerItem>
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem></BannerItem>
        </SwiperSlide>

        <SwiperSlide>
          <BannerItem></BannerItem>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
