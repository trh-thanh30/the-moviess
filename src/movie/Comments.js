import React, { useEffect, useState } from "react";
import userAvt from "../assets/image/user-img.svg";
import heartRed from "../assets/image/heart-red.svg";
import heart from "../assets/image/heart-white.svg";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Comments = () => {
  const [liked1, setLiked1] = useState(true);
  const [liked2, setLiked2] = useState(true);

  const [liked3, setLiked3] = useState(true);

  const [liked4, setLiked4] = useState(true);

  const date = new Date().toLocaleDateString() + "";
  const [user, setUser] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    const unsubscrie = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscrie;
  }, []);
  return (
    <div className="mt-12">
      <h1 className="mb-8 text-xl font-semibold">Comments</h1>
      <div className="mb-3 text-base font-medium">
        {user ? (
          <>
            <strong className="name__user">{user.displayName}</strong>
          </>
        ) : (
          <>
            <p className="text-lg font-semibold text-slate-500">Anmonymus</p>
          </>
        )}
      </div>
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
          <div className="mt-1 cursor-pointer" onClick={() => setLiked1(!liked1)}>
            {liked1 ? (
              <img src={heart} alt="" />
            ) : (
              <img src={heartRed} alt="" />
            )}
          </div>
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
          <div className="mt-1 cursor-pointer" onClick={() => setLiked2(!liked2)}>
            {!liked2 ? (
              <img src={heart} alt="" />
            ) : (
              <img src={heartRed} alt="" />
            )}
          </div>
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
          <div className="mt-1 cursor-pointer" onClick={() => setLiked3(!liked3)}>
            {liked3 ? (
              <img src={heart} alt="" />
            ) : (
              <img src={heartRed} alt="" />
            )}
          </div>
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
          <div className="mt-1 cursor-pointer" onClick={() => setLiked4(!liked4)}>
            {!liked4 ? (
              <img src={heart} alt="" />
            ) : (
              <img src={heartRed} alt="" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
