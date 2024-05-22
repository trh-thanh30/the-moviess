import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import useSWR from "swr";
import { fetcher } from "../config";
import MovieCard from "./MovieCard";
import Footer from "../components/Footer";
import Pagination from "@mui/material/Pagination";
const TrendingPage = () => {
  const [itemOffset] = useState(0);
  const [pageCounts, setPageCounts] = useState("");

  const [movies, setMovies] = useState([]);
  const [page, setNextPgae] = useState(1);

  const { data, error } = useSWR(
    `https://phimapi.com/v1/api/danh-sach/phim-le?page=${page}&limit=20`,
    fetcher
  );
  const loading = !data && !error;

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
  }, [data, itemOffset, pageCounts]);

  const handleChange = (event, value) => {
    setNextPgae(value);
  };

  useEffect(() => {
    document.title = "The Movies || Odd Movies";
  }, []);
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="mt-16">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">LIST OF ODD MOVIES</h1>
            <p className="text-lg font-semibold">
              PAGE{" "}
              <span className="text-lg font-semibold name__user">{page}</span>{" "}
            </p>
          </div>
          {loading && <div className="loading"></div>}
          {!loading && (
            <div className="grid grid-cols-3 lg:grid-cols-4 xl:gap-x-10 gap-x-6 xl:gap-y-6 gap-y-4">
              {movies.length > 0 &&
                movies.map((item) => (
                  <MovieCard key={item._id} item={item}></MovieCard>
                ))}
            </div>
          )}
          <div className="flex items-center justify-center mt-12">
            <Pagination
              count={pageCounts}
              size="large"
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

export default TrendingPage;
