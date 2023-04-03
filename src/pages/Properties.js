import React from 'react';
import Header from '../components/header/Header';
import Property from '../components/Properties/Properties';
import Footer from '../components/footer/Footer';
import Copyright from '../components/footer/Copyright';
import Linkpage from '../components/Properties/Linkpage';

const Properties = () => {
  return (
    <>
      <Header />
      <Linkpage />
      <Property />
      <Footer />
      <Copyright />
    </>
  );
};

export default Properties;
