import treding from "../assets/image/trending.svg";
import { NavLink } from "react-router-dom";
import MovieList from "../movie/MovieList";
import useSWR from "swr";
import { fetcher } from "../config";
const HomePageTrending = () => {
  const { data, error } = useSWR(
    `https://phimapi.com/v1/api/danh-sach/phim-le`,
    fetcher
  );
  const loading = !data && !error;
  return (
    <div className="container">
      {loading ? (
        ""
      ) : (
        <div className="lg:mt-[68px] md:mt-[28px] md:mb-[4px] -mb-[8px] flex items-center md:gap-x-1 gap-x-[2px] movie__card--top">
          <img className="md:w-[26px] w-[14px]" src={treding} alt="" />
          <p className="lg:text-xl lg:font-semibold md:text-[20px] text-xs md:font-medium text-nowrap">
            SINGLES MOVIES
          </p>
          <span className="division"></span>
          <NavLink
            to={"/signle-movies"}
            className="lg:text-lg lg:font-semibold md:text-[18px] md:font-normal text-slate-400 text-nowrap hover:text-[#c40f62] transition-colors text-xs"
          >
            View all
          </NavLink>
        </div>
      )}
      <MovieList callAPI={"phim-le"}></MovieList>
    </div>
  );
};

export default HomePageTrending;
