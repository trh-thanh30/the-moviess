import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config";
import MovieCard from "./MovieCard";
import { Pagination } from "@mui/material";

const SearchPage = () => {
  const [page, setNextPgae] = useState(1);
  const [pageCounts, setPageCounts] = useState("");
  const { movieQuery } = useParams();
  const [movies, setMovies] = useState([]);
  const [url, setUrl] = useState("");
  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;
  const size =
    window.innerWidth >= 1024
      ? "large"
      : window.innerWidth >= 768
      ? "large"
      : "small";

  useEffect(() => {
    setUrl(
      `https://phimapi.com/v1/api/tim-kiem?keyword=${movieQuery}&limit=20`
    );
  }, [movieQuery, page]);
  useEffect(() => {
    if (data && data.data && data.data.items) setMovies(data.data.items);
    window.scrollTo(0, 0);
  }, [data]);

  useEffect(() => {
    document.title = "The movies || Search";
  }, []);
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

  return (
    <>
      <Header />
      {loading && <div className="header__loading"></div>}
      <div className="container">
        {!loading && (
          <div>
            <h1 className="mt-10 text-base font-semibold md:text-lg md:mt-16">
              {movies.length > 0
                ? `SEARCH RESULTS ${movieQuery}`
                : "NO RESULTS FOUND"}
            </h1>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:gap-x-10 md:gap-x-6 xl:gap-y-6 md:gap-y-4 movie__card--reponsive">
              {movies.map((item) => (
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
      <Footer />
    </>
  );
};

export default SearchPage;
