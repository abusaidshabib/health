import React from 'react';
import { Link } from 'react-router-dom';
import "./BottomNav.css";
import { motion } from "framer-motion"

const BottomNav = () => {
  return (
    <motion.div className='bottom_nav_div' initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}>
      <div></div>
      <ul>
        <li>
          <Link className='nav_menu_text' to="/home">Home</Link>
        </li>
        <li>
          <Link className='nav_menu_text' to="/services">Services</Link>
        </li>
        <li>
          <Link className='nav_menu_text' to="/About">About</Link>
        </li>
        <li>
          <Link className='nav_menu_text' to="/Contact">Contact</Link>
        </li>
      </ul>
      <div></div>
    </motion.div>
  );
};

export default BottomNav;