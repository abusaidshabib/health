import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GooglePopUp from '../../Components/GooglePopUp/GooglePopUp';
import { AuthContext } from '../../Context/UserContext/UserContext';
import useTitle from '../../hooks/useTitle';
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import FacebookPopup from '../../Components/FacebookPopup/FacebookPopup';

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
    <div className='login_form_div register-bg-img'>
      <div className='form-box'>
        <div className='form-value'>
          <form onSubmit={handleReg}>
            <h1 className='title_2'>Register create new account</h1>
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

            <div className='input-box'>
              <AiOutlineLock className='login_icon' />
              <input type="check" name="password" id="password" />
              <label htmlFor="password">
               ReType Your Password
              </label>
            </div>


            <input className='login-submit-btn' type="submit" value="Login" /><br />

            <div className='login-icons-div'>
              <GooglePopUp></GooglePopUp>
              <FacebookPopup></FacebookPopup>
            </div>

            <div className='forget-box'>
              <label>If you have any an account <Link to="/login" className='login-text-link'>Login</Link></label>
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

export default Register;


// <div className='form_div'>
//   <h1 className='title_2'>Register create new account</h1>
//   <div className='form_sec'>
//     <div className='form_near_div'>
//       <form onSubmit={handleReg}>

//         <label htmlFor="name">
//           Enter Your Name
//         </label>
//         <input className='field_input' type="text" name="name" id="name" />

//         <label htmlFor="email">
//           Enter Your Email
//         </label>
//         <input className='field_input' type="text" name="email" id="email" />

//         <label htmlFor="password">
//           Enter Your Password
//         </label>
//         <input className='field_input' type="text" name="password" id="password" />

//         <input className='input_btn_submit' type="submit" value="Register" />
//         <GooglePopUp></GooglePopUp>
//         <p className='para_3'>If you have any account <Link to="/login" className='text_link'>Login</Link></p>
//         <br />
//       </form>
//     </div>
//     <div className='img_div'>
//       <img src={register} alt="" />
//     </div>
//   </div>
// </div>