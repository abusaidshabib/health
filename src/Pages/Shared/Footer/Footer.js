import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Footer.css";
import { MdFacebook } from 'react-icons/md';
import { FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer_div'>
      <div>
        <Link className='logo_nav' to="/">Health<span>+</span></Link>
        <div className='footer-div-icons'>
          <MdFacebook className='icon-footer'/>
          <FaTwitter className='icon-footer' />
          <FaGoogle className='icon-footer' />
          <FaYoutube className='icon-footer' />
          <AiFillInstagram className='icon-footer' />
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
      <div className='center-justify-align'>
        <input className='footer_input_field' type="email" name="email" id="" />
        <input className='footer_Btn' type="submit" value="Subscribe" />
      </div>

    </div>
  );
};

export default Footer;