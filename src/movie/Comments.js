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
    <div className="mt-8 md:mt-12">
      <h1 className="mb-3 text-base font-semibold uppercase md:mb-8 md:text-xl">
        Comments
      </h1>
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
        <textarea
          type="text"
          placeholder="Write your comments here....."
          className="w-[816px] md:p-4 p-2 border border-green-500 rounded-lg outline-none text-slate-500 md:text-base text-xs"
        />
        <button className="p-2 text-white bg-green-500 rounded-lg md:p-4">
          SEND
        </button>
      </div>

      <div className="flex lg:mt-12 md:mt-8 mt-6 gap-x-2  xl:w-[80%] lg:w-[90%] md:w-[100%] comment_user p-2">
        <img
          src={userAvt}
          alt=""
          className="md:w-[40px] w-[30px] rounded-full"
        />
        <div className="flex-col felx gap-y-2">
          <h3 className="text-xs font-semibold md:text-sm lg:text-base">
            Huu Thanh
          </h3>
          <p className="text-xs md:text-sm lg:text-base">{`${date}`}</p>
          <p className="text-xs md:text-sm lg:text-base">
            Neu duoc moi nguoi ung ho to tai 0344247918 MB nhe ❤️
          </p>
          <div
            className="mt-1 cursor-pointer"
            onClick={() => setLiked1(!liked1)}
          >
            {liked1 ? (
              <img className="md:w-[20px] w-[14px]" src={heart} alt="" />
            ) : (
              <img className="md:w-[20px] w-[14px]" src={heartRed} alt="" />
            )}
          </div>
        </div>
      </div>

      <div className="flex lg:mt-12 md:mt-8 mt-4 gap-x-2  xl:w-[80%] lg:w-[90%] md:w-[100%] comment_user p-2">
        <img
          src={userAvt}
          alt=""
          className="md:w-[40px] w-[30px] rounded-full"
        />
        <div className="flex-col felx gap-y-2">
          <h3 className="text-xs font-semibold md:text-sm lg:text-base">
            Em Che
          </h3>
          <p className="text-xs md:text-sm lg:text-base">{`${date}`}</p>
          <p className="text-xs md:text-sm lg:text-base">
            From murder and espionage to terrorism and stolen submarines, a team
            of special agents investigates any crime that has a shred of
            evidence connected to Navy and Marine Corps personnel, regardless of
            rank or position.
          </p>
          <div
            className="mt-1 cursor-pointer"
            onClick={() => setLiked2(!liked2)}
          >
            {liked2 ? (
              <img className="md:w-[20px] w-[14px]" src={heart} alt="" />
            ) : (
              <img className="md:w-[20px] w-[14px]" src={heartRed} alt="" />
            )}
          </div>
        </div>
      </div>

      <div className="flex lg:mt-12 md:mt-8 mt-4 gap-x-2  xl:w-[80%] lg:w-[90%] md:w-[100%] comment_user p-2">
        <img
          src={userAvt}
          alt=""
          className="md:w-[40px] w-[30px] rounded-full"
        />
        <div className="flex-col felx gap-y-2">
          <h3 className="text-xs font-semibold md:text-sm lg:text-base">
            Huu Thanh
          </h3>
          <p className="text-xs md:text-sm lg:text-base">{`${date}`}</p>
          <p className="text-xs md:text-sm lg:text-base">
            Neu duoc moi nguoi ung ho to tai 0344247918 MB nhe ❤️
          </p>
          <div
            className="mt-1 cursor-pointer"
            onClick={() => setLiked3(!liked3)}
          >
            {liked3 ? (
              <img className="md:w-[20px] w-[14px]" src={heart} alt="" />
            ) : (
              <img className="md:w-[20px] w-[14px]" src={heartRed} alt="" />
            )}
          </div>
        </div>
      </div>

      <div className="flex lg:mt-12 md:mt-8 mt-4 gap-x-2  xl:w-[80%] lg:w-[90%] md:w-[100%] comment_user p-2">
        <img
          src={userAvt}
          alt=""
          className="md:w-[40px] w-[30px] rounded-full"
        />
        <div className="flex-col felx gap-y-2">
          <h3 className="text-xs font-semibold md:text-sm lg:text-base">
            Huu Thanh
          </h3>
          <p className="text-xs md:text-sm lg:text-base">{`${date}`}</p>
          <p className="text-xs md:text-sm lg:text-base">
            Neu duoc moi nguoi ung ho to tai 0344247918 MB nhe ❤️
          </p>
          <div
            className="mt-1 cursor-pointer"
            onClick={() => setLiked4(!liked4)}
          >
            {liked4 ? (
              <img className="md:w-[20px] w-[14px]" src={heart} alt="" />
            ) : (
              <img className="md:w-[20px] w-[14px]" src={heartRed} alt="" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
