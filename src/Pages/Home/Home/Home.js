import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import HowCanWeHelp from '../HowCanWeHelp/HowCanWeHelp';
import HowWorks from '../HowWorks/HowWorks';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Services></Services>
      <HowWorks></HowWorks>
      {/* <HowCanWeHelp></HowCanWeHelp> */}
    </div>
  );
};

export default Home;