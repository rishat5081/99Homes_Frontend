import React from 'react'
import Header from '../components/header/Header';
import Linkpage from '../components/signin/Linkpage';
import Login from '../components/signin/SignIn';
import Footer from '../components/footer/Footer';
import Copyright from '../components/footer/Copyright';


const SignIn = () => {
  return (
    <>
    <Header />
    <Linkpage/>
    <Login />
    <Footer />
    <Copyright />
  </>
  )
}

export default SignIn