import React from "react";
import watchLogo from "../assets/image/watch.svg";
import { NavLink } from "react-router-dom";
const BannerItem = ({ item }) => {
  //https://img.phimapi.com/upload/vod/20240418-1/2b0dfd94043cc465a10993ea8544d89a.jpg
  const { origin_name, thumb_url, slug } = item;
  return (
    <section className="mt-12">
      <div className="container">
        <div className="relative flex">
          <h1 className="text-xl font-bold text-white header-slider">
            {origin_name}
          </h1>
          <img className="rounded-lg" src={thumb_url} alt="" />
          <NavLink
            to={`/movie/${slug}`}
            className="flex items-center p-4 text-xl text-white bg-red-500 rounded-lg gap-x-4 btn-silde"
          >
            Watch Now
            <img src={watchLogo} alt="" />
          </NavLink>

          <div className="items-center felx gap-x-4">
            <NavLink className="p-3 text-base font-semibold text-black bg-white rounded-lg title-silde">
              Action
            </NavLink>
            <NavLink className="p-3 text-base font-semibold text-black bg-white rounded-lg title-silde__1">
              Adventure
            </NavLink>
            <NavLink className="p-3 text-base font-semibold text-black bg-white rounded-lg title-silde__2">
              Science Fiction
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerItem;
