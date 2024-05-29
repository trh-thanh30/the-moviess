import React, { Fragment, useEffect, useState } from "react";
import watchLogo from "../assets/image/watch.svg";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import useSWR from "swr";
import { fetcher } from "../config";
import { NavLink } from "react-router-dom";
const SliderMobile = () => {
  const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(
    `https://phimapi.com/v1/api/the-loai/tinh-cam`,
    fetcher
  );
  const loading = !data && !error;
  useEffect(() => {
    if (data && data.data && data.data.items) setMovies(data.data.items);
  }, [data]);
  return (
    <Fragment>
      <div className="container">
        <div className="">
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
                  <div className="hide-on-pc hide-on-tablet__limit">
                    <div className="relative mt-8">
                      <img
                        className="object-cover w-full h-full rounded-lg"
                        src={`https://img.phimapi.com/${item.thumb_url}`}
                        alt=""
                      />
                    </div>
                    <h1 className="absolute text-sm font-semibold text-[#FFF] top-[42%] left-2">
                      {item.name}
                    </h1>
                    <span className="absolute top-[54%] left-2 text-green-500 text-xs p-1 bg-green-100 rounded-sm">
                      {item.lang}
                    </span>
                    <span className="absolute top-[54%] left-16 text-blue-500 text-xs p-1 bg-blue-100 rounded-sm">
                      {item.time}
                    </span>
                    <NavLink
                      to={`/movie/${item.slug}`}
                      className="items-center inline-block p-2 text-xs text-white bg-[#c40f62] rounded-full gap-x-1 hover:opacity-90 absolute top-[71%] left-2"
                    >
                      <span className="flex items-center gap-x-1">
                        Watch Now
                        <img className="w-[20px]" src={watchLogo} alt="" />
                      </span>
                    </NavLink>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </Fragment>
  );
};

export default SliderMobile;
