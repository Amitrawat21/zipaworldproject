import React from 'react';
import './Causes.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import CausesCard from '../CausesCard/CausesCard';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';

const Causes = () => {
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <div className="Causes-Container">
      <div className='causes-topp'>
      <h1>
        Our <span>Causes</span>
      </h1>
      <hr/>
      </div>
    
      <div className="swiper">
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
            el: '.pagination' // Custom class name for pagination
          }}
          modules={[FreeMode, Pagination]}
        >
          {arr.map((item) => (
            <SwiperSlide key={item}>
              <CausesCard />
            </SwiperSlide>
          ))}
        </Swiper>
       
        <div className="pagination"></div>
      </div>
      <button>view all</button>
    </div>
  );
};

export default Causes;
