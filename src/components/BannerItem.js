import React from "react";
import watchLogo from "../assets/image/watch.svg";
import { NavLink } from "react-router-dom";
const BannerItem = React.memo(({ item }) => {
  const {
    origin_name,
    year,
    poster_url,
    slug,
    name,
    lang,
    episode_current,
    quality,
    category,
  } = item;

  return (
    <section className="mt-12">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="lg:text-[26px] lg:font-extrabold  text-[#1A162E] uppercase tracking-wide header--slider">
              {origin_name}
            </h1>
            <h2 className="text-[#c40f62] mt-1">{name}</h2>

            <div className="flex lg:mt-9 lg:mb-9 lg:items-center lg:flex-row lg:gap-x-5 banner__desc">
              <div className="flex items-center gap-x-2">
                <span className="px-3 py-1 text-white bg-black rounded-sm text-nowrap">
                  {episode_current}
                </span>
                <span>{quality}</span>
              </div>
              <div className="flex items-center text-nowrap gap-x-3">
                {category.length > 0 &&
                  category.slice(0, 2).map((item) => (
                    <NavLink
                      to={`/the-loai/${item.slug}`}
                      className={"hover:text-[#c40f62]"}
                    >
                      {item.name}
                    </NavLink>
                  ))}
              </div>

              <div className="flex lg:gap-x-6 silder__item">
                <div className="flex items-center gap-x-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      class="text-primary iconify iconify--bx"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#c40f62"
                        d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"
                      ></path>
                      <path
                        fill="#c40f62"
                        d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2M19 8l.001 12H5V8z"
                      ></path>
                    </svg>
                  </span>
                  <span>{year}</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      class="text-primary iconify iconify--tdesign"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#c40f62"
                        d="M1 3h22v18H1zm2 2v14h18V5zm2 5a2 2 0 0 1 2-2h4v2H7v4h4v2H7a2 2 0 0 1-2-2zm8 0a2 2 0 0 1 2-2h4v2h-4v4h4v2h-4a2 2 0 0 1-2-2z"
                      ></path>
                    </svg>
                  </span>
                  <span>{lang}</span>
                </div>
              </div>
            </div>
            <NavLink
              to={`/movie/${slug}`}
              className="items-center inline-block p-4 text-xl text-white bg-[#c40f62] rounded-full gap-x-4 hover:opacity-90"
            >
              <span className="flex items-center gap-x-3">
                Watch Now
                <img src={watchLogo} alt="" />
              </span>
            </NavLink>
          </div>

          <div className="image-item">
            <img
              className="lg:w-[320px] lg:h-[480px] object-cover image--slider__item"
              src={`https://img.phimapi.com/${poster_url}`}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default BannerItem;
