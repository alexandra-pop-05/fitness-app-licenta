import React from "react";
import { Link } from "react-router-dom";

// import data
import { nav } from "../data";

import { AuthContext } from "../context/authContext";
import { useContext } from "react";

const NavMobile = ({ navMobile }) => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <nav
      className={`${
        navMobile ? "min-h-screen" : "min-h-0"
      } w-full fixed top-0 left-0 right-0 bg-neutral-500 -bottom-12 -z-10 lg:hidden overflow-hidden transition-all h-0`}
    >
      <ul className="w-full top-0 left-0 h-full flex flex-col justify-center items-center gap-y-8">
        {nav.map((item, idx) => {
          //we map through the nav data and we create a list item for each item in the nav data
          return (
            <li key={idx}>
              {" "}
              {/* we add a key to the list item */}
              <a className="text-white text-body-md" href={item.href}>
                {item.name} {/* we add the name of the nav item */}
              </a>
            </li>
          );
        })}
      </ul>
      {/* buttons */}
      {currentUser ? (
        <div className="-mt-32 flex justify-center gap-x-8">
          <button className="btn btn-lg btn-primary" onClick={()=>logout()}>
            Logout
          </button>
        </div>
      ) : (
        <div className="-mt-32 flex justify-center gap-x-8">
          <Link to="/login">
            <button className="btn btn-lg bg-neutral-300 text-neutral-100 hover:bg-neutral-300/90 transition">Log in</button>
          </Link> 
          <Link to="/register">
            <button className="btn btn-lg btn-primary">Sign in </button>
          </Link> 
        </div>
      )}
    </nav>
  );
};

export default NavMobile;
