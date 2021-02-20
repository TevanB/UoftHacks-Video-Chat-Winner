import React from 'react';
// import sections
import Hero from '../layout_components/sections/Hero';
import FeaturesTiles from '../layout_components/sections/FeaturesTiles';
import FeaturesSplit from '../layout_components/sections/FeaturesSplit';
import Testimonial from '../layout_components/sections/Testimonial';
import Cta from '../layout_components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
}

export default Home;