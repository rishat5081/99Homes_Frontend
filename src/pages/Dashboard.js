import React from 'react'
import Header from '../components/header/Header';
import Linkpage from '../components/dashboard/Linkpage';
import Dashboard from '../components/dashboard/Dashboard';
import Footer from '../components/footer/Footer';
import Copyright from '../components/footer/Copyright';


const Dashboards = () => {
  return (
    <>
    <Header />
    <Linkpage />
    <Dashboard />
    <Footer />
    <Copyright />
  </>
  )
}

export default Dashboards