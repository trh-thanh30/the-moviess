/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import useSWR from "swr";
import { fetcher } from "../config";
import Footer from "../components/Footer";
import Comments from "../movie/Comments";
import YouAlsoLike from "../movie/YouAlsoLike";
import { NavLink } from "react-router-dom";
import addFvr from "../assets/image/add-fvr.svg";
import date from "../assets/image/date.svg";
import timeIcon from "../assets/image/timeIcon.svg";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
const handleAddMovie = () => {
  toast.success("Movie added to favorites list !!!");
};
const HomePageDetails = () => {
  const { movieSlug } = useParams();
  const { data, error } = useSWR(
    `https://phimapi.com/phim/${movieSlug}`,
    fetcher
  );
  console.log(data);

  const [movies, setMovies] = useState([]);
  console.log("movie", movies);
  const [country, setCountry] = useState([]);
  const [category, setCategory] = useState([]);
  const [sever, setSever] = useState([]);
  const [episode, setEpisode] = useState([]);
  const loading = !data && !error;

  useEffect(() => {
    if (data && data.movie) return setMovies(data.movie);
  }, [data]);

  useEffect(() => {
    if (data && data.movie && data.movie.category)
      setCategory(data.movie.category);
  }, [data]);

  useEffect(() => {
    if (
      data &&
      data.movie &&
      data.movie.country &&
      data.movie.country[0] &&
      data.movie.country[0].name
    )
      setCountry(data.movie.country[0].name);
  }, [data]);

  useEffect(() => {
    if (
      data &&
      data.episodes &&
      data.episodes[0] &&
      data.episodes[0].server_data &&
      data.episodes[0].server_data[0] &&
      data.episodes[0].server_data[0].link_embed
    )
      setSever(data.episodes[0].server_data[0].link_embed);
  }, [data]);

  useEffect(() => {
    if (
      data &&
      data.episodes &&
      data.episodes[0] &&
      data.episodes[0].server_data
    )
      setEpisode(data.episodes[0].server_data);
  }, [data]);

  const handleEpisodeClick = (linkEmbed) => {
    setSever(linkEmbed);
    toast.success(`You have successfully transferred files !!!`);
  };

  useEffect(() => {
    document.title = `${movies.origin_name} - ${movies.name}`;
    window.scrollTo(0, 0);
  }, [movies]);

  const [isFavorite, setIsFavorite] = useState(false);

  // Logic kiểm tra xem phim có trong danh sách yêu thích không
  useEffect(() => {
    const favoriteMovies =
      JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    const found = favoriteMovies.find(
      (movie) => movies.length > 0 && movie.slug === movies.slug
    );
    setIsFavorite(!!found);
  }, [movies]);

  const handleAddFavorite = () => {
    const favoriteMovies =
      JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    if (!isFavorite) {
      favoriteMovies.push(movies);
      localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
      toast.success("Movie saved to favorites list!!!");
    } else {
      const updatedList = favoriteMovies.filter(
        (movie) => movies.length > 0 && movie.slug !== movies.slug
      );
      toast.warning("Unsaved movie in favorites list!!!");
      localStorage.setItem("favoriteMovies", JSON.stringify(updatedList));
    }
    setIsFavorite(!isFavorite);
  };

  function getMiddleName(name) {
    const length = name.split(" ").length;
    return name.split(" ")[length - 1];
  }

  return (
    <>
      <Header></Header>
      <div className="container">
        {loading && <div className="loading"></div>}

        {!loading && (
          <div>
            <div className="mt-10 md:mt-16 hide-on-pc">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="mb-2 text-sm font-semibold md:text-xl">
                    {movies.origin_name}
                  </h2>
                  <h2 className="md:text-[18px] text-sm text-[#c40f62] font-normal ">
                    {movies.name}
                  </h2>
                </div>

                <button
                  className={`flex items-center rounded-lg text-base font-semibold ${
                    isFavorite
                      ? "bg-red-50 text-red-500"
                      : "bg-green-50 text-green-500"
                  }`}
                >
                  {isFavorite ? (
                    <span className="block md:pl-3 pl-1 text-[#EF5D5B] ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="md:w-6 w-[20px]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14"
                        />
                      </svg>
                    </span>
                  ) : (
                    <img
                      className="pl-3 md:w-[26px] w-[20px]"
                      src={addFvr}
                      alt=""
                    />
                  )}
                  <div
                    onClick={() => handleAddFavorite()}
                    className={`w-full md:p-4 p-2 md:text-base text-sm font-medium hover:opacity-8 text-nowrap transition-all`}
                  >
                    {isFavorite ? " Remove to Favorite" : " Add to Favorite"}
                  </div>
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center mt-6 md:mt-9 lg:mt-20 xl:gap-x-10 gap-x-8 lg:flex-row">
              <section className="md:h-[520px] h-[400px]">
                <img
                  className="object-cover h-full rounded-lg md:max-w-[500px]"
                  src={movies.poster_url}
                  alt=""
                />
              </section>

              <section>
                <div className="mt-10 hide-on-tablet lg:my-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="mb-2 text-xl font-semibold">
                        {movies.origin_name}
                      </h2>
                      <h2 className="text-[18px] text-[#c40f62] font-normal ">
                        {movies.name}
                      </h2>
                    </div>

                    <button
                      className={`flex items-center rounded-lg text-base font-semibold ${
                        isFavorite
                          ? "bg-red-50 text-red-500"
                          : "bg-green-50 text-green-500"
                      }`}
                    >
                      {isFavorite ? (
                        <span className="block pl-3 text-[#EF5D5B]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 12h14"
                            />
                          </svg>
                        </span>
                      ) : (
                        <img className="pl-3" src={addFvr} alt="" />
                      )}
                      <div
                        onClick={() => handleAddFavorite()}
                        className={`w-full p-4 text-base font-medium hover:opacity-8 text-nowrap transition-al`}
                      >
                        {isFavorite
                          ? " Remove to Favorite"
                          : " Add to Favorite"}
                      </div>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col justify-center mt-5 md:items-center xl:items-center xl:flex-row xl:mt-10 md:gap-y-5 gap-y-3 lg:justify-start lg:items-start">
                  <div className="flex justify-center gap-x-3 text-nowrap md:justify-normal">
                    {category.length > 0 &&
                      category.slice(0, 2).map((item) => (
                        <NavLink
                          to={`/the-loai/${item.slug}`}
                          className="p-3 text-sm font-semibold text-green-500 rounded-lg md:text-base bg-green-50"
                        >
                          {item.name}
                        </NavLink>
                      ))}
                  </div>
                  <div className="flex items-center justify-between text-sm md:justify-normal md:text-base">
                    <div className="ml-2 md:ml-4">
                      <div className="flex items-center md:gap-x-3 gap-x-2">
                        <img src={date} alt="" />
                        <span>{movies.year}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center md:gap-x-3 gap-x-2">
                        <img src={timeIcon} alt="" />
                        <span>{movies.time}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center gap-x-3">
                        <div className="p-2 text-sm font-semibold text-red-500 rounded-lg md:text-base bg-red-50">
                          {movies.quality}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm font-normal md:mt-6 md:text-base">
                  <span className="text-green-500">Content : </span>
                  {movies.content}
                </p>

                <div className="flex flex-col mt-2 text-sm md:mt-8 md:text-base gap-y-3">
                  <div>
                    <span className="text-green-500">Country : </span>
                    <span>{country}</span>
                  </div>

                  <div>
                    <span className="text-green-500">Date Release : </span>
                    <span>{movies.year}</span>
                  </div>

                  <div className="flex items-center gap-x-2">
                    <div className="flex items-center text-green-500 gap-x-2">
                      Cast <span>:</span>{" "}
                    </div>
                    <p key={movies.name} className="movie__desc">
                      {" " + movies.actor + " "}
                    </p>
                  </div>

                  <div>
                    <span className="text-green-500">Director : </span>
                    <span>{movies.director}</span>
                  </div>
                </div>
              </section>
            </div>

            <div className="my-8 md:my-14 lg:my-16">
              <iframe
                src={sever}
                width="100%"
                // height="580px"
                className="rounded-lg md:h-[580px] h-[300px]"
                allowFullScreen
                sandbox
              ></iframe>
            </div>
            <div className="mt-8 md:mt-14">
              <p className="text-base font-semibold md:text-xl">EPISODE LIST</p>
              <div className="grid grid-cols-3 mt-4 text-sm md:grid-cols-10 gap-x-3 gap-y-3 md:text-bae">
                {episode.length > 0 &&
                  episode.map((item) => (
                    <div
                      data-index={item}
                      data-linkembed={item.link_embed}
                      onClick={() => handleEpisodeClick(item.link_embed)}
                      className="p-2 text-center text-green-500 rounded-lg cursor-pointer bg-green-50 hover:opacity-60 text-nowrap"
                    >
                      {getMiddleName(item.name)}
                    </div>
                  ))}
              </div>
            </div>
            <Comments></Comments>
            <YouAlsoLike></YouAlsoLike>
          </div>
        )}
      </div>
      <Footer></Footer>
    </>
  );
};

export default HomePageDetails;
