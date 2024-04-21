import React, { useEffect } from "react";
import imageNotFound from "../assets/image/404-image.svg";
import { NavLink } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="page-not__found">
      <div className="flex flex-col gap-y-8">
        <img className="block mx-auto" src={imageNotFound} alt="ImgNotFound" />
        <div className="text-5xl">Page Not Found</div>
        <p className="w-[400px] text-base text-gray-500">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <NavLink to="/" className="p-4 text-white bg-green-400 rounded-lg">Home Page</NavLink>
      </div>
    </div>
  );
};

export default NotFoundPage;
