import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MovieCard from "./MovieCard";
import ReactPaginate from "react-paginate";

const itemsPerPage = 20;
const SeriMoviesPage = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCounts, setPageCounts] = useState("");

  const [movies, setMovies] = useState([]);
  const [page, setNextPgae] = useState(1);
  console.log(page);
  const { data, error } = useSWR(
    `https://phimapi.com/v1/api/danh-sach/phim-bo?page=${page}&limit=20`,
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
    console.log(pageCounts);
  }, [data, itemOffset, pageCounts]);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % data.data.params.pagination.totalPages;
    setItemOffset(newOffset);
    setNextPgae(event.selected + 1);
  };

  useEffect(() => {
    document.title = "The Movies || Seri Moveis";
  }, []);
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="mt-16">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">
              YOU ARE ON PAGE SERIS MOVIES FILM
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
          <div className="mt-10">
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCounts}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
              className="pagination"
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SeriMoviesPage;
