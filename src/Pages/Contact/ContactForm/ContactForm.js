import React from 'react';
import offers from "../../../assets/help.svg";

const ContactForm = () => {
  return (
    <div className='form_div'>
      <h1 className='title_2'>We Will help you as soon as possible</h1>
      <div className='form_sec'>
        <div className='form_near_div'>
          <form>

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

            <input className='input_btn_submit' type="submit" value="Send Mail" />
          </form>
        </div>
        <div className='img_div'>
          <img src={offers} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;