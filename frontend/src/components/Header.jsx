import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// import header data
import { header } from "../data";

// import components
import Nav from "../components/Nav";
import NavMobile from "./NavMobile";

// import icons from react-icons
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

import { AuthContext } from "../context/authContext";

//in the header component we add the nav and nav mobile components and we also add the logic for the mobile nav menu 
//we also add the logic for the scroll event that changes the background color of the header
//we also add the logic for the scroll event that changes the padding of the header when the user scrolls down


const Header = () => {
  const [isActive, setIsActive] = useState(false); //whether or not the user has scrolled down
  const [navMobile, setNavMobile] = useState(false); //whether or not the nav menu is open /// toggle the visibility of a mobile nav menu
  const {currentUser, logout} = useContext(AuthContext); //get the current user from the auth context

  useEffect(() => {
    //this is an event listener that listens for the scroll event
    // scroll event
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });

  // destructure header data to get for buttons and logo and nav links
  const { logo, btnLoginText, btnSignupText, btnLogoutText } = header;

  return (
    <header  //the logic for the scroll event that changes the background color of the header and the padding of the header when the user scrolls down
      className={`${
        isActive ? "bg-neutral-500 py-[16px]" : "bg-transparent py-[20px]"
      } fixed max-w-screen left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] z-30 transition-all duration-300`}
    >
      {/* logo */}
      <a href="/">
        <img className="h-[30px]" src={logo} alt="" />
      </a>

      {/* nav - initially hidden - show in desktop mode */}
      <Nav />

      {/* buttons - initally hidden - show in desktop mode */}
      {/* Display logout button if user is logged in, otherwise show sign up and login buttons */}
      
      {currentUser ? (
        <div className="hidden lg:flex space-x-4">
          <Link to="/login">
        <button onClick={()=>logout()} className="btn btn-sm btn-primary">{btnLogoutText}</button>
          </Link>
        </div>
      ) : (
        <div className="hidden lg:flex space-x-4">
          <Link to="/login">
          <button className="btn btn-sm text-white hover:text-primary-200 transition">
            {btnLoginText}
          </button>
          </Link>
          <Link to="/register">
          <button className="btn btn-sm btn-primary">{btnSignupText}</button>
          </Link>
        </div>
      )}


      {/* nav menu icon button - hide on desktop */}
      <div
        onClick={() => setNavMobile(!navMobile)}
        className="lg:hidden absolute right-4"
      >
        {/* the navigation for the mobile menu changes depending on the state of the navMobile variable */}
        {navMobile ? (
          <RiCloseFill className="text-3xl text-primary-200 cursor-pointer" />
        ) : (
          <RiMenu4Fill className="text-3xl text-primary-200 cursor-pointer" />
        )}
      </div>

      {/* nav mobile - hide on desktop */}
      <NavMobile navMobile={navMobile} /> {/* //the nav mobile component is rendered only if the navMobile variable is true */}
    </header>
  );
};

export default Header;
