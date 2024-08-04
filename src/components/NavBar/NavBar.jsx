import "./NavBar.css";
import logo from "../../../public/assets/logo/logo.svg";
import menuIcon from "../../../public/assets/icons/icon-menu.svg";
import closeMenuIcon from "../../../public/assets/icons/icon-close-menu.svg";
import NavItems from "../Navitems/NavItems";

import { useEffect } from "react";

const NavBar = () => {
  useEffect(() => {
    const menuBar = document.querySelector(".menu-bar");
    const overlay = document.querySelector(".overlay");
    const sideMenu = document.querySelector(".side-menu");

    if (menuBar && overlay && sideMenu) {
      menuBar.addEventListener("click", () => {
        overlay.classList.add("show");

        setTimeout(() => {
          sideMenu.classList.add("show");
        }, 300);
      });

      const closeMenu = document.querySelector(".close-menu");
      closeMenu.addEventListener("click", () => {
        sideMenu.classList.remove("show");
        overlay.classList.remove("show");
      });
    }
  }, []);
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <NavItems />
        <div className="menu-bar">
          <img src={menuIcon} alt="" />
        </div>
      </nav>
      <div className="overlay">
        <div className="side-menu">
          <div className="close-menu">
            <img src={closeMenuIcon} alt="" />
          </div>

          <div className="nav-items-mobile">
            <NavItems mobile={true} />
            <div className="auth-action-mobile">
              <p>Login</p>
              <button>Register</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
