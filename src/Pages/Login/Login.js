import React, { useContext } from 'react';
import "./Login.css";
import { AuthContext } from '../../Context/UserContext/UserContext';
import GooglePopUp from '../../Components/GooglePopUp/GooglePopUp';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import FacebookPopup from '../../Components/FacebookPopup/FacebookPopup';

const Login = () => {

  useTitle("Login")

  const { logIn } = useContext(AuthContext);

  const handleLog = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    logIn(email, password)
      .then(result => {
        const user = result.user;
      })
      .catch(error => console.log(error));
  }

  return (
    <div className='login_form_div login-bg-img'>
      <div className='form-box'>
        <div className='form-value'>
          <form onSubmit={handleLog}>
            <h1 className='title_2'>Welcome back to us</h1>
            <div className='input-box'>
              <AiOutlineMail className='login_icon' />
              <input type="text" name="email" id="email" />
              <label htmlFor="email">
                Enter Your Email
              </label>
            </div>

            <div className='input-box'>
              <AiOutlineLock className='login_icon' />
              <input type="check" name="password" id="password" />
              <label htmlFor="password">
                Enter Your Password
              </label>
            </div>

            <div className='forget-box'>
              <label htmlFor="forget">
                <input type="checkbox" /><span>Remember Me</span>
              </label>
              <Link className='login-text-link'>Forget Password</Link>
            </div>

            <input className='login-submit-btn' type="submit" value="Login" /><br />

            <div className='login-icons-div'>
              <GooglePopUp></GooglePopUp>
              <FacebookPopup></FacebookPopup>
            </div>

            <div className='forget-box'>
              <label>If you don't have any account <Link to="/register" className='login-text-link'>Register</Link></label>
            </div>

            <div className='forget-box'>
              <label>Back To <Link to="/home" className='login-text-link'>Home</Link></label>
            </div>
          </form>
        </div>
      </div >
    </div>
  );
};

export default Login;