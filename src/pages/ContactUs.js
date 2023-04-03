import React from 'react';
import Header from '../components/header/Header';
import ContactUs from '../components/contact/ContactUs';
import Form from '../components/contact/Form';
import Map from '../components/contact/Map';
import Footer from '../components/footer/Footer';
import Copyright from '../components/footer/Copyright';

const Contact = () => {
  return (
    <>
      <Header />
      <ContactUs />
      <Form />
      <Map />
      <Footer />
      <Copyright />
    </>
  );
};

export default Contact;
