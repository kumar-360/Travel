import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HomeSection from '../HomeSection';
import Footer from '../Footer';

function HomePage() {
  return (
    <>
      <HomeSection />
      <Cards />
      <Footer />
    </>
  );
}

export default HomePage;