import React from 'react';
import "./HowCanWeHelp.css";
import help from "../../../assets/help.svg";

const HowCanWeHelp = () => {
  return (
    <div className='help_div'>
      <div className='img_div_help'>
        <img src={help} alt="" />
      </div>
      <div className='help_content'>
        <div>
          <h1 className='title_2'>
            How We Can Help You?</h1>
          <p className='para_2'>If you are looking for general information related to the medical field, I can provide you with factual and accurate information about diseases, symptoms, treatments, medications, and more.</p>
          <span className='center-justify-align'>
            <input className='input_field_help' type="email" name="email" id="" />
            <input className='helpBtn' type="submit" value="Subscribe" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HowCanWeHelp;