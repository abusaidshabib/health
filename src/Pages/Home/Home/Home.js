import React from 'react';
import useTitle from '../../../hooks/useTitle';
import FaqSection from '../FaqSection/FaqSection';
import HeroSection from '../HeroSection/HeroSection';
import HowCanWeHelp from '../HowCanWeHelp/HowCanWeHelp';
import HowWorks from '../HowWorks/HowWorks';
import Services from '../Services/Services';
import SetAppointment from '../SetAppointment/SetAppointment';
import TrustCompanies from '../TrustCompanies/TrustCompanies';

const Home = () => {
  
  useTitle("Home");

  return (
    <div>
      <HeroSection></HeroSection>
      <SetAppointment></SetAppointment>
      <Services></Services>
      <TrustCompanies></TrustCompanies>
      <HowWorks></HowWorks>
      <HowCanWeHelp></HowCanWeHelp>
      <FaqSection></FaqSection>
    </div>
  );
};

export default Home;