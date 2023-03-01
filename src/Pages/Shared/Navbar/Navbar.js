import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext/UserContext';
import "./Navbar.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [barMenu, setBarMenu] = useState(false);
  console.log(barMenu)


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerDirection: -1
      }
    }
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  return (
    <div className='main_nav_div'>
      <div className='top_nav'>
        <Link className='logo_nav' to="/">HEALTH <span>+</span>
        </Link>

        <div className='menu_hidden_res'>
          {
            user?.uid ?
              <>
                <ul className='unOrder_list'>
                  <motion.li variants={item}>
                    <Link className='nav_menu_text' to="/dashboard/my-review">My Reviews</Link>
                  </motion.li>
                  <motion.li variants={item}>
                    <Link className='nav_menu_text' to="/dashboard/add-services">Add Services</Link>
                  </motion.li>
                </ul>
              </>
              :
              <>
              </>
          }

        </div>

        <div className='menu_hidden_res'>
          {
            user?.uid ?
              <>
                <Link onClick={logOut} className='orangeBtn' to="/register">LogOut</Link>
              </> :
              <>
                <Link className='orangeBtn' to="/login">Login</Link> &nbsp;&nbsp;
                <Link className='orangeBtn' to="/register">Register</Link>
              </>
          }
        </div>

        <div className='mobile_menu' onClick={() => setBarMenu(!barMenu)}>
          {
            barMenu ?
              <AiOutlineClose className='menu_bar' />
              :
              <AiOutlineMenu className='menu_bar' />
          }
        </div>
      </div>
      {
        barMenu ?
          <motion.ul className='unOrder_list status_bar'
            variants={container}
            initial="hidden"
            animate="show">
            <motion.li variants={item}>
              <Link className='nav_menu_text' to="/home">Home</Link>
            </motion.li>
            <motion.li variants={item}>
              <Link className='nav_menu_text' to="/services">Services</Link>
            </motion.li>
            <motion.li variants={item}>
              <Link className='nav_menu_text' to="/About">About</Link>
            </motion.li>
            <motion.li variants={item}>
              <Link className='nav_menu_text' to="/Contact">Contact</Link>
            </motion.li>
            <br />
            <br />
            {
              user?.uid ?
                <>
                  <motion.li variants={item}>
                    <Link onClick={logOut} className='orangeBtn' to="/register">LogOut</Link>
                  </motion.li>
                </> :
                <>
                  <motion.li variants={item}>
                    <Link className='orangeBtn' to="/login">Login</Link>
                  </motion.li>
                  <br />
                  <br />
                  <br />
                  <motion.li variants={item}>
                    <Link className='orangeBtn' to="/register">Register</Link>
                  </motion.li>
                </>
            }
            <br />
            <motion.li variants={item}>

            </motion.li>
            <motion.li variants={item}></motion.li>
            <motion.li variants={item}>
              <br />
              <br />
              <h1 className='title_3'>Dashboard</h1>
              <br />
            </motion.li>
            <motion.li variants={item}>
              <Link className='nav_menu_text' to="/dashboard/my-review">My Reviews</Link>
            </motion.li>
            <motion.li variants={item}>
              <Link className='nav_menu_text' to="/dashboard/add-services">Add Services</Link>
            </motion.li>
          </motion.ul>
          :
          <></>
      }
    </div>
  );
};

export default Navbar;