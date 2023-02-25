import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Context/UserContext/UserContext';
import { GoogleAuthProvider } from 'firebase/auth';

const GooglePopUp = () => {

  const { googlePopUp, user } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGPopUp = () => {
    googlePopUp(googleProvider)
      .then(result => {
        result = result.user;
        navigate(from, { replace: true });
      })
      .catch(error => console.error(error));
  }

  return (
    <Link onClick={handleGPopUp} className='outline_btn align_btn_icon'><FcGoogle className='icon_ofBtn' /> Google</Link>
  );
};

export default GooglePopUp;