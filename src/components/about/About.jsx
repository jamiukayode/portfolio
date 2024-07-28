import React from 'react'
import './About.css'
import Image from '../../assets/cute.png'
import { FaAward } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaFolderPlus } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";

const about = () => {
  return (
    <div>
      <section id='about'>
        <h5 className='know_me'>Get To Know</h5>
        <h2>About Me</h2>

        <div  className="container about_container">

          <div data-aos="fade-up-right" className="about_me">
            <div data-aos="flip-up" className="about_me image">
              <img  src={Image} alt="about Image" />
            </div>
          </div>

          <div data-aos="fade-up-left" className="about_content">
            <div className="about_cards">

              <article className="about_card">
                <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>

              <article className="about_card">
                <FaUsers className='about_icon'/>
                <h5>Clients</h5>
                <small>150+ Worldwide</small>
              </article>

              <article className="about_card">
                <FaFolderPlus className='about_icon'/>
                <h5>Projects</h5>
                <small>40+ Completed </small>
              </article>

              <article className="about_card">
                <PiStudentBold className='about_icon'/>
                <h5>Students</h5>
                <small>20+</small> 
              </article>
            </div>

            <p data-aos="flip-up">
            I am a Fullstack Web Developer with over 3 years of work experience as well in ReactJS and Django. My field is an architecture of user-Friendly interfaces and scalable backend. I work on the entire lifecycle from research and prototyping to designing, developing full system logic for front-end pages. I'm a continual learner with boundless innovation and inspiration…and I also love creating the next generation of web apps! 
            </p>

            <a href="#contact" className='btn let-talk' data-aos="flip-up">Let's talk</a>
          </div>


        </div>

      </section>
    </div>
  )
}

export default about