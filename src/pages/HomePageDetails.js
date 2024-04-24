import { doc } from "firebase/firestore";
import React, { useEffect } from "react";
import Header from "../components/Header";

const HomePageDetails = () => {
  useEffect(() => {
    document.title = "The Movie || Movie Details";
  }, []);
  return (
    <div>
      <Header></Header>
    </div>
  );
};

export default HomePageDetails;
