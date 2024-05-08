import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import Header from "../components/Header";
import { Pagination } from "@mui/material";
import Footer from "../components/Footer";
import NewsMovieCard from "../News/NewsMovieCard";

const NewMoviesPage = () => {
  const [itemOffset, setItemOffset] = useState(0);
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
  console.log(movies);
  useEffect(() => {
    if (data && data.pagination && data.pagination.totalPages)
      setPageCounts(data.pagination.totalPages);
  }, [data, itemOffset, pageCounts]);

  const handleChange = (event, value) => {
    setNextPgae(value);
  };
  useEffect(() => {
    document.title = "The Movies || New Movies";
  }, []);
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="mt-16">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">LIST OF NEW MOVIES</h1>
            <p className="text-lg font-semibold">
              PAGE{" "}
              <span className="text-lg font-semibold name__user">{page}</span>{" "}
            </p>
          </div>
          {loading && <div className="loading"></div>}
          {!loading && (
            <div className="grid grid-cols-4 gap-x-10 gap-y-6">
              {movies.length > 0 &&
                movies.map((item) => (
                  <NewsMovieCard key={item._id} item={item}></NewsMovieCard>
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

export default NewMoviesPage;
