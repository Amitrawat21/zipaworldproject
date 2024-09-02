import React from 'react'
import team from "../../Assest/team.png"
import "./Team.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
import TeamMadeCard from '../TeamMateCard/TeamMadeCard'
import { TeamArray } from '../../Data/Data';
const Team = () => {
  
  return (
    <div className='team-container'>
        <div className='team-container-top'>
            <img src={team}/>
            <h5>our team</h5>
        </div>

        <h1>Team</h1>
        <div className="swiper">
        <Swiper
          spaceBetween={30}
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            700: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
            el: '.team-pagination' // Custom class name for pagination
          }}
          modules={[FreeMode, Pagination]}
        >
          {TeamArray.map((item) => (
            <SwiperSlide key={item}>
              <TeamMadeCard img = {item.img} name = {item.name} profession = {item.profession}  />
            </SwiperSlide>
          ))}
        </Swiper>
       
        <div className="team-pagination"></div>
      </div>
      <button>view all</button>

    </div>
  )
}

export default Team