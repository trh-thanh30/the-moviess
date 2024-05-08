import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config";
import MovieCard from "./MovieCard";

const SearchPage = () => {
  const { movieQuery } = useParams();
  const [movies, setMovies] = useState([]);
  const [url, setUrl] = useState("");
  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;

  useEffect(() => {
    setUrl(`https://phimapi.com/v1/api/tim-kiem?keyword=${movieQuery}`);
  }, [movieQuery]);
  useEffect(() => {
    if (data && data.data && data.data.items) setMovies(data.data.items);
    window.scrollTo(0, 0);
  }, [data]);

  useEffect(() => {
    document.title = "The movies || Search";
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        {loading && <div className="loading"></div>}
        {!loading && (
          <div>
            <h1 className="mt-16 text-lg font-semibold">
              {movies.length > 0 ? "SEARCH RESULTS" : "NO RESULTS FOUND"}
            </h1>
            <div className="grid grid-cols-4 gap-10">
              {movies.map((item) => (
                <MovieCard key={item._id} item={item}></MovieCard>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;
