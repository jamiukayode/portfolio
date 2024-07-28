import React from 'react'
import './Nav.css'
import { FaHome } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { MdMessage } from "react-icons/md";
import { useState } from 'react';


const Nav = () => {

  const [activeNav, setActiveNav] = useState("#");

  return (
    <div>
      <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <FaHome /> </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserCircle /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>< FaBookReader /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>< GrServices /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdMessage /></a>
    </nav>
    </div >
  )
}

export default Nav