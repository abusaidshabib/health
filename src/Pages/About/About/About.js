import React from 'react';
import AboutHero from '../AboutHero/AboutHero';
import AboutOurWork from '../AboutOurWork/AboutOurWork';
import HowAbout from '../HowAbout/HowAbout';
import WhatWeDo from '../WhatWeDo/WhatWeDo';

const About = () => {
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