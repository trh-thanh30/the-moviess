import React from "react";
import { NavLink } from "react-router-dom";
import play from "../assets/image/play.svg";
const MovieCard = React.memo(({ item }) => {
  const { origin_name, poster_url, time, quality, slug, year, lang } = item;
  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    }
    return str;
  }
  return (
    <div className="-mb-[20px] md:mb-0">
      <section className="w-full h-[72%] mt-6 movie__card">
        <NavLink to={`/movie/${slug}`} className="image__hover">
          <img
            src={`https://img.phimapi.com/${poster_url}`}
            alt={origin_name}
            className="object-cover md:h-[390px] h-full w-full rounded-lg image__father"
          />
          <img src={play} alt="" className="image__play md:w-[50px] w-[40px]" />
        </NavLink>
        <div className="flex items-center justify-between my-2 md:mt-4">
          <span className="text-base font-semibold text-nowrap hide-on-mobile">
            {truncateString(origin_name, 18)}
          </span>
          <span className="text-xs font-medium text-nowrap hide-on-pc hide-on-tablet__limit">
            {truncateString(origin_name, 13)}
          </span>
          <span className="text-[#c40f62] md:text-base text-xs">{year}</span>
        </div>
        <div className="mt-0 md:mt-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center md:gap-x-1 gap-x-[2px]">
              <span
                className={` px-2 py-1 rounded-sm md:text-sm text-[10px] ${
                  quality === "HD"
                    ? `text-green-500  bg-green-50`
                    : `text-red-500 bg-red-50`
                } `}
              >
                {quality}
              </span>
              <span className="text-[#c40f62] md:text-sm text-[10px] text-nowrap">
                {lang}
              </span>
            </div>
            <div className="flex items-center md:gap-x-1 gap-x-[2px]">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#c40f62"
                  className="md:w-5 md:h-5 w-[10px] h-[10px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
              <span className="md:text-sm text-[10px] text-nowrap">
                {" "}
                {truncateString(time, 7)}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default MovieCard;
