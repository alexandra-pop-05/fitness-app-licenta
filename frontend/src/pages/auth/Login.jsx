import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../auth/auth.css'

//implement login functionality here
//fetch data from backend
//use axios
//use react router to redirect to home page


export const Login = () => {
    return (
      <div className="auth-container">
        <form className="auth-form">
          <input className="auth-input" required type="text" placeholder="Username" />
          <input className="auth-input" required type="password" placeholder="Password" />
          <button className="auth-button" type="submit">Log In</button>
          <p>
          Don't have an account?{' '}
          <Link to="/register" className="register-link">
            Register here
          </Link>
        </p>
        </form>
      </div>
    );
  };