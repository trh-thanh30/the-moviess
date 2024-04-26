import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import Header from "../components/Header";
import MovieCard from "./MovieCard";
import Footer from "../components/Footer";

const pageCount = 3;
const TiviSeriesPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setNextPgae] = useState(1);
  console.log(page);
  const { data, error } = useSWR(
    `https://phimapi.com/v1/api/danh-sach/tv-shows?page=${page}&limit=20`,
    fetcher
  );
  const loading = !data && !error;

  useEffect(() => {
    if (data && data.data && data.data.items) setMovies(data.data.items);

    window.scrollTo(0, 0);
  }, [data]);
  console.log(movies);
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
          <div className="flex items-center justify-center mt-12 gap-x-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            {new Array(pageCount).fill(0).map((item, index) => (
              <span
                onClick={() => setNextPgae(index + 1)}
                className="px-3 py-1 text-green-500 rounded-lg cursor-pointer bg-green-50 hover:opacity-75"
              >
                {index + 1}
              </span>
            ))}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokelinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default TiviSeriesPage;
