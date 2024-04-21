import React, { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.title = "The Moives || Home";
  }, []);

  return <div>Home Page</div>;
};

export default HomePage;
