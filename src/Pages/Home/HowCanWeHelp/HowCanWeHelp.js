import React from 'react';
import "./HowCanWeHelp.css";
import help from "../../../assets/help.jpg";

const HowCanWeHelp = () => {
  return (
    <div className='help_div'>
      <div className='img_div_help'>
        <img src={help} alt="" />
        <div className='back_img'></div>
      </div>
      <div className='help_content'>
        <div>
          <h1 className='title_2'>
            How We Can Help You?</h1>
          <p className='para_2'>If you are looking for general information related to the medical field, I can provide you with factual and accurate information about diseases, symptoms, treatments, medications, and more.</p>
          <input className='input_field' type="email" name="email" id="" />
          <input className='orangeBtn' type="submit" value="Subscribe" />
        </div>
      </div>
    </div>
  );
};

export default HowCanWeHelp;