import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import play from "../assets/image/play.svg";
import timeIcon from "../assets/image/timeIcon.svg";
import axios from "axios";
const MovieCard = ({ item }) => {
  //https://img.phimapi.com/upload/vod/20240418-1/2b0dfd94043cc465a10993ea8544d89a.jpg
  const { origin_name, poster_url, time, quality, slug } = item;
  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    }
    return str;
  }

  return (
    <div>
      <div>
        <section className="mt-6">
          <NavLink to={`/movie/${slug}`} className="image__hover">
            <img
              src={`https://img.phimapi.com/${poster_url}`}
              alt=""
              className="w-[256px] h-[344px] object-cover rounded-lg image__father"
            />
            <img src={play} alt="" className="image__play" />
          </NavLink>
          <div className="flex items-center justify-between w-[256px] mt-4">
            <span className="text-base font-semibold text-nowrap">
              {truncateString(origin_name, 8)}
            </span>
            <div className="flex items-center gap-x-1">
              <span className="p-1 text-white bg-red-500 rounded-lg">
                {quality}
              </span>
              <div className="flex items-center p-1 rounded-lg gap-x-1 time-border text-nowrap">
                <img src={timeIcon} alt="" />
                {time}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MovieCard;
