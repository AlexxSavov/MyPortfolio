import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";

import About from '../../components/About';
import Contact from '../../components/Contact';
import Portfolio from '../../components/Portfolio';
import Resume from '../../components/Resume'; 
// rafce

const Content = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Navigate to="/about"/>}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
    </div>
  )
}

export default Content;