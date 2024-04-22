import React, { useEffect } from "react";

const TrendingPage = () => {
  useEffect(() => {
    document.title = "The Movies || Trending";
  }, []);
  return <div>Trending Page</div>;
};

export default TrendingPage;
