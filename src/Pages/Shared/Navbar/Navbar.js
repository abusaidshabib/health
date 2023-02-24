import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {

  return (
    <div className='top_nav'>
      <Link className='logo_nav' to="/">HEALTH <span>+</span>
      </Link>

      <ul>
        <li>
          <Link className='nav_menu_text' to="/dashboard/my-review">My Reviews</Link>
        </li>
        <li>
          <Link className='nav_menu_text' to="/dashboard/add-services">Add Services</Link>
        </li>
      </ul>

      <div>
        <Link className='orangeBtn' to="/login">Login</Link> &nbsp;&nbsp;
        <Link className='orangeBtn' to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;