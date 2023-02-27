import React, { useContext } from 'react';
import { PhotoProvider } from 'react-photo-view';
import ServiceCom from '../../Components/ServiceCom';
import { ApiDataContext } from '../../Context/ApiContext/ApiContext';
import useTitle from '../../hooks/useTitle';

const Services = () => {

  useTitle("Services");

  const { services } = useContext(ApiDataContext);

  return (
    <PhotoProvider>
      <div className='service_main_div'>
        <div>
          <h1 className='title_2'>Services</h1>
          <p className='para_1'>What we provide</p>
          <div className='services_div'>
            {
              services.map(service =>
                <ServiceCom key={service._id} service={service}></ServiceCom>
              )
            }
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </PhotoProvider>
  );
};

export default Services;