import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import register from "../../assets/register.jpg";
import GooglePopUp from '../../Components/GooglePopUp/GooglePopUp';
import { AuthContext } from '../../Context/UserContext/UserContext';
import useTitle from '../../hooks/useTitle';

const Register = () => {

  useTitle("Register")

  const { createUser, updateUser, verify } = useContext(AuthContext);

  const handleReg = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        const user = result.user;
        const userData = {
          displayName: name
        }
        updateUser(userData)
          .then(() => {
            verify()
              .then(() => {
              })
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }

  return (
    <div className='form_div'>
      <h1 className='title_2'>Register create new account</h1>
      <div className='form_sec'>
        <div className='form_near_div'>
          <form onSubmit={handleReg}>

            <label htmlFor="name">
              Enter Your Name
            </label>
            <input className='field_input' type="text" name="name" id="name" />

            <label htmlFor="email">
              Enter Your Email
            </label>
            <input className='field_input' type="text" name="email" id="email" />

            <label htmlFor="password">
              Enter Your Password
            </label>
            <input className='field_input' type="text" name="password" id="password" />

            <input className='input_btn_submit' type="submit" value="Register" />
            <GooglePopUp></GooglePopUp>
            <p className='para_3'>If you have any account <Link to="/login" className='text_link'>Login</Link></p>
            <br/>
          </form>
        </div>
        <div className='img_div'>
          <img src={register} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;