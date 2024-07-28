import React from 'react'
import './Testimonial.css'
import Img1 from '../../assets/testimonials-2.jpg'
import Img2 from '../../assets/sam.JPG'
import Img3 from '../../assets/avatar4.jpg'
import Img4 from '../../assets/mudeer.jpg.jpg'
import Img5 from '../../assets/ejike.JPG'
import Img6 from '../../assets/paul.JPG'
import Img7 from '../../assets/blackdiamond.JPG'
import Img8 from '../../assets/testimonials-3.jpg'
import Img9 from '../../assets/lll.jpg'
import Img10 from '../../assets/testimonials-4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
import { register } from 'swiper/element/bundle';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
register();


const data = [{
  avatar: Img1,
  name: "Sophia Brown",
  review: "A masterful blend of front-end finesse and back-end wizardry. Their code is as clean as it is efficient, making our project shine."
},
{
  avatar: Img2,
  name: "Michael Smith ",
  review: "Delivered beyond expectations! Their ability to solve complex problems and optimize performance sets a new standard."
},
{
  avatar: Img3,
  name: "Ayesha Khan",
  review: "Effortlessly navigates between technologies, ensuring seamless integration and exceptional user experience"
},
{
  avatar: Img4,
  name: "Ismail Ahmed",
  review: "Your proactive approach and innovative solutions have been instrumental in launching our product successfully"
},
{
  avatar:Img5,
  name : "Emily Johnson",
  review:"Exceptional communicator with a knack for turning ideas into robust, scalable applications."
},
{
  avatar:Img6,
  name : "Jessica Davis",
  review:"Brings a refreshing blend of creativity and technical expertise to every project."
},
{
  avatar:Img7,
  name : "Sarah Thompson",
  review:"Consistently delivers high-quality code and valuable insights that improve overall project architecture."
},
{
  avatar:Img8,
  name : "Amanda Garcia",
  review:"His commitment to excellence and reliability make them a standout in the field of full stack development."
},
{
  avatar:Img9,
  name : "Matthew Wilson",
  review:"A true team player who enhances collaboration and drives results with precision."
},
{
  avatar:Img10,
  name : "Daniel Robinson",
  review:"His deep understanding of both front-end design and back-end functionality ensures comprehensive solutions that exceed expectations."
},
]


const testimonial = () => {

  return (
    <section id='testimonials'>
        <h5>Review from Clients</h5>
        <h2>Testimonials</h2>

        <Swiper data-aos="flip-up" className="container testimonial_container"
        // install Swiper modules
        modules={[Pagination]}spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
          {
            data.map(({ avatar, name, review }, index) => {
              return (
                <SwiperSlide key={index} className="testimonial">
                  <div className="client_avatar">
                    <img src={avatar} alt="client-image" />
                  </div>
                  <h5 className='client_name'>{name}</h5>
                  <small className='client_review'>{review}</small>
                </SwiperSlide>
              )
            })
          }
      </Swiper>
    </section>
  )
}

export default testimonial