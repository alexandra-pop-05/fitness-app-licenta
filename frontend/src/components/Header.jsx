import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// import header data
import { header } from "../data";

// import components
import Nav from "../components/Nav";
import NavMobile from "./NavMobile";
import { AuthContext } from "../context/authContext";

// import icons from react-icons
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge } from "@mui/material";

//in the header component we add the nav and nav mobile components and we also add the logic for the mobile nav menu
//we also add the logic for the scroll event that changes the background color of the header
//we also add the logic for the scroll event that changes the padding of the header when the user scrolls down

const Header = () => {
  const [isActive, setIsActive] = useState(false); //whether or not the user has scrolled down
  const [navMobile, setNavMobile] = useState(false); //whether or not the nav menu is open /// toggle the visibility of a mobile nav menu
  const { currentUser, logout } = useContext(AuthContext); //get the current user from the auth context
  const navigate = useNavigate(); //use navigate hook to navigate to a different page
  const quantity = useSelector((state) => state.cart.quantity);

  useEffect(() => {
    //this is an event listener that listens for the scroll event
    // scroll event
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });

  // destructure header data to get for buttons and logo and nav links
  const { logo, btnLoginText, btnSignupText, btnLogoutText } = header;

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <header //the logic for the scroll event that changes the background color of the header and the padding of the header when the user scrolls down
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
      {currentUser && currentUser.nickname ? (
        <div className="hidden lg:flex space-x-4 items-center">
          <span className=" text-white text-sm font-bold ">
            {currentUser.nickname}
          </span>
          <Badge badgeContent={quantity} color="primary">
            <AiOutlineShoppingCart
              onClick={handleCartClick}
              className="text-3xl text-primary-200 cursor-pointer"
            />
          </Badge>

          <Link to="/login">
            <button onClick={() => logout()} className="btn btn-sm btn-primary">
              {btnLogoutText}
            </button>
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


      {/* Menu and Cart Icons */}
      <div className="lg:hidden flex space-x-4 items-center">
        {currentUser && currentUser.nickname && (
          <>
        <span className="text-white text-sm font-bold">
          {currentUser?.nickname}
        </span>
        {/* Cart Icon */}
        <Badge badgeContent={quantity} color="primary">
          <AiOutlineShoppingCart
            onClick={handleCartClick}
            className="text-3xl text-primary-200 cursor-pointer"
          />
        </Badge>
        </>
        )}
        {/* Menu Icon */}
        <div onClick={() => setNavMobile(!navMobile)}>
          {navMobile ? (
            <RiCloseFill className="text-3xl text-primary-200 cursor-pointer" />
          ) : (
            <RiMenu4Fill className="text-3xl text-primary-200 cursor-pointer" />
          )}
        </div>
      </div>
      {/* nav mobile - hide on desktop */}
      <NavMobile navMobile={navMobile} />{" "}
      {/* //the nav mobile component is rendered only if the navMobile variable is true */}
    </header>
  );
};

export default Header;
