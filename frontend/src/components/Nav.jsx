import React from 'react';

// import data form the data file
import { nav } from '../data';
import { AuthContext } from '../context/authContext';
import { useContext } from 'react';
import { header } from '../data';

const Nav = () => {

  const { currentUser, logout } = useContext(AuthContext);

  return (
    <nav className='hidden lg:flex'>
      <ul className='flex gap-x-8 text-white'>
        {nav.map((item, idx) => {
          return (
            <li key={idx}>
              <a href={item.href} className='hover:text-primary-200 transition'>
                {item.name}
              </a>
            </li>
          );
        })}
       {/*  {currentUser ? (
          <li>
            <button onClick={logout} className='hover:text-primary-200 transition'>
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <a href='/login' className='hover:text-primary-200 transition'>
                {header.btnLoginText}
              </a>
            </li>
            <li>
              <a href='/signup' className='hover:text-primary-200 transition'>
                {header.btnSignupText}
              </a>
            </li>
          </>
        )} */}
      </ul>
    </nav>
  );
};

export default Nav;
