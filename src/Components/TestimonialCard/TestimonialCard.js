import React from 'react'
import './Testimonial.css'
import star from "../../Assest/star.png"
import testimonial from "../../Assest/testimonial.png"
const TestimonialCard = () => {
  return (
    <div className='TestimonialCard-container'>
      <div className='allStars'>
        <img src={star}/>
        <img src={star}/>
        <img src={star}/>
        <img src={star}/>
        <img src={star}/>
      </div>
      <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</h4>
      <div className='TestimonialCard-description'>
      <img src={testimonial}/>
      <div className='TestimonialCard-name'>
        <h1>
        Arita Banson
        </h1>
        <h3>
        Delta Innovation
        </h3>
      </div>
      </div>
    </div>
  )
}

export default TestimonialCard