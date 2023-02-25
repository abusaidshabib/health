import React from 'react';
import { MdPayment } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { HiOutlineMap } from "react-icons/hi";

const WhatWeDo = () => {
  return (
    <div className='howork_div'>
      <div>
        <h1 className='title_2'>How HealthPlus Works</h1>
        <p className='para_1'>A clinic is a medical facility that provides outpatient services to patients.</p>
        <div className='icons_text_div'>
          <div>
            <div className='icons_div'>
              <HiOutlineMap className='row_icon' />
            </div>
            <h1 className='title_3'>Find a Local Physiotherapist</h1>
            <p className='para_3'>This helps us determine which Taskers are best for your job</p>
          </div>
          <div>
            <div className='icons_div'>
              <BsFillCalendarDateFill className='row_icon' />
            </div>
            <h1 className='title_3'>Choose Your Schedule</h1>
            <p className='para_3'>This helps us determine which Taskers are best for your job</p>
          </div>
          <div>
            <div className='icons_div'>
              <MdPayment className='row_icon' />
            </div>
            <h1 className='title_3'>Make a Payment</h1>
            <p className='para_3'>This helps us determine which Taskers are best for your job</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;