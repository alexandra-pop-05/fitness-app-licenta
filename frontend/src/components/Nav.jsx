import React from "react";

// import data form the data file
import { nav } from "../data";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

const Nav = () => {
  const { currentUser } = useContext(AuthContext);

  const filteredNav = currentUser
    ? nav
    : nav.filter((item) => item.name !== "My Products");

  return (
    <nav className="hidden lg:flex">
      <ul className="flex gap-x-8 text-white">
        {filteredNav.map((item, idx) => {
          return (
            <li key={idx}>
              <a href={item.href} className="hover:text-primary-200 transition">
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
