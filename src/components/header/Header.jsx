import React from 'react'
import './Header.css'
import CTA from './CTA'
import SocialLinks from './SocialLinks'
import Image from '../../assets/mee.png'
import { FaArrowDownLong } from "react-icons/fa6";


const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello &#128075; I'm</h5>
        <h2 data-aos='fade-in'>IBRAHIM JAMIU KAYODE</h2>
        <h5 className="text-light">Full stack web developer</h5>
        <p>I build fast, responsive & user-focused web solutions.</p>
        <CTA/>
        <SocialLinks/>
        <div  data-aos="flip-in" className="profile-img">
          <img data-aos="fade-in-right" src={Image} alt="" />
        </div>

        <a href="#footer"> < FaArrowDownLong className='scroll_down' data-aos="fade-up-left"/> </a>
      </div>
    </header>
  )
}

export default Header