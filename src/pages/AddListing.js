import React from 'react';
import Header from '../components/header/Header';
import AddListings from '../components/listing/AddListing';
import ListingForm from '../components/listing/ListingForm';
import Footer from '../components/footer/Footer';
import Copyright from '../components/footer/Copyright';

const AddListing = () => {
  return (
    <>
      <Header />
      <AddListings />
      <ListingForm />
      <Footer />
      <Copyright />
    </>
  );
};

export default AddListing;
