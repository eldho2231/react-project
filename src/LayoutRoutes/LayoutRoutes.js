import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from '../components/pages/Home/Home'
import Plans from '../components/pages/Plans/Plans'
import Courses from '../components/pages/Courses/Courses'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import AboutUs from '../components/AboutUs/AboutUs'
import Contact from '../components/pages/ContactUs/Contact'

function LayoutRoutes() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Plans/>}/>
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/contact' element={<Contact/>}/>

        </Routes>
        <Footer/>
    </Router>
  )
}

export default LayoutRoutes