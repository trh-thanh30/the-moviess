import { doc } from "firebase/firestore";
import React, { useEffect } from "react";
import Header from "../components/Header";
import useSWR from "swr";
import { fetcher } from "../config";
import { useParams } from "react-router-dom";

const HomePageDetails = () => {
  const { movieSlug } = useParams();
  const { data, error, isLoading } = useSWR(
    `https://phimapi.com/phim/${movieSlug}`,
    fetcher
  );
  console.log(data);
  useEffect(() => {
    document.title = "The Movie || Movie Details";
  }, []);
  return (
    <div>
      <Header></Header>

      
      <div></div>
    </div>
  );
};

export default HomePageDetails;
