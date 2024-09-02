import React from 'react'
import "./Card.css"
import  feed from "../../Assest/feed.png"
import arrow from "../../Assest/arrow.png"

const Card = () => {
  return (
    <div className='Card-container'>
        <img className='feed' src={feed}/>
        <h2>Feeding The Future</h2>
        <h5>Nourishing Lives Through Nutritious Meals And Healthy Eating Habits</h5>
        <div className='readmore'>
            <h4>Read More</h4>
            <div className='arrow-image'>
            <img src = {arrow}/>
            </div>
        
        </div>
    </div>
  )
}

export default Card