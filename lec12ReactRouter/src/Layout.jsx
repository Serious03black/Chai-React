import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router'

function layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    {/* //layout la bse sarkha use karto jith outlate dila tith goshthi cahgne hotuil  */}
    {/* //header smae foter smae jti houtlate tith chage katu shkato  */}
    <Footer/>
    </>
  )
}

export default layout
