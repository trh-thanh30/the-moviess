import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/image/the-moviess.svg";
import logoMovies from "../assets/image/logo-image.svg";
import { NavLink, useNavigate } from "react-router-dom";
import IconSearch from "../icon/IconSearch";
import useSWR from "swr";
import { fetcher } from "../config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const Header = () => {
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState(
    `https://phimapi.com/v1/api/tim-kiem?keyword=${query}`
  );
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { data, error } = useSWR(url, fetcher);
  useEffect(() => {
    const auth = getAuth();
    const unsubscrie = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscrie;
  }, []);
  const handleLogout = () => {
    setUser(null);
    navigate("/sign-in");
  };
  function getMiddleName(name) {
    const length = name.split(" ").length;
    return name.split(" ")[length - 1];
  }

  return (
    <div className="container">
      <div className="flex items-center justify-between mt-10">
        <NavLink to={"/"} className="flex items-center w-13 gap-x-3">
          <img src={logoMovies} alt="" />
          <img src={logo} alt="" />
        </NavLink>
        {/* <div className="relative text-base">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            className="p-4 text-base text-black border border-gray-400 outline-none rounded-xl w-[380px] shadow-lg"
            placeholder="Search movies......."
          />
          <NavLink to={`/search/${query}`}>
            <IconSearch
              onClick={() =>
                setUrl(`https://phimapi.com/v1/api/tim-kiem?keyword=${query}`)
              }
              className="pl-4 input-icon"
            ></IconSearch>
          </NavLink>
        </div> */}
        <div className="flex items-center text-base text-gray-500 gap-x-5">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "text-rose-500 hover:text-rose-500 text-base"
                : "hover:text-rose-500 transition-colors text-base"
            }
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-rose-500 hover:text-rose-500 text-base"
                : "hover:text-rose-500 transition-colors text-base"
            }
            to={"/signle-movies"}
          >
            Movies
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-rose-500 hover:text-rose-500 text-base"
                : "hover:text-rose-500 transition-colors text-base"
            }
            to={"/seri-movies"}
          >
            Series
          </NavLink>
          <NavLink
            to={"/cartoon-movie"}
            className={({ isActive }) =>
              isActive
                ? "text-rose-500 hover:text-rose-500 text-base"
                : "hover:text-rose-500 transition-colors text-base"
            }
          >
            Cartoon
          </NavLink>

          <NavLink
            to={"/tv-series"}
            className={({ isActive }) =>
              isActive
                ? "text-rose-500 hover:text-rose-500 text-base"
                : "hover:text-rose-500 transition-colors text-base"
            }
          >
            TV-Series
          </NavLink>
        </div>
        <div className="flex items-center text-base text-gray-500 gap-x-2">
          {user ? (
            <>
              <div className="flex items-center gap-x-2">
                <p>Hi, </p>
                <strong className="name__user">
                  {getMiddleName(user.displayName)}
                </strong>
              </div>
              <button
                onClick={handleLogout}
                className="p-2 text-base font-semibold text-red-500 rounded-lg bg-red-50"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to={"/sign-up"}
                className="p-2 text-base font-medium text-green-500 rounded-lg bg-green-50"
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
