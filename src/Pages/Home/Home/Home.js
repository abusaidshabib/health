import React from 'react';
import useTitle from '../../../hooks/useTitle';
import HeroSection from '../HeroSection/HeroSection';
import HowCanWeHelp from '../HowCanWeHelp/HowCanWeHelp';
import HowWorks from '../HowWorks/HowWorks';
import Services from '../Services/Services';
import SetAppointment from '../SetAppointment/SetAppointment';

const Home = () => {
  
  useTitle("Home");

  return (
    <div>
      <HeroSection></HeroSection>
      <SetAppointment></SetAppointment>
      <Services></Services>
      <HowWorks></HowWorks>
      <HowCanWeHelp></HowCanWeHelp>
    </div>
  );
};

export default Home;