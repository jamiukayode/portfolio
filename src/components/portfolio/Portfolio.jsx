import React from 'react'
import './Portfolio.css'
import Img1 from '../../assets/portfolio1.jpg'
import Img2 from '../../assets/portfolio2.jpg'
import Img3 from '../../assets/portfolio3.jpg'
import Img4 from '../../assets/portfolio4.jpg'
import Img5 from '../../assets/portfolio5.png'
import Img6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <div>
      <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio_container">

        <article data-aos="fade-up-right" className="portfolio_item">
            <div className="portfolio_image image">
              <img src={Img1} alt="" />
            </div>
            <h3>This is portfolio item title</h3>
            <div className="cta">
            <a href="https://github.com/" className='btn'>Github</a>
            <a href={Img1} className='btn btn-primary'>Live Demo</a>
            </div>
          </article>


          <article data-aos="fade-up-left" className="portfolio_item">
            <div className="portfolio_image image">
              <img src={Img2} alt="" />
            </div>
            <h3>This is portfolio item title</h3>
           <div className="cta">
           <a href="https://github.com/" className='btn'>Github</a>
           <a href={Img2}  className='btn btn-primary'>Live Demo</a>
           </div>
          </article>


          <article data-aos="fade-up-right" className="portfolio_item">
            <div className="portfolio_image image">
              <img src={Img3} alt="" />
            </div>
            <h3>This is portfolio item title</h3>
           <div className="cta">
           <a href="https://github.com/" className='btn'>Github</a>
           <a href={Img3}  className='btn btn-primary'>Live Demo</a>
           </div>
          </article>


          <article data-aos="fade-up-left" className="portfolio_item">
            <div className="portfolio_image image">
              <img src={Img4} alt="" />
            </div>
            <h3>This is portfolio item title</h3>
            <div className="cta">
            <a href="https://github.com/" className='btn'>Github</a>
            <a href={Img4}  className='btn btn-primary'>Live Demo</a>
            </div>
          </article>


          <article data-aos="fade-up-right" className="portfolio_item">
            <div className="portfolio_image image">
              <img src={Img5} alt="" />
            </div>
            <h3>This is portfolio item title</h3>
           <div className="cta">
           <a href="https://github.com/" className='btn'>Github</a>
           <a href={Img5}  className='btn btn-primary'>Live Demo</a>
           </div>
          </article>


          <article data-aos="fade-up-left" className="portfolio_item">
            <div className="portfolio_image image">
              <img src={Img6} alt="" />
            </div>
            <h3>This is portfolio item title</h3>
            <div className="cta">
            <a href="https://github.com/" className='btn'>Github</a>
            <a href={Img6}  className='btn btn-primary'>Live Demo</a>
            </div>
          </article>

        </div>
      </section>
    </div>
  )
}

export default Portfolio