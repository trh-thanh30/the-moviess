import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import Header from "../components/Header";
import MovieCard from "./MovieCard";
import Footer from "../components/Footer";
import ReactPaginate from "react-paginate";
import { Pagination } from "@mui/material";


const TiviSeriesPage = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCounts, setPageCounts] = useState("");

  const [movies, setMovies] = useState([]);
  const [page, setNextPgae] = useState(1);

  const { data, error } = useSWR(
    `https://phimapi.com/v1/api/danh-sach/tv-shows?page=${page}&limit=20`,
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
    document.title = "The Movies || TV-Seri Moveis";
  }, []);

  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="mt-16">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">
              YOU ARE ON PAGE TV-SERIS MOVIES FILM
            </h1>
            <p className="text-lg font-semibold">
              PAGE{" "}
              <span className="text-lg font-semibold name__user">{page}</span>{" "}
            </p>
          </div>
          {loading && <div className="loading"></div>}
          {!loading && (
            <div className="grid grid-cols-4 gap-10">
              {movies.length > 0 &&
                movies.map((item) => (
                  <MovieCard key={item._id} item={item}></MovieCard>
                ))}
            </div>
          )}
          <div className="flex items-center justify-center mt-20">
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

export default TiviSeriesPage;
