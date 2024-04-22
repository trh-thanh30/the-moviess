import React from "react";
import imgSlide from "../assets/image/avatar.png";
import watchLogo from "../assets/image/watch.svg";
import star from "../assets/image/star.svg";
import { NavLink } from "react-router-dom";
const Slider = () => {
  return (
    <div className="mt-12">
      <div className="container">
        <div className="relative">
          <h1 className="text-xl font-bold text-white header-slider">
            Avatar: The Way of Water
          </h1>
          <img className="rounded-lg" src={imgSlide} alt="" />
          <NavLink className="flex items-center p-4 text-xl text-white bg-red-500 rounded-lg gap-x-4 btn-silde">
            Watch Now
            <img src={watchLogo} alt="" />
          </NavLink>

          <div className="items-center felx gap-x-4">
            <NavLink className="p-3 text-base font-semibold text-black bg-white rounded-lg title-silde">
              Action
            </NavLink>
            <NavLink className="p-3 text-base font-semibold text-black bg-white rounded-lg title-silde__1">
              Adventure
            </NavLink>
            <NavLink className="p-3 text-base font-semibold text-black bg-white rounded-lg title-silde__2">
              Science Fiction
            </NavLink>
          </div>

          <p className="text-base font-medium text-white desc-silde max-w-[626px]">
            Set more than a decade after the events of the first film, learn the
            story of the Sully family (Jake, Neytiri, and their kids), the
            trouble that follows them, the lengths they go to keep each other
            safe, the battles they fight to stay alive, and the tragedies they
            endure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
