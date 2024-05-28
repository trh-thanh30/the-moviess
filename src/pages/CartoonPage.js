import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import Header from "../components/Header";
import MovieCard from "./MovieCard";
import Footer from "../components/Footer";
import Pagination from "@mui/material/Pagination";
const CartoonPage = () => {
  const [pageCounts, setPageCounts] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setNextPgae] = useState(1);

  const { data, error } = useSWR(
    `https://phimapi.com/v1/api/danh-sach/hoat-hinh?page=${page}&limit=20`,
    fetcher
  );
  const loading = !data && !error;
  const size =
    window.innerWidth >= 1024
      ? "large"
      : window.innerWidth >= 768
      ? "large"
      : "small";

  useEffect(() => {
    if (data && data.data && data.data.items) setMovies(data.data.items);
    window.scrollTo(0, 0);
  }, [data]);
  useEffect(() => {
    if (
      data &&
      data.data &&
      data.data.params &&
      data.data.params.pagination &&
      data.data.params.pagination.totalPages
    )
      setPageCounts(data.data.params.pagination.totalPages);
  }, [data, pageCounts]);

  const handleChange = (event, value) => {
    setNextPgae(value);
  };

  useEffect(() => {
    document.title = "The Movies || Cartoon Moveis";
  }, []);
  return (
    <div>
      <Header></Header>
      {loading && <div className="header__loading"></div>}
      <div className="container">
        <div className="mt-16">
          {!loading && (
            <div>
              <div className="flex items-center justify-between">
                <h1 className="text-base font-medium md:text-lg md:font-semibold">
                  LIST OF ANIMATED MOVIES
                </h1>
                <p className="text-base font-medium md:text-lg md:font-semibold">
                  PAGE{" "}
                  <span className="text-base font-medium md:text-lg md:font-semibold name__user">
                    {page}
                  </span>{" "}
                </p>
              </div>

              <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:gap-x-10 md:gap-x-6 xl:gap-y-6 md:gap-y-4 movie__card--reponsive">
                {movies.length > 0 &&
                  movies.map((item) => (
                    <MovieCard key={item._id} item={item}></MovieCard>
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

export default CartoonPage;
