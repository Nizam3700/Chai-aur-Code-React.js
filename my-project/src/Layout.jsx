import React from 'react'
import Head from './Head/Head'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Head/>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout