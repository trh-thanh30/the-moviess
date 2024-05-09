import React from "react";
import { NavLink } from "react-router-dom";
import play from "../assets/image/play.svg";
import timeIcon from "../assets/image/timeIcon.svg";

const NewsMovieCard = React.memo(({ item }) => {
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
              src={`${poster_url}`}
              alt={origin_name}
              className="w-[256px] h-[344px] object-cover rounded-lg image__father"
            />
            <img src={play} alt="" className="image__play" />
          </NavLink>
          <div className="flex items-center justify-between w-[256px] mt-4">
            <span className="text-base font-semibold text-nowrap">
              {truncateString(origin_name, 24)}
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
});

export default NewsMovieCard;
