import React, { useContext } from 'react';
import "./Login.css";
import offers from "../../assets/offers.jpg";
import { AuthContext } from '../../Context/UserContext/UserContext';
import GooglePopUp from '../../Components/GooglePopUp/GooglePopUp';

const Login = () => {

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
    <div className='form_div'>
      <h1 className='title_2'>Welcome back to us</h1>
      <div className='form_sec'>
        <div className='form_near_div'>
          <form onSubmit={handleLog}>
            <label htmlFor="email">
              Enter Your Email
            </label>
            <input className='field_input' type="text" name="email" id="email" />

            <label htmlFor="password">
              Enter Your Password
            </label>
            <input className='field_input' type="text" name="password" id="password" />

            <input className='input_btn_submit' type="submit" value="Login" />
            <GooglePopUp></GooglePopUp>
          </form>
        </div>
        <div className='img_div'>
          <img src={offers} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;