import React from 'react'
import Header from '../components/header/Header'
import Home from '../components/Home/Home'
import PropertyCategories from '../components/Home/PropertyCategories'
import CoreFeatures from '../components/Home/CoreFeatures'
import ContactUs from '../components/Home/ContactUs'
import Logos from '../components/Home/Logos'
import Footer from '../components/footer/Footer'
import Copyright from '../components/footer/Copyright'

const MainHome = () => {
  return (
    <>
    <Header />
    <Home/>
    <PropertyCategories/>
    <CoreFeatures/>
    <ContactUs/>
    <Logos/>
    <Footer />
    <Copyright/>
    </>
  )
}

export default MainHome