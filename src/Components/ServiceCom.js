import React, { useContext } from 'react';
import { PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { HashLink as Link } from "react-router-hash-link";
import { ApiDataContext } from '../Context/ApiContext/ApiContext';

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
          <Link className='service-details-link' to={`/service/${service._id}`} >More Details</Link></p>
        <br />
        <div className='service_button_sec'>
          <p className='para_2'><b>Price:</b><span className='green-text'>{service.price}$</span></p>
          <button className='service_btn' onClick={() => setService(service.title)} >Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCom;