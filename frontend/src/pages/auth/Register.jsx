import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../auth/auth.css'

export const Register = () => {
    return (
      <div className="auth-container">
        <form className="auth-form">
          <input className="auth-input" required type="text" placeholder="Username" />
          <input className="auth-input" required type="text" placeholder="Email" />
          <input className="auth-input" required type="password" placeholder="Password" />
          <p>
          Already have an account?{' '}
          <Link to="/login" className="login-link">
            Login here
          </Link>
        </p>
          <button className="auth-button" type="submit">Register</button>
        </form>
      </div>
    );
  };