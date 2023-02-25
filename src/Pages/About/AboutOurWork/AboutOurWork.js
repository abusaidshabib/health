import React from 'react';
import { Link } from 'react-router-dom';
import contact1 from "../../../assets/contact1.jpg";
import contact2 from "../../../assets/contact2.jpg";
import contact3 from "../../../assets/contact3.jpg";
import contact4 from "../../../assets/contact4.jpg";

const AboutOurWork = () => {
  return (
    <div className='static_Contact'>
      <div>
        <h1 className='title_2'>Call Us and Make An Appointment</h1>
        <br />
        <p className='para_2'>If you would like to schedule an appointment with us, we would be happy to assist you. Our office hours are Monday through Friday from 9:00am to 5:00pm, and we can be reached at (insert phone number here).When you call, please let us know the reason for your appointment so that we can ensure that you are scheduled with the appropriate person. We will also need to know your name, contact information, and any preferred dates or times for the appointment.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Link className='orangeBtn' to="/home">Go home for booking</Link>
      </div>
      <div className='contact_img_div'>
        <img src={contact1} alt="" />
        <img src={contact2} alt="" />
        <img src={contact3} alt="" />
        <img src={contact4} alt="" />
      </div>
    </div>
  );
};

export default AboutOurWork;