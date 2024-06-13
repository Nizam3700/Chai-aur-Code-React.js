import React from 'react'
import Head from './Head/Head'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import Pop from './pop/Pop'

function Layout() {
  
  return (
    <>
    <Head/>
    <Header/>
    <Outlet/>
    <Pop/>
    <Footer/>
    </>
  )
}

export default Layout