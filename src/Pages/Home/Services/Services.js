import React, { useContext } from 'react';
import { ApiDataContext } from '../../../Context/ApiContext/ApiContext';
import "./Services.css";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import ServiceCom from '../../../Components/ServiceCom';

const Services = () => {

  const { services } = useContext(ApiDataContext);

  return (
    <PhotoProvider>
      <div className='service_main_div'>
        <div>
          <h1 className='title_2'>Services</h1>
          <p className='para_1'>What we provide</p>
          <div className='services_div'>
            {
              services.slice(0, 3).map(service =>
                <ServiceCom key={service._id} service={service}></ServiceCom>
              )
            }
          </div>
          <br/>
          <br/>
          <br/>
          <Link to="/services" className='orangeBtn'>All services</Link>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default Services;