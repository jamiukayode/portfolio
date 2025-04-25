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

        <div className="container about_container">

          <div data-aos="fade-up-right" className="about_me">
            <div data-aos="flip-up" className="about_me image">
              <img src={Image} alt="about Image" />
            </div>
          </div>

          <div data-aos="fade-up-left" className="about_content">
            <div className="about_cards">

              <article className="about_card">
                <FaAward className='about_icon' />
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>

              <article className="about_card">
                <FaUsers className='about_icon' />
                <h5>Clients</h5>
                <small>150+ Worldwide</small>
              </article>

              <article className="about_card">
                <FaFolderPlus className='about_icon' />
                <h5>Projects</h5>
                <small>40+ Completed </small>
              </article>

              <article className="about_card">
                <PiStudentBold className='about_icon' />
                <h5>Students</h5>
                <small>20+</small>
              </article>
            </div>

            <p data-aos="flip-up">
              Hi, I am a passionate and results-driven Web Developer with a focus on building fast, responsive, and user-friendly websites that drive real business growth.
              With a solid background in both frontend and backend development, I specialize in creating modern web solutions that not only look great but perform flawlessly across devices. Whether it's a personal brand, a small business, or a startup, I bring ideas to life through clean code, smart design, and seamless user experience.
              I have collaborated with clients across different industries, delivering tailored solutions that are aligned with their goals. From landing pages to full-stack web apps, I am here to turn visions into reality—on time and within budget.</p>

            <a href="#contact" className='btn let-talk' data-aos="flip-up">Let's talk</a>
          </div>


        </div>

      </section>
    </div>
  )
}

export default about