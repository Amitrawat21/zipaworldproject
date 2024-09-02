import React from "react";
import "./UpcomingEvent.css";
import backgroundImage from "../../Assest/background.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import UpcomingEventCard from "../UpcomingEventCard/UpcomingEventCard";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';

const UpcomingEvent = () => {
    const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div
      className="UpcomingEvent-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",

        backgroundSize: "cover",
      }}
    >
     <h1>
        Our Upcoming <span>Event</span>
      </h1>
      <div className="UpcomingEvent-swiper">
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
            el: '.upcomingEvent-pagination' // Custom class name for pagination
          }}
          modules={[FreeMode, Pagination]}
        >
          {arr.map((item) => (
            <SwiperSlide key={item}>
              <UpcomingEventCard />
            </SwiperSlide>
          ))}
        </Swiper>
       
        <div className="upcomingEvent-pagination"></div>
        <button>view all</button>
      </div>
    
    </div>
  );
};

export default UpcomingEvent;
