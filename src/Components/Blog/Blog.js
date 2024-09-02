import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Blog.css"
import team from "../../Assest/team.png"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import BlogCard from '../BlogCard/BlogCard';
import { FreeMode, Pagination } from 'swiper/modules';
import { houseArray } from '../../Data/Data';


const Blog = () => {
    const arr = [1, 2, 3, 4, 5];
  return (
    <div className='team-container'>
    <div className='team-container-top'>
        <img src={team}/>
        <h5>BLOG & NEWS</h5>
    </div>

    <h1 style={{color:"black"}}>Latest Blog & News</h1>
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
            el: '.Blog-pagination' // Custom class name for pagination
          }}
          modules={[FreeMode, Pagination]}
        >
          {houseArray.map((item) => (
            <SwiperSlide key={item}>
              <BlogCard img  = {item.img}/>
            </SwiperSlide>
          ))}
        </Swiper>
       
        <div className="Blog-pagination"></div>
      
      </div>
      <button>view all</button>


</div>
  )
}

export default Blog