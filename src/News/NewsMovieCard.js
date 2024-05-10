import React from "react";
import { NavLink } from "react-router-dom";
import play from "../assets/image/play.svg";
const NewsMovieCard = React.memo(({ item }) => {
  if (!item) return null;
  const { origin_name, poster_url, time, quality, slug, year, lang } = item;
  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    }
    return str;
  }
  return (
    <div>
      <div>
        <section className="mt-6 h-[450px]">
          <NavLink to={`/movie/${slug}`} className="image__hover">
            <img
              src={`${poster_url}`}
              alt={origin_name}
              className="w-[256px] h-[368px] object-cover rounded-lg image__father"
            />
            <img src={play} alt="" className="image__play" />
          </NavLink>
          <div className="flex items-center justify-between w-[256px] mt-4">
            <span className="text-base font-semibold text-nowrap">
              {truncateString(origin_name, 20)}
            </span>
            <span className="text-[#c40f62]">{year}</span>
          </div>
          <div className="mt-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-1">
                <span
                  className={` px-2 py-1 rounded-sm text-sm ${
                    quality === "HD"
                      ? `text-green-500  bg-green-50`
                      : `text-red-500 bg-red-50`
                  } `}
                >
                  {quality}
                </span>
                <span className="text-[#c40f62] text-sm">{lang}</span>
              </div>
              <div className="flex items-center gap-x-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#c40f62"
                    class="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <span className="text-sm">{time}</span>
              </div>
            </div>
            <div></div>
          </div>
        </section>
      </div>
    </div>
  );
});

export default NewsMovieCard;
