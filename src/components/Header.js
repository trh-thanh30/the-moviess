import React, { useEffect, useState } from "react";
import logo from "../assets/image/the-moviess.svg";
import logoMovies from "../assets/image/logo-image.svg";
import { NavLink, useNavigate } from "react-router-dom";
import IconSearch from "../icon/IconSearch";
import axios from "axios";
import logout from "../assets/image/logout.svg";
import Swal from "sweetalert2";
import useSWR from "swr";
import { fetcher } from "../config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import { Backdrop } from "@mui/material";
const Header = () => {
  const [query, setQuery] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);
  const [categories, setCategories] = useState([]);
  const [countries, setCountries] = useState([]);
  const handleToggleOverlay = () => {
    setShowOverlay(!showOverlay);
    // if (!showOverlay) {
    //   document.body.style.overflow = "hidden"; // Ngăn cuộn khi overlay hiển thị
    // } else {
    //   document.body.style.overflow = "auto"; // Cho phép cuộn khi overlay ẩn đi
    // }
  };
  const navigate = useNavigate();

  const [url, setUrl] = useState(
    `https://phimapi.com/v1/api/tim-kiem?keyword=${query}`
  );
  useEffect(() => {}, []);
  const [user, setUser] = useState(null);
  const { data } = useSWR(`https://phimapi.com/the-loai`, fetcher);
  console.log(data);
  const handleFetchContry = async () => {
    const country = await axios.get(`https://phimapi.com/quoc-gia`);
    if (country && country.data) setCountries(country.data);
  };
  useEffect(() => {
    handleFetchContry();
  }, []);
  useEffect(() => {
    if (data) setCategories(data);
  }, [data]);

  useEffect(() => {
    const auth = getAuth();
    const unsubscrie = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscrie;
  }, []);

  function getMiddleName(name) {
    const length = name.split(" ").length;
    return name.split(" ")[length - 1];
  }

  const handleSearch = () => {
    navigate(`/search/${query}`);
    setShowOverlay(!showOverlay);
    // if (!showOverlay) {
    //   document.body.style.overflow = "hidden"; // Ngăn cuộn khi overlay hiển thị
    // } else {
    //   document.body.style.overflow = "auto"; // Cho phép cuộn khi overlay ẩn đi
    // }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };


  return (
    <div className="container">
      <div className="flex items-center justify-between mt-6">
        <NavLink to={"/"} className="flex items-center gap-x-3">
          <img src={logoMovies} className="img-logo" alt="" />
          <img src={logo} alt="" className="img-logo" />
        </NavLink>

        <div className="flex items-center text-base font-medium text-[#1A162E] gap-x-8">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "text-[#c40f62] hover:text-[#c40f62] text-base"
                : "hover:text-[#c40f62] transition-colors text-base"
            }
          >
            HOME
          </NavLink>

          <div className="-mb-4 transition-colors cursor-pointer dropdown hover:text-[#c40f62]">
            <div className="flex items-center gap-x-1">
              <p>MOVIE TYPE</p>
              <span className="icon-svg">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 4.25L6 7.75L2.5 4.25"
                    stroke="#1A162E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="mt-4">
              <ul className="grid grid-cols-2 font-normal dropdown-menu text-nowrap w-[320px] text-[#1A162E] text-sm">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#c40f62]  hover:text-[#c40f62]"
                      : "hover:text-[#c40f62] transition-colors "
                  }
                  to={"/signle-movies"}
                >
                  Phim Lẻ
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#c40f62]  hover:text-[#c40f62]"
                      : "hover:text-[#c40f62] transition-colors "
                  }
                  to={"/seri-movies"}
                >
                  Phim Bộ
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#c40f62]  hover:text-[#c40f62]"
                      : "hover:text-[#c40f62] transition-colors "
                  }
                  to={"/cartoon-movie"}
                >
                  Phim Hoạt Hình
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#c40f62]  hover:text-[#c40f62]"
                      : "hover:text-[#c40f62] transition-colors "
                  }
                  to={"/new-movies"}
                >
                  Phim Mới
                </NavLink>
              </ul>
            </div>
          </div>

          <div className="-mb-4 transition-colors cursor-pointer dropdown hover:text-[#c40f62]">
            <div className="flex items-center gap-x-1">
              <p>CATEGORY</p>
              <span className="icon-svg">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 4.25L6 7.75L2.5 4.25"
                    stroke="#1A162E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="mt-4 ">
              <ul className="grid grid-cols-4 font-normal dropdown-menu text-nowrap w-[500px] text-[#1A162E] text-sm">
                {categories.length > 0 &&
                  categories.map((item) => (
                    <NavLink
                      key={item.id}
                      onClick={() => {
                        if (item.slug === "phim-18") {
                          <div className="overlay"></div> &&
                            Swal.fire({
                              title: "Are you sure?",
                              text: "Content may not be appropriate for your age. If we ignore this warning, we will not be responsible for any actions.",
                              icon: "error",
                              showCancelButton: true,
                              confirmButtonText: "Yes, I'm sure",
                              cancelButtonText: "Cancel",
                              backdrop: `rgba(0,0,0,0.9)`,
                            }).then((result) => {
                              if (result.isConfirmed) {
                                navigate(`/the-loai/${item.slug}`);
                              } else {
                                console.log("Back");
                                navigate(`/`);
                              }
                            });
                        }
                      }}
                      to={`/the-loai/${item.slug}`}
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#c40f62]  hover:text-[#c40f62]"
                          : "hover:text-[#c40f62] transition-colors "
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
              </ul>
            </div>
          </div>

          <div className="-mb-4 transition-colors cursor-pointer dropdown hover:text-[#c40f62]">
            <div className="flex items-center gap-x-1">
              <p>NATION</p>
              <span className="icon-svg">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 4.25L6 7.75L2.5 4.25"
                    stroke="#1A162E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="mt-4">
              <ul className="grid grid-cols-4 font-normal dropdown-menu text-nowrap w-[500px] text-[#1A162E] text-sm">
                {countries.length > 0 &&
                  countries.map((item) => (
                    <NavLink
                      to={`/quoc-gia/${item.slug}`}
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#c40f62]  hover:text-[#c40f62]"
                          : "hover:text-[#c40f62] transition-colors "
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
              </ul>
            </div>
          </div>

          <NavLink
            to={"/tv-series"}
            className={({ isActive }) =>
              isActive
                ? "text-[#c40f62]  hover:text-[#c40f62] text-base"
                : "hover:text-[#c40f62] transition-colors text-base"
            }
          >
            TV-SERIES
          </NavLink>
        </div>

        <div className="flex items-center gap-x-4">
          <div className="flex items-center ml-auto bg-white rounded-lg shadow">
            {showOverlay && (
              <div className="overlay" onClick={handleToggleOverlay}>
                <div className="fixed z-50 flex items-center justify-center -translate-x-1/2 top-1/2 left-1/2">
                  {/* <div className="relative text-base">
                    <input
                      value={query}
                      onKeyDown={handleKeyPress}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => setQuery(e.target.value)}
                      type="text"
                      className="p-4 text-base text-black border border-gray-400 outline-none rounded-xl w-[380px] shadow-lg"
                      placeholder="Search movies......."
                    />
                    <NavLink to={`/search/${query}`}>
                      <IconSearch
                        onClick={() =>
                          setUrl(
                            `https://phimapi.com/v1/api/tim-kiem?keyword=${query}`
                          )
                        }
                        className="pl-4 input-icon"
                      ></IconSearch>
                    </NavLink>
                  </div> */}
                  <div className="wrapper">
                    <input
                      value={query}
                      onKeyDown={handleKeyPress}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => setQuery(e.target.value)}
                      className="input-data w-[314px]"
                      type="text"
                      required
                    />
                    <p className="input-data__name">Search your movie...</p>
                    <span className="input-data__span" />
                  </div>
                </div>
              </div>
            )}
            <IconSearch
              onClick={handleToggleOverlay}
              className="p-3 cursor-pointer"
            ></IconSearch>
          </div>
          <div className="flex items-center text-base text-[#1A162E] gap-x-2">
            {user ? (
              <>
                <div className="flex items-center gap-x-2">
                  <p>Welcome, </p>
                  <div className="-mb-4 dropdown">
                    <strong className="cursor-pointer name__user">
                      {getMiddleName(user.displayName)}
                    </strong>
                    <div className="mt-4">
                      <ul className="font-normal dropdown-menu__user text-nowrap min-w-[200px] w-auto text-[#1A162E] text-sm">
                        <span className="text-base font-semibold name__user">
                          {user.displayName}
                        </span>
                        <div className="seprate"></div>
                        <div className="flex flex-col gap-y-3">
                          <NavLink className={"  hover:text-[#c40f62]"}>
                            Profile
                          </NavLink>
                          <NavLink className={"  hover:text-[#c40f62]"}>
                            Favourite list
                          </NavLink>
                        </div>
                        <div className="seprate"></div>
                        <div className="flex flex-col gap-y-3">
                          <div className="flex items-center justify-between">
                            <span
                              className={
                                "  hover:text-[#c40f62] cursor-pointer"
                              }
                            >
                              Dark mode
                            </span>
                            <img
                              src="https://trh-thanh30.github.io/demo-category/assets/icons/sun-dark.svg"
                              alt=""
                            />
                          </div>
                          <span
                            className={"  hover:text-[#c40f62] cursor-pointer"}
                          >
                            Settings
                          </span>
                        </div>
                        <div className="seprate"></div>
                        <NavLink
                          to={"/sign-in"}
                          className="flex items-center justify-between p-3 text-red-500 rounded-lg bg-red-50"
                        >
                          <div>Logout </div>
                          <img className="w-4 h-4" src={logout} alt="" />
                        </NavLink>
                      </ul>
                    </div>
                  </div>
                </div>
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
    </div>
  );
};

export default Header;
