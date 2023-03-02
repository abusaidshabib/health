import React from 'react';
import { Link } from 'react-router-dom';
import "./BottomNav.css";

const BottomNav = () => {
  return (
    <div className='bottom_nav_div' >
      <div></div>
      <ul>
        <li>
          <Link className='bottom_menu_text' to="/home">Home</Link>
        </li>
        <li>
          <Link className='bottom_menu_text' to="/services">Services</Link>
        </li>
        <li>
          <Link className='bottom_menu_text' to="/About">About</Link>
        </li>
        <li>
          <Link className='bottom_menu_text' to="/Contact">Contact</Link>
        </li>
      </ul>
      <div></div>
    </div>
  );
};

export default BottomNav;