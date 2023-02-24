import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {

  return (
    <div className='top_nav'>
      <Link className='logo_nav' to="/">HEALTH <span>+</span>
      </Link>

      <div>
        <Link className='top_menu_text' to="/login">Login</Link>
        <Link className='top_menu_text' to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;