import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import Img from '../../assets/footer-logo.png'

const Footer = () => {
const current = new Date();
const year =`${current.getFullYear()}`

  return (
   <section data-aos="zoom-in-up" id='footer'>
<footer>
  <a href="#" className='footer_logo'> <img src={Img} alt="" /></a>
 <ul className="personalLinks">
  <li><a href="#">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#experience">Experience</a></li>
  <li><a href="#services">Services</a></li>
  <li><a href="#portfolio">Portfolio</a></li>
  <li><a href="#testimonials">Testimonials</a></li>
  <li><a href="#contact">Contact</a></li>
 </ul>

 <div className="footer_socials">
  <a href="https://www.instagram.com/ibrahim_webdeveloper" target='_blank'>< FaInstagram/></a>
  <a href="https://www.linkedin.com/in/ibrahim-jamiu-kayode-543509252" target='_blank'><CiLinkedin/></a>
  <a href="https://www.facebook.com/hi.grace.374" target='_blank'><CiFacebook/></a>
  <a href="https://github.com/jamiukayode/" target='_blank'><FaGithub /></a>
  <a href="https://x.com/Ibrahim_webdev/" target='_blank'><BsTwitterX /></a>
  </div>

  <div className="footer_copyright">
    <small>&copy; Ibrahim Jamiu Kayode. All right reserved {year} </small>
  </div>
</footer>
   </section>
  )
}

export default Footer