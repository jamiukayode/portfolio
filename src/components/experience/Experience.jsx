import React from 'react'
import './Experience.css'
import { FaCircleCheck } from "react-icons/fa6";

const experience = () => {
  return (
    <div>
      <section id='experience'>
        <h5>The Skills I Have</h5>
        <h2>My Experience</h2>

        <div className="container experience_container">
          <div data-aos="fade-up-right" className="experience_frontend">
            <h3 >Frontend Development</h3>

            <div className="experience-content">

              <article className="experience-details">
                < FaCircleCheck className='experience-details-icon'/>
                <h4>HTML</h4>
                </article>

                <article className="experience-details">
                < FaCircleCheck className='experience-details-icon'/>
                <h4>CSS</h4>
              </article>

              <article className="experience-details">
                < FaCircleCheck className='experience-details-icon'/>
                <h4>JAVASCRIPT</h4>
              </article>

              <article className="experience-details">
                < FaCircleCheck className='experience-details-icon'/>
                <h4>JQUERY</h4>
              </article>

              <article className="experience-details">
                < FaCircleCheck className='experience-details-icon'/>
                <h4>BOOTSTRAP</h4>
              </article>

              <article className="experience-details">
                < FaCircleCheck className='experience-details-icon'/>
                <h4>GIT</h4>
              </article>

              <article className="experience-details">
                < FaCircleCheck className='experience-details-icon'/>
                <h4>GITHUB</h4>
              </article>

              <article className="experience-details">
                < FaCircleCheck className='experience-details-icon'/>
                <h4>REACTJS</h4>
              </article>

            </div>
          </div>

          <div data-aos="fade-up-left" className="experience_backend">
            <h3 >Backend Development</h3>
            <div className="experience-content">

            <article className="experience-details">
            < FaCircleCheck className='experience-details-icon'/>
                <h4>PYTHON</h4>
                </article>

                <article className="experience-details">
            < FaCircleCheck className='experience-details-icon'/>
                <h4>MYSQL</h4>
                </article>

                <article className="experience-details">
            < FaCircleCheck className='experience-details-icon'/>
                <h4>DJANGO</h4>
                </article>

                <article className="experience-details">
                < FaCircleCheck className='experience-details-icon'/>
                <h4>API'S</h4>
              </article>

                <article className="experience-details">
                < FaCircleCheck className='experience-details-icon'/>
                <h4>POSTMAN</h4>
              </article>

              <article className="experience-details">
                < FaCircleCheck className='experience-details-icon'/>
                <h4>HOSTING</h4>
              </article>


            </div>

          </div>

        </div>
      </section>
    </div>
  )
}

export default experience