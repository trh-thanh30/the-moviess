import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/image/the-moviess.svg";
import logoMovies from "../assets/image/logo-image.svg";
import facebook from "../assets/image/facebook.svg";
import youtube from "../assets/image/youtube.svg";
import telegram from "../assets/image/telegram.svg";
import mess from "../assets/image/mess.svg";
import github from "../assets/image/github.svg"
const Footer = () => {
  return (
    <div className="footer">
      <div class="container">
        <div class="footer__row">
          <div class="footer__col">
            <NavLink to={"/"} className="flex gap-x-4">
              <img src={logoMovies} alt="" />
              <img src={logo} alt="" />
            </NavLink>
            <p class="footer__desc">
              The Movies - Made by Tran Huu Thanh, a student studying Computer
              Engineering at the University of Industrial Technology. The
              website provides a smooth movie watching experience, without
              annoying ads. Enjoy a rich collection from all genres, without
              limits, without restrictions. Just focus on enjoying and
              exploring, The Movies will take care of the rest.
            </p>
          </div>

          <div class="footer__col">
            <h3 class="footer__heading">The Movies</h3>
            <ul class="footer__list">
              <li>
                <a href="#!" class="footer__link">
                  Explore
                </a>
              </li>
              <li>
                <a href="#!" class="footer__link">
                  Genre
                </a>
              </li>
              <li>
                <a href="#!" class="footer__link">
                  News
                </a>
              </li>
              <li>
                <a href="#!" class="footer__link">
                  Movies
                </a>
              </li>
              <li>
                <a href="#!" class="footer__link">
                  TV Shows
                </a>
              </li>
            </ul>
          </div>

          <div class="footer__col">
            <h3 class="footer__heading">Support</h3>
            <ul class="footer__list">
              <li>
                <a href="#!" class="footer__link">
                  About
                </a>
              </li>
              <li>
                <a href="#!" class="footer__link">
                  Order status
                </a>
              </li>
              <li>
                <a href="#!" class="footer__link">
                  Store locator
                </a>
              </li>
              <li>
                <a href="#!" class="footer__link">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div class="footer__col">
            <h3 class="footer__heading">Contact</h3>
            <ul class="footer__list">
              <li>
                <p class="footer__label">Email</p>
                <a href="contact@grocerymart.com" class="footer__link">
                  contact@themovies.com
                </a>
              </li>
              <li>
                <p class="footer__label">Telephone</p>
                <a href="tele:+84-344247918" class="footer__link">
                  +84-34424-7918
                </a>
              </li>
              <li>
                <p class="footer__label">Addrees</p>
                <p class="footer__text">
                  No. 90, Group 6, Cao Son 2 area, Cam Pha city, Quang Ninh
                  province
                </p>
              </li>
              <li>
                <p class="footer__label">Hours</p>
                <p class="footer__text">M - F 08:00am - 06:00pm</p>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer__bottom">
          <p class="footer__copyright">
            © 2005 - 2024 The Movies. All rights reserved.
          </p>

          <div class="footer__socials">
            <NavLink  className="footer__social-link">
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
