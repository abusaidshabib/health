import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from "react-router-hash-link";
import { ApiDataContext } from '../Context/ApiContext/ApiContext';
import { motion } from "framer-motion"

const ServiceCom = ({ service }) => {
  const { setService } = useContext(ApiDataContext);
  return (
    <div className='single_card'>
      <PhotoView className="img_div" src={service.image}>
        <img src={service.image} alt="" />
      </PhotoView>
      <div>
        <h3 className='title_3'>{service.title}</h3>
        <p className='para_3'>{service.details.slice(0, 100)}...
          <Link className='text_link' to={`/service/${service._id}`} >More Details</Link></p>
        <br />
        <div className='service_button_sec'>
          <p className='para_4'><b>Price:</b> {service.price}$</p>
          <motion.button whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 2 }} transition={{ duration: 0.5 }} to='/home/#book_form' smooth className='orangeBtn' onClick={() => setService(service.title)} >Book Now</motion.button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCom;