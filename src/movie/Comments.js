import React from "react";
import userAvt from "../assets/image/user-img.svg";
const Comments = () => {
  const date = new Date().toLocaleDateString() + "";
  return (
    <div className="mt-12">
      <h1 className="mb-8 text-xl font-semibold">Comments</h1>
      <h3 className="mb-3 text-base font-semibold">Huu Thanh</h3>
      <div className="flex items-center gap-x-3">
        <input
          type="text"
          placeholder="Write your comments here....."
          className="w-[816px] p-4 border border-green-500 rounded-lg outline-none text-slate-500 "
        />
        <button className="p-4 text-white bg-green-500 rounded-lg">SEND</button>
      </div>

      <div className="flex mt-12 gap-x-3 comment_user">
        <img src={userAvt} alt="" className="w-[40px] rounded-full" />
        <div className="flex-col felx gap-y-2">
          <h3 className="text-base font-semibold">Huu Thanh</h3>
          <p>{`${date}`}</p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo con
          </p>
        </div>
      </div>

      <div className="flex mt-12 gap-x-3 comment_user">
        <img src={userAvt} alt="" className="w-[40px] rounded-full" />
        <div className="flex-col felx gap-y-2">
          <h3 className="text-base font-semibold">Huu Thanh</h3>
          <p>{`${date}`}</p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo con
          </p>
        </div>
      </div>

      <div className="flex mt-12 gap-x-3 comment_user">
        <img src={userAvt} alt="" className="w-[40px] rounded-full" />
        <div className="flex-col felx gap-y-2">
          <h3 className="text-base font-semibold">Huu Thanh</h3>
          <p>{`${date}`}</p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo con
          </p>
        </div>
      </div>

      <div className="flex mt-12 gap-x-3 comment_user">
        <img src={userAvt} alt="" className="w-[40px] rounded-full" />
        <div className="flex-col felx gap-y-2">
          <h3 className="text-base font-semibold">Huu Thanh</h3>
          <p>{`${date}`}</p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo con
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
