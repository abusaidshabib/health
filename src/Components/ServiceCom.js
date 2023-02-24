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
          <Link className='text_link' to="/">More Details</Link></p>
      </div>
    </div>
  );
};

export default ServiceCom;