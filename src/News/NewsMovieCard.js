import React from "react";
import { NavLink } from "react-router-dom";
import play from "../assets/image/play.svg";
const NewsMoiveCard = React.memo(({ item }) => {
  const { origin_name, poster_url, time, quality, slug, year, lang, name } =
    item;
  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    }
    return str;
  }
  return (
    <section className="w-full mt-6 movie__card">
      <NavLink to={`/movie/${slug}`} className="image__hover">
        <img
          src={poster_url}
          alt={origin_name}
          className="object-cover h-[380px] w-full rounded-lg image__father"
        />
        <img src={play} alt="" className="image__play" />
      </NavLink>
      <div className="flex items-center justify-between mt-4">
        <span className="text-base font-semibold text-nowrap">
          {truncateString(origin_name, 18)}
        </span>
        <div className="flex items-center gap-x-2">
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
          <span className="text-[#c40f62]">{year}</span>
        </div>
      </div>
      <div className="mt-1">
        <h1 className="text-[#c40f62] text-sm">{name}</h1>
      </div>
    </section>
  );
});

export default NewsMoiveCard;
