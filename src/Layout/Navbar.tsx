import React, { useEffect, useState } from "react";
import classes from "../customCSS/Navbar.module.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div
      className={`flex p-5  ${classes.nav} ${showNavbar && classes.nav_black}`}
    >
      <h1 className="text-4xl  text-red-600 font-medium ">NETFLIX</h1>
      <div className={`${classes.nav_buttons_div}`}>
        <button
          type="button"
          className={`${classes.nav_buttons} text-white bg-red-600 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700`}
        >
          Login
        </button>

        <button
          type="button"
          className={`${classes.nav_buttons} text-white bg-red-600 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700`}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Navbar;
