import React from 'react';
import "./HowWorks.css";
import img1 from "../../../assets/HowHealth/Phisiotherapy-pana.svg";
import img2 from "../../../assets/HowHealth/Events-cuate.svg";
import img3 from "../../../assets/HowHealth/Online transactions-bro.svg";

const HowWorks = () => {
  return (
    <div className='howork_div'>
      <div>
        <h1 className='title_2'>How HealthPlus Works</h1>
        <p className='para_1'>A clinic is a medical facility that provides outpatient services to patients.</p>
        <div className='icons_text_div'>
          <div>
            <div className='how_img_div'>
              <img src={img1} alt=""/>
            </div>
            <h1 className='title_3'>Find a Local Physiotherapist</h1>
            <p className='para_3'>This helps us determine which Taskers are best for your job</p>
          </div>
          <div>
            <div className='how_img_div'>
              <img src={img2} alt=""/>
            </div>
            <h1 className='title_3'>Choose Your Schedule</h1>
            <p className='para_3'>This helps us determine which Taskers are best for your job</p>
          </div>
          <div>
            <div className='how_img_div'>
              <img src={img3} alt=""/>
            </div>
            <h1 className='title_3'>Make a Payment</h1>
            <p className='para_3'>This helps us determine which Taskers are best for your job</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;