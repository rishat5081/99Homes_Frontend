import React from 'react'
import Header from '../components/header/Header';
import Linkpage from '../components/propertydetails/Linkpage';
import Slider from '../components/propertydetails/Slider';
import Overview from '../components/propertydetails/Overview';
import Footer from '../components/footer/Footer';
import Copyright from '../components/footer/Copyright';



function PropertyDetail() {
  return (
    <>
    <Header />
    <Linkpage/>
    <Slider/>
    <Overview/>
    <Footer />
    <Copyright />
  </>
  )
}

export default PropertyDetail