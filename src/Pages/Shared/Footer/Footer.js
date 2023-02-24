import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer_div'>
      <div>
        <Link className='logo_nav' to="/">+</Link>
        <div>

        </div>
      </div>

      <ul className='footer_menu'>
        <li>
          <NavLink className="menu_text" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className="menu_text" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className="menu_text" to="/">Home</NavLink>
        </li>
      </ul>

      <ul className='footer_menu'>
        <li>
          <NavLink className="menu_text" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className="menu_text" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className="menu_text" to="/">Home</NavLink>
        </li>
      </ul>

      <div>

      </div>

    </div>
  );
};

export default Footer;