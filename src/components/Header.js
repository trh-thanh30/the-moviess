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
import arrowLeft from "../assets/image/arrowleft.svg";
const Header = () => {
  const [query, setQuery] = useState("");
  const [menuType, setMenuType] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "auto";
    if (!openMenu) setMenuType(null);
  }, [openMenu]);

  const handleOpenSubMenu = (type) => {
    if (type === menuType) setMenuType(null);
    else setMenuType(type);
  };

  const [showOverlay, setShowOverlay] = useState(false);
  const [categories, setCategories] = useState([]);
  const [countries, setCountries] = useState([]);
  const [dropdown, setDropDown] = useState("");

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
    //   document.body.style.overflow = "hidden";
    // } else {
    //   document.body.style.overflow = "auto";
    // }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="bg-[#EEE] pt-3 pb-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <button onClick={() => setOpenMenu(true)} className="hide-on-pc">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 4.5H6"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 12H6"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 19H6"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            className={`fixed inset-0 z-40 duration-300 ${
              openMenu
                ? "pointer-events-auto bg-black/65 overflow-y-auto overflow-x-hidden"
                : "pointer-events-none"
            }`}
            onClick={(e) => {
              if (e.target !== e.currentTarget) return;
              setOpenMenu(false);
            }}
          >
            <div
              className={`absolute h-full left-0 w-full max-w-xs bg-white font-medium text-xl duration-300 overflow-auto rounded-lg ${
                openMenu ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="p-4">
                <img
                  onClick={(e) => {
                    if (e.target !== e.currentTarget) return;
                    setOpenMenu(false);
                  }}
                  className="w-6 h-6 cursor-pointer mb-7"
                  src={arrowLeft}
                  alt=""
                />

                <div
                  onClick={() => handleOpenSubMenu("movie")}
                  className={`flex items-center gap-x-2 ${
                    menuType === "movie" ? "text-[#c40f62]" : ""
                  }`}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="18"
                      height="18"
                      viewBox="0 0 48 48"
                    >
                      <g fill="none" stroke="currentColor" stroke-width="4">
                        <path
                          stroke-linejoin="round"
                          d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                        ></path>
                        <path
                          stroke-linejoin="round"
                          d="M24 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm-9-9a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm18 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"
                        ></path>
                        <path stroke-linecap="round" d="M24 44h20"></path>
                      </g>
                    </svg>
                  </span>
                  <h1>Movie Type</h1>
                  <span
                    className={`duration-300 ${
                      menuType === "movie" ? "rotate-90" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-[18px] h-[18px]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                </div>
                {menuType === "movie" && (
                  <ul className="grid grid-cols-2 mt-2 text-base font-normal gap-y-2 text-[#1A162E]">
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
                )}

                <div className="my-3 seprate"></div>

                <div
                  onClick={() => handleOpenSubMenu("genre")}
                  className={`flex items-center gap-x-2 ${
                    menuType === "genre" ? "text-[#c40f62]" : ""
                  }`}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3zM8 17H6v-2h2zm0-4H6v-2h2zm0-4H6V7h2zm10 8h-2v-2h2zm0-4h-2v-2h2zm0-4h-2V7h2z"
                      ></path>
                    </svg>
                  </span>
                  <h1>Movie Genre</h1>
                  <span
                    className={`duration-300 ${
                      menuType === "genre" ? "rotate-90" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-[18px] h-[18px]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                </div>
                {menuType === "genre" && (
                  <ul className="grid grid-cols-2 mt-2 text-base font-normal gap-y-2 text-[#1A162E]">
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
                )}

                <div className="my-3 seprate"></div>

                <div
                  onClick={() => handleOpenSubMenu("nation")}
                  className={`flex items-center gap-x-2 ${
                    menuType === "nation" ? "text-[#c40f62]" : ""
                  }`}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="18"
                      height="18"
                      viewBox="-2 -2 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M2.252 8A8.014 8.014 0 0 0 2 10c0 .69.088 1.36.252 2H5.1a19.83 19.83 0 0 1 0-4zm.818-2h2.346c.266-1.217.65-2.307 1.121-3.214A8.035 8.035 0 0 0 3.07 6m14.678 2H14.9a19.83 19.83 0 0 1 0 4h2.848a8.047 8.047 0 0 0 0-4m-.818-2a8.035 8.035 0 0 0-3.467-3.214c.472.907.855 1.997 1.121 3.214zM7.112 8A17.763 17.763 0 0 0 7 10c0 .685.038 1.355.112 2h5.776a17.763 17.763 0 0 0 0-4zm.358-2h5.06a10.758 10.758 0 0 0-.783-2.177C11.119 2.568 10.447 2 10 2c-.448 0-1.119.568-1.747 1.823c-.315.632-.58 1.367-.783 2.177m-4.4 8a8.035 8.035 0 0 0 3.467 3.214c-.472-.907-.855-1.997-1.121-3.214zm13.86 0h-2.346c-.266 1.217-.65 2.307-1.121 3.214A8.035 8.035 0 0 0 16.93 14m-9.46 0c.203.81.468 1.545.783 2.177C8.881 17.432 9.553 18 10 18c.448 0 1.119-.568 1.747-1.823c.315-.632.58-1.367.783-2.177zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"
                      ></path>
                    </svg>
                  </span>
                  <h1>Nation</h1>
                  <span
                    className={`duration-300 ${
                      menuType === "nation" ? "rotate-90" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-[18px] h-[18px]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                </div>
                {menuType === "nation" && (
                  <ul className="grid grid-cols-2 mt-2 text-base font-normal gap-y-2 text-[#1A162E]">
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
                )}
                <div className="my-3 seprate"></div>
                <div className="flex items-center gap-x-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M15.058 21v-1H19v-9.384H5V14.5H4V5h3.385V2.77h1.077V5h7.154V2.77h1V5H20v16zM8 23.288l-.689-.688l3.056-3.1H1.5v-1h8.867l-3.056-3.1l.689-.688L12.289 19z"
                      ></path>
                    </svg>
                  </span>
                  <h1>Coming Soon</h1>
                </div>

                <div className="my-3 seprate"></div>

                <NavLink
                  to={"/tv-series"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#c40f62]  hover:text-[#c40f62]"
                      : "hover:text-[#c40f62] transition-colors"
                  }
                >
                  <div className="flex items-center gap-x-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M18 6h-3.59l2.3-2.29a1 1 0 1 0-1.42-1.42L12 5.59l-3.29-3.3a1 1 0 1 0-1.42 1.42L9.59 6H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3m1 13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1Z"
                        ></path>
                      </svg>
                    </span>
                    <h1>TV-SERIES</h1>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>

          <NavLink
            to={"/"}
            className="flex items-center gap-x-3 immage__header-logo"
          >
            <img src={logoMovies} className="w-[68px]  " alt="" />
            <img src={logo} alt="" className="w-[68px]  " />
          </NavLink>

          <div className="hide-on-tablet">
            <div className="flex items-center text-base font-medium text-[#1A162E] gap-x-8">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#c40f62] hover:text-[#c40f62] "
                    : "hover:text-[#c40f62] transition-colors"
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
                    ? "text-[#c40f62]  hover:text-[#c40f62]"
                    : "hover:text-[#c40f62] transition-colors"
                }
              >
                TV-SERIES
              </NavLink>
            </div>
          </div>

          <div className="flex items-center gap-x-4 ">
            <div className="flex items-center ml-auto bg-white rounded-lg shadow">
              {showOverlay && (
                <div className="overlay" onClick={handleToggleOverlay}>
                  <div className="fixed z-50 flex items-center justify-center -translate-x-1/2 top-1/2 left-1/2">
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
                className="cursor-pointer xl:p-3 sm:p-2"
              ></IconSearch>
            </div>
            <div className="flex items-center text-base text-[#1A162E] gap-x-2">
              {user ? (
                <>
                  <div className="flex items-center text-base font-medium gap-x-2 ">
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
                            <NavLink
                              to="/favourite"
                              className={({ isActive }) =>
                                isActive
                                  ? "text-[#c40f62]  hover:text-[#c40f62]"
                                  : "hover:text-[#c40f62] transition-colors"
                              }
                            >
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
                              className={
                                "  hover:text-[#c40f62] cursor-pointer"
                              }
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
    </div>
  );
};

export default Header;
