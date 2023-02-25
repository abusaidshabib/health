import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceCom = ({ service }) => {
  return (
    <div className='single_card'>
      <PhotoView className="img_div" src={service.image}>
        <img src={service.image} alt="" />
      </PhotoView>
      <div>
        <h3 className='title_3'>{service.title}</h3>
        <p className='para_3'>{service.details.slice(0, 100)}...
          <Link className='text_link' to={`/service/${service._id}`} >More Details</Link></p>
          <br/>
        <div className='service_button_sec'>
          <p className='para_4'><b>Price:</b> {service.price}$</p>
          <Link className='orangeBtn' to="/">Book Now</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCom;