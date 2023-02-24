import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {

  return (
    <div className='top_nav'>
      <Link className='logo_nav' to="/">HEALTH <span>+</span>
      </Link>

      <Link className='top_menu_text' to="/">Login</Link>
    </div>
  );
};

export default Navbar;