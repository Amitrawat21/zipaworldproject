import React from 'react'
import './Volunter.css'
import man from "../../Assest/man.png"
const Volunter = () => {
  return (
    <div className='volunter-container'>
        <div className='voluter-left'>
            <img src={man}/>
            <h3 className='vounter_side-card volunter-card'>
            Empower with your knowledge, skill and time
            </h3>
            <h3 className='vounter_bottom-card volunter-card '>
            Helpiing thousands of pepole
            </h3>

        </div>
        <div className="WhatWeDo-container-right">
        <div className="whatwedo">
          <h2>What We Do</h2>
          <hr />
        </div>
        <h1>Empowering Communities Grow Together</h1>
        <h2>
          By addressing the critical needs in diverse sectors, we are committed
          to build an inclusive and resilient society where everyone can grow
          and succeed. Through our interventions in pressing areas like skill
          development, we foster growth for a brighter future
        </h2>
        <button>Discover More</button>
      </div>
    </div>
  )
}

export default Volunter