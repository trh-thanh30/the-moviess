import React, { useEffect } from "react";
import Header from "../components/Header";

const TrendingPage = () => {
  useEffect(() => {
    document.title = "The Movies || Trending";
  }, []);
  return (
    <div>
      <Header></Header>
    </div>
  );
};

export default TrendingPage;
