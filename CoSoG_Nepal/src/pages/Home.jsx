import Header from "../components/Header"
import './Home.css'
import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero.jsx'
import EventSection from '../components/EventSection.jsx'
import Mission from '../components/Mission.jsx'
import Impact from '../components/Impact.jsx'
import CTA from '../components/CTA.jsx'

const HomePage = () => {

  return (
    <div>
        <Header />
        <Hero />
        <Mission />
        <EventSection />
        <Impact />
        <CTA /> {/* Call to action */}
    </div>
  );
};

export default HomePage;