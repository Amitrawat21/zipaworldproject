import React from 'react'
import "./Testimonial.css"
import TestimonialCard from '../TestimonialCard/TestimonialCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import team from "../../Assest/team.png"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';

const Testimonial = () => {
    const arr = [1, 2, 3, 4, 5, 6,7,8];
  return (
    <div className='team-container'>
    <div className='team-container-top'>
        <img src={team}/>
        <h5>TESTIMONIAL</h5>
    </div>

    <h1  style={{color:"black"}}>Team</h1>
    <div className="testimonial-swiper">
        <Swiper
          spaceBetween={30}
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 40,
              
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
            el: '.testimonial-pagination' // Custom class name for pagination
          }}
          modules={[FreeMode, Pagination]}
        >
          {arr.map((item) => (
            <SwiperSlide key={item}>
              <TestimonialCard />
            </SwiperSlide>
          ))}
        </Swiper>
       
        <div className="testimonial-pagination"></div>
      
      </div>
      <button>view all</button>


</div>
  )
}

export default Testimonial