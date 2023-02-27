import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext/UserContext';
import "./Navbar.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [barMenu, setBarMenu] = useState(false);
  console.log(barMenu)

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
                  <li>
                    <Link className='nav_menu_text' to="/dashboard/my-review">My Reviews</Link>
                  </li>
                  <li>
                    <Link className='nav_menu_text' to="/dashboard/add-services">Add Services</Link>
                  </li>
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
          <ul className='unOrder_list status_bar'>
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
            <br />
            <br />
            {
              user?.uid ?
                <>
                  <Link onClick={logOut} className='orangeBtn' to="/register">LogOut</Link>
                </> :
                <>
                  <li>
                    <Link className='orangeBtn' to="/login">Login</Link>
                  </li>
                  <br />
                  <br />
                  <br />
                  <li>
                    <Link className='orangeBtn' to="/register">Register</Link>
                  </li>
                </>
            }
            <br />
            <li>

            </li>
            <li></li>
            <li>
              <br />
              <br />
              <h1 className='title_3'>Dashboard</h1>
              <br />
            </li>
            <li>
              <Link className='nav_menu_text' to="/dashboard/my-review">My Reviews</Link>
            </li>
            <li>
              <Link className='nav_menu_text' to="/dashboard/add-services">Add Services</Link>
            </li>
          </ul>
          :
          <></>
      }
    </div>
  );
};

export default Navbar;