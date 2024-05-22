import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/image/the-moviess.svg";
import logoMovies from "../assets/image/logo-image.svg";
import facebook from "../assets/image/facebook.svg";
import youtube from "../assets/image/youtube.svg";
import telegram from "../assets/image/telegram.svg";
import mess from "../assets/image/mess.svg";
import github from "../assets/image/github.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Footer = () => {
  const submitUser = () => {
    toast.success("Thank you for your reputation ❤️");
  };
  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
  }

  return (
    <div className="mt-16 footer">
      <div className="container">
        <div className="footer__row">
          <div className="footer__col">
            <NavLink to={"/"} className="flex gap-x-4">
              <img src={logoMovies} alt="" />
              <img src={logo} alt="" />
            </NavLink>
            <p className="footer__desc hide-on-tablet">
              The Movies - Made by Tran Huu Thanh, a freshman studying computer
              engineering industry at the University of Industrial Technology.
              The website provides a smooth movie watching experience, without
              annoying ads. Enjoy a rich collection from all genres, without
              limits, without restrictions. Just focus on enjoying and
              exploring, The Movies will take care of the rest.
            </p>
          </div>

          <div className="footer__col hide-on-tablet">
            <h3 className="footer__heading">The Movies</h3>
            <ul className="footer__list">
              <li>
                <a href="#!" className="footer__link">
                  Explore
                </a>
              </li>
              <li>
                <a href="#!" className="footer__link">
                  Genre
                </a>
              </li>
              <li>
                <a href="#!" className="footer__link">
                  News
                </a>
              </li>
              <li>
                <a href="#!" className="footer__link">
                  Movies
                </a>
              </li>
              <li>
                <a href="#!" className="footer__link">
                  TV Shows
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__col hide-on-tablet">
            <h3 className="footer__heading">Support</h3>
            <ul className="footer__list">
              <li>
                <a href="#!" className="footer__link">
                  About
                </a>
              </li>
              <li>
                <a href="#!" className="footer__link">
                  Order status
                </a>
              </li>
              <li>
                <a href="#!" className="footer__link">
                  Store locator
                </a>
              </li>
              <li>
                <a href="#!" className="footer__link">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__col hide-on-tablet">
            <h3 className="footer__heading">Contact</h3>
            <ul className="footer__list">
              <li>
                <p className="footer__label">Email</p>
                <a
                  href="gmail:contact@grocerymart.com"
                  className="footer__link"
                >
                  contact@themovies.com
                </a>
              </li>
              <li>
                <p className="footer__label">Telephone</p>
                <a href="tele:+84-344247918" className="footer__link">
                  +84-34424-7918
                </a>
              </li>
              <li>
                <p className="footer__label">Addrees</p>
                <p className="footer__text">
                  No. 90, Group 6, Cao Son 2 area, Cam Pha city, Quang Ninh
                  province
                </p>
              </li>
              <li>
                <p className="footer__label">Hours</p>
                <p className="footer__text">M - F 08:00am - 06:00pm</p>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer__decs--tablet hide-on-pc">
          <strong className="uppercase name__user">The Movies</strong> - Made by
          Tran Huu Thanh, a freshman studying computer engineering industry at
          the University of Industrial Technology. The website provides a smooth
          movie watching experience, without annoying ads. Enjoy a rich
          collection from all genres, without limits, without restrictions. Just
          focus on enjoying and exploring, The Movies will take care of the
          rest.
        </p>

        <div className="hide-on-pc footer__desc--col">
          <div className="footer__col">
            <h3 className="footer__heading">The Movies</h3>
            <ul className="footer__list">
              <li>
                <a href="#!" className="footer__link">
                  Explore
                </a>
              </li>
              <li>
                <a href="#!" className="footer__link">
                  Genre
                </a>
              </li>
              <li>
                <a href="#!" className="footer__link">
                  News
                </a>
              </li>
              <li>
                <a href="#!" className="footer__link">
                  Movies
                </a>
              </li>
              <li>
                <a href="#!" className="footer__link">
                  TV Shows
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Support</h3>
            <ul className="footer__list">
              <li>
                <a href="#!" className="footer__link">
                  About
                </a>
              </li>
              <li>
                <a href="#!" className="footer__link">
                  Order status
                </a>
              </li>
              <li>
                <a href="#!" className="footer__link">
                  Store locator
                </a>
              </li>
              <li>
                <a href="#!" className="footer__link">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Contact</h3>
            <ul className="footer__list">
              <li>
                <p className="footer__label">Email</p>
                <a
                  href="gmail:contact@grocerymart.com"
                  className="footer__link"
                >
                  contact@themovies.com
                </a>
              </li>
              <li>
                <p className="footer__label">Telephone</p>
                <a href="tele:+84-344247918" className="footer__link">
                  +84-34424-7918
                </a>
              </li>
              <li>
                <p className="footer__label">Addrees</p>
                <p className="footer__text">
                  No. 90, Group 6, Cao Son 2 area, Cam Pha city, Quang Ninh
                  province
                </p>
              </li>
              <li>
                <p className="footer__label">Hours</p>
                <p className="footer__text">M - F 08:00am - 06:00pm</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div>
            <form
              action=""
              className="flex items-center gap-x-2"
              onSubmit={handleSubmit}
            >
              <input
                placeholder="Send my your valuate"
                className="p-4 border border-green-500 rounded-lg outline-none w-[320px]"
                type="text"
                name=""
                id=""
              />{" "}
              <button
                onClick={submitUser}
                type="submit"
                className="p-4 text-green-500 bg-green-100 rounded-lg"
              >
                SEND
              </button>
            </form>
            <p className="mt-4 footer__copyright ">
              © 2005 - 2024 The Movies. All rights reserved.
            </p>
          </div>
          <div className="footer__socials">
            <NavLink className="footer__social-link">
              <img src={facebook} alt="" />
            </NavLink>
            <NavLink className="footer__social-link">
              <img src={mess} alt="" />
            </NavLink>
            <NavLink className="footer__social-link">
              <img src={github} alt="" />
            </NavLink>
            <NavLink className="footer__social-link">
              <img src={youtube} alt="" />
            </NavLink>
            <NavLink className="footer__social-link">
              <img src={telegram} alt="" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
