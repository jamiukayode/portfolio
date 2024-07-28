import React from 'react'
import CV from '../../assets/Ibrahim_cv.pdf'

const CTA = () => {
    return (
        <div className='cta'>
           <a href={CV} download className='btn' data-aos="fade-up-right"> Download CV</a>
           <a href="#contact" className='btn btn-primary' data-aos="fade-up-left">Let's Talk</a>
        </div>
    )
}

export default CTA