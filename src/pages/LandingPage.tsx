import React from 'react';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import FeaturedAircraft from '../components/FeaturedAircraft';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <HowItWorks />
      <FeaturedAircraft />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;