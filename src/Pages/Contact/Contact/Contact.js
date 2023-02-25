import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactMap from '../ContactMap/ContactMap';
import HeroContact from '../HeroContact/HeroContact';
import StatiCall from '../StatiCall/StatiCall';

const Contact = () => {
  return (
    <div>
      <HeroContact></HeroContact>
      <StatiCall></StatiCall>
      <ContactForm></ContactForm>
      {/* <ContactMap></ContactMap> */}
    </div>
  );
};

export default Contact;