import React from "react";
import { NavLink } from "react-router-dom";
import addFvr from "../assets/image/add-fvr.svg";
import date from "../assets/image/date.svg";
import timeIcon from "../assets/image/timeIcon.svg";
import star from "../assets/image/star.svg";
import { toast } from "react-toastify";

const MovieDetailsDesc = ({ item }) => {

  const handleAddMovie = () => {
    toast.success("Movie added to favorites list !!!");
  };
  return (
    <div className="flex mt-20 gap-x-8">
      <section className="w-[352px] h-[460px]">
        <img
          className="object-cover w-full h-full rounded-lg"
          src={''}
          alt=""
        />
      </section>
      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">{}</h2>
          <div className="flex items-center p-4 bg-red-500 rounded-lg gap-x-2">
            <img src={addFvr} alt="" />
            <button
              onClick={handleAddMovie}
              className="text-base font-normal text-white hover:opacity-8"
            >
              Add to Favourite
            </button>
          </div>
        </div>

        <div className="flex items-center mt-14">
          <div className="flex gap-x-3">
            <NavLink className="p-3 text-base font-semibold text-green-500 rounded-lg bg-green-50">
              Drama
            </NavLink>
            <NavLink className="p-3 text-base font-semibold text-green-500 rounded-lg bg-green-50">
              Science Fiction
            </NavLink>
          </div>
          <div className="ml-4">
            <div className="flex items-center gap-x-3">
              <img src={date} alt="" />
              <span>2023</span>
            </div>
          </div>
          <div className="ml-4">
            <div className="flex items-center gap-x-3">
              <img src={timeIcon} alt="" />
              <span>50:38</span>
            </div>
          </div>
          <div className="ml-4">
            <div className="flex items-center gap-x-3">
              <img src={star} alt="" />
              <span>8.5</span>
            </div>
          </div>
        </div>

        <p className="w-[708px] mt-6 text-base font-normal">
          <span className="text-green-500">Content : </span>
          In a ruined and toxic future, a community exists in a giant
          underground silo that plunges hundreds of stories deep. There, men and
          women live in a society full of regulations they believe are meant to
          protect them.
        </p>

        <div className="flex flex-col mt-11 gap-y-2">
          <div>
            <span className="text-green-500">Country : </span>
            <span>United States</span>
          </div>

          <div>
            <span className="text-green-500">Date Release : </span>
            <span>May 05 2023</span>
          </div>

          <div>
            <span className="text-green-500">Cast : </span>
            <span className="max-w-[338px] text-wrap">
              Tim Robbins, Rebecca Ferguson, Avi Nash, Rashida Jones, David
              Oyewolo, Tim Robbins
            </span>
          </div>

          <div>
            <span className="text-green-500">Director : </span>
            <span>HuuThanh</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieDetailsDesc;