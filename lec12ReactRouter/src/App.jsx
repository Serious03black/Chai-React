/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import { NavLink } from 'react-router'
function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}
export default App
