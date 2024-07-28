import React from 'react'
import './Services.css'
import { FaCheck } from "react-icons/fa6";

const Services = () => {
  return (
    <div>
      <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services_container">

          <article data-aos="fade-up-right" className="service">
            <div className="service_head">
              <h3>WEB DEVELOPMENT</h3>
              <ul className="service_list">
                <li>
                  < FaCheck className='service_list-icon' />
                  <p>Real-time web app development.</p>
                </li>
                <li>
                  < FaCheck className='service_list-icon' />
                  <p>Database design and optimization.</p>
                </li>
                <li>
                  < FaCheck className='service_list-icon' />
                  <p>Integration of third-party services and APIs.</p>
                </li>
                <li>
                  < FaCheck className='service_list-icon' />
                  <p>Security implementation (authentication, encryption).</p>
                </li>
                <li>
                  < FaCheck className='service_list-icon' />
                  <p>Content Management Systems (CMS) development.</p>
                </li>
                <li>
                  < FaCheck className='service_list-icon' />
                  <p>Responsive website design for all devices.</p>
                </li>
                <li>
                  < FaCheck className='service_list-icon' />
                  <p>E-commerce solutions.</p>
                </li>
                <li>
                  < FaCheck className='service_list-icon' />
                  <p>Training service.</p>
                </li>
              </ul>
            </div>
          </article>
          {/* END OF FRONTED SERVICES */}

          <article data-aos="flip-up" className="service">
            <div className="service_head">
              <h3>GRAPHICS DESIGN</h3>
              <ul className="service_list">
                <li>
                  < FaCheck className='service_list-icon' />
                  <p>Logo design.</p>
                </li>
                <li>
                  < FaCheck className='service_list-icon' />
                  <p>Print design.</p>
                </li>
                <li>
                  < FaCheck className='service_list-icon' />
                  <p>Social media graphics.</p>
                </li>
                <li>
                  < FaCheck className='service_list-icon' />
                  <p>Flyer.</p>
                </li>
                 
                <li>
                  < FaCheck className='service_list-icon' />
                  <p>Business Cards.</p>
                </li>

                <li>
                  < FaCheck className='service_list-icon' />
                  <p>Presentation.</p>
                </li>
                
              </ul>
            </div>
          </article>
{/* END OF GRAPHICS DESIGN */}


          <article data-aos="fade-up-left" className="service">
            <div className="service_head">
              <h3>WRITING</h3>
              <ul className="service_list">
                <li>
                  < FaCheck className='service_list-icon' />
                  <p>Resume/CV.</p>
                </li>
                <li>
                  < FaCheck className='service_list-icon' />
                  <p>LinkedIn optimization </p>
                </li>
                <li>
                  < FaCheck className='service_list-icon' />
                  <p>Sales Copy</p>
                </li>
                <li>
                  < FaCheck className='service_list-icon' />
                  <p>Custom Letter-head.</p>
                </li>
              
              </ul>
            </div>
          </article>
{/* END OF WRITING */}
        </div>
      </section>
    </div>
  )
}

export default Services