import React from 'react';
import useTitle from '../../../hooks/useTitle';
import AboutHero from '../AboutHero/AboutHero';
import AboutOurWork from '../AboutOurWork/AboutOurWork';
import HowAbout from '../HowAbout/HowAbout';
import WhatWeDo from '../WhatWeDo/WhatWeDo';

const About = () => {

  useTitle("About");

  return (
    <div>
      <AboutHero></AboutHero>
      <AboutOurWork></AboutOurWork>
      <WhatWeDo></WhatWeDo>
      <HowAbout></HowAbout>
    </div>
  );
};

export default About;