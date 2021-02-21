import React from 'react';
// import sections
import Hero from '../layout_components/sections/Hero';
import FeaturesTiles from '../layout_components/sections/FeaturesTiles';
import FeaturesSplit from '../layout_components/sections/FeaturesSplit';
import Testimonial from '../layout_components/sections/Testimonial';
import Cta from '../layout_components/sections/Cta';

const Home = (props) => {

  return (
    <>
      {!props.showCall ? (
        <div>
      <Hero className="illustration-section-01" props={props}/>


      </div>
      ):(<div></div>)}
    </>
  );
}

export default Home;