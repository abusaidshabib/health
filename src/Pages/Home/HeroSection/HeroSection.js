import React from 'react';
import "./HeroSection.css";
import { Link } from 'react-router-dom';
import { MdHealthAndSafety } from "react-icons/md";
import img1 from "../../../assets/HeroSection2.svg";

const HeroSection = () => {
  return (
    <div className='hero_div'>
      <div className='content_hero'>
        <h1 className='title_1'>Your <span>Health <MdHealthAndSafety /></span>  Our <span> Priority </span></h1>
        <div className='hero_sec_content'>
          <p className='para_1'>We are committed to providing you with the highest quality care in a warm and welcoming environment. </p>
          <Link to="/services" className='orangeBtn'>Our Services</Link>
        </div>
      </div>
      <div className='hero_img_div'>
        <img src={img1} alt=""/>
      </div>
    </div>
  );
};

export default HeroSection;