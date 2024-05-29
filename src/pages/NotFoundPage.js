import React from "react";
import imageNotFound from "../assets/image/404-image.svg";
import { NavLink } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="page-not__found">
      <div className="flex flex-col md:gap-y-8 gap-y-6">
        <img
          className="block mx-auto md:w-full w-[70%]"
          src={imageNotFound}
          alt="ImgNotFound"
        />
        <div className="text-3xl md:text-5xl">Page Not Found</div>
        <p className="md:w-[400px] w-full text-base text-gray-500">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <NavLink to="/the-moviess" className="p-4 mx-5 text-white bg-green-400 rounded-lg">
          Home Page
        </NavLink>
      </div>
    </div>
  );
};

export default NotFoundPage;
