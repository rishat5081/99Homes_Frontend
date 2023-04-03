import React from 'react';
import Header from '../components/header/Header';
import Service from '../components/services/Services';
import CoreServices from '../components/services/CoreServices';
import Footer from '../components/footer/Footer';
import Copyright from '../components/footer/Copyright';


const Services = () => {
  return (
    <>
      <Header />
      <Service />
      <CoreServices/>
      <Footer />
      <Copyright />
    </>
  );
};

export default Services;
