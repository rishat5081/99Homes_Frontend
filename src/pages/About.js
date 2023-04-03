import React from 'react'
import Header from '../components/header/Header'
import About from '../components/about/About'
import Services from '../components/about/Services'
import Team from '../components/about/Team'
import Footer from '../components/footer/Footer'
import Copyright from '../components/footer/Copyright'



const AboutUs = () => {
  return (
    <>
    <Header />
    <About/>
    <Services/>
    <Team/>
    <Footer />
    <Copyright/>
    </>
  )
}

export default AboutUs