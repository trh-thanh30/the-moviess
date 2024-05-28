import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import Header from "../components/Header";
import { Pagination } from "@mui/material";
import Footer from "../components/Footer";
import NewsMovieCard from "../News/NewsMovieCard";

const NewMoviesPage = () => {
  const [itemOffset] = useState(0);
  const [pageCounts, setPageCounts] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setNextPgae] = useState(1);

  const { data, error } = useSWR(
    `https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=${page}&limit=20`,
    fetcher
  );
  console.log(data);

  const loading = !data && !error;

  useEffect(() => {
    if (data && data.items) setMovies(data.items);

    window.scrollTo(0, 0);
  }, [data]);

  useEffect(() => {
    if (data && data.pagination && data.pagination.totalPages)
      setPageCounts(data.pagination.totalPages);
  }, [data, itemOffset, pageCounts]);

  const handleChange = (event, value) => {
    setNextPgae(value);
  };
  const size =
    window.innerWidth >= 1024
      ? "large"
      : window.innerWidth >= 768
      ? "large"
      : "small";

  useEffect(() => {
    document.title = "The Movies || New Movies";
  }, []);
  return (
    <div>
      <Header></Header>
      <div className="container">
        {loading && <div className="header__loading"></div>}
        <div className="mt-10 md:mt-16">
          {!loading && (
            <div>
              <div className="flex items-center justify-between">
                <h1 className="text-base font-medium md:text-lg md:font-semibold">
                  LIST OF NEW MOVIES
                </h1>
                <p className="text-base font-medium md:text-lg md:font-semibold">
                  PAGE{" "}
                  <span className="text-base font-medium md:text-lg md:font-semibold name__user">
                    {page}
                  </span>{" "}
                </p>
              </div>

              <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:gap-x-10 md:gap-x-6 xl:gap-y-6 md:gap-y-4 movie__card--reponsive--news">
                {movies.length > 0 &&
                  movies.map((item) => (
                    <NewsMovieCard key={item._id} item={item}></NewsMovieCard>
                  ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-center mt-14 md:mt-13">
            <Pagination
              count={pageCounts}
              size={size}
              onChange={handleChange}
              color="primary"
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default NewMoviesPage;
