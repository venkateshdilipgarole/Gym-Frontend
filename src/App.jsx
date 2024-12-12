import React from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSessions from "./components/WorkoutSessions";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import BMICalaculator from "./components/BMICalculator";
import Footer from "./components/Footer";
import Workouts from "./components/Workouts";




const APP = () => {
  return(
      
    <Router> 
       <Routes>
        <Route path="/hero" element={<Hero/>} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>

      <Routes>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Navbar/>
      <Hero/>
      <WorkoutSessions/>
      <Pricing/>
      <Gallery/>
      <Contact/>
      <BMICalaculator/>
      <Footer/>
      <ToastContainer  theme="dark" position="top-center"/>
    </Router>
  )
}

export default APP; 