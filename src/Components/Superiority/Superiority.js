import React from 'react'
import './Superiority.css'
import brighter from "../../Assest/Vector.png"
import volunteer from "../../Assest/Groupp.png"

const Superiority = () => {
  return (
    <div className='superiority-container'>
        <div className='superiority-card'>
            <img src={brighter} alt="Logo" />
            <h4>Brighter tomorrow</h4>
        </div>
        <div className='superiority-card'>
            <img src={volunteer} alt="Logo" />
            <h4>Volunteer today</h4>
        </div>
        <div className='superiority-card'>
        <img src={brighter} alt="Logo" />
            <h4>impactful giving</h4>
        </div>
        <div className='superiority-card'>
        <img src={brighter} alt="Logo" />
            <h4>Love in action </h4>
        </div>
        <div className='superiority-card'>
        <img src={brighter} alt="Logo" />
            <h4>Brighter tomorrow</h4>
        </div>
    </div>
  )
}

export default Superiority