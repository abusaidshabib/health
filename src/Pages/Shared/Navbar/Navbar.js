import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext/UserContext';
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className='top_nav'>
      <Link className='logo_nav' to="/">HEALTH <span>+</span>
      </Link>

      {
        user?.uid ?
          <>
            <ul>
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

      <div>
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
    </div>
  );
};

export default Navbar;