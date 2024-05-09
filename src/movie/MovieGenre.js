import React, { Fragment, useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieCard from "../pages/MovieCard";
import { Pagination } from "@mui/material";

const MovieGenre = () => {
  const { movieGenre } = useParams();
  const [itemOffset] = useState(0);
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [pageCounts, setPageCounts] = useState("");
  const [page, setNextPage] = useState(1);
  const { data, error } = useSWR(
    `https://phimapi.com/v1/api/the-loai/${movieGenre}?page=${page}&limit=24`,
    fetcher
  );

  useEffect(() => {
    if (data && data.data && data.data.titlePage) setTitle(data.data.titlePage);
  }, [data]);

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
  console.log(pageCounts);

  const handleChange = (event, value) => {
    setNextPage(value);
  };
  useEffect(() => {
    document.title = `The Movies || ${title}`;
  }, [data, title]);
  console.log(data);
  const loading = !data && !error;
  return (
    <Fragment>
      <Header></Header>
      <div className="container">
        {loading && <div className="loading"></div>}
        {!loading && (
          <div className="mt-16">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-semibold">
                LIST OF{" "}
                <span className="uppercase text-[#c40f62]">"{title}"</span>{" "}
                MOVIES{" "}
              </h1>
              <p className="text-lg font-semibold">
                PAGE{" "}
                <span className="text-lg font-semibold name__user">{page}</span>{" "}
              </p>
            </div>
            <div className="grid grid-cols-4 gap-x-10 gap-y-6">
              {movies.length > 0 &&
                movies.map((item) => (
                  <MovieCard key={item._id} item={item}></MovieCard>
                ))}
            </div>
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
      <Footer></Footer>
    </Fragment>
  );
};

export default MovieGenre;
