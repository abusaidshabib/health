import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer_div'>
      <div>
        <Link className='logo_nav' to="/">Health<span>+</span></Link>
        <div>

        </div>
      </div>

      <ul className='footer_menu'>
        <li>
          <NavLink className="nav_menu_text" to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink className="nav_menu_text" to="/about">About</NavLink>
        </li>
        <li>
          <NavLink className="nav_menu_text" to="/contact">Contact</NavLink>
        </li>
      </ul>

      <ul className='footer_menu'>
        <li>
          <NavLink className="nav_menu_text" to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink className="nav_menu_text" to="/about">Write Review</NavLink>
        </li>
        <li>
          <NavLink className="nav_menu_text" to="/contact">Terms</NavLink>
        </li>
      </ul>

      <div>
        <input className='input_field' type="email" name="email" id="" />
        <input className='orangeBtn' type="submit" value="Subscribe" />
      </div>

    </div>
  );
};

export default Footer;