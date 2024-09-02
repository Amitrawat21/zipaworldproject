import React from 'react'
import blogimg from "../../Assest/Rectangle.png"
import calender from "../../Assest/calender.png"
import message from "../../Assest/message.png"
import arrow from "../../Assest/arrow2.png"
import "./BlogCard.css"

const BlogCard = (props) => {
  return (
    <div className='BlogCard_container'>
        <img src={props.img}/>
        <div className='BlogCard_container-description'>
            <div className='BlogCard-top'>
                <div className='BlogCard-top-item'>
                    <img src = {calender}/>
                    <h5>08 may,2023</h5>
                </div>
                <div class="vertical-line"></div>
                <div className='BlogCard-top-item'>
                <img src = {message}/>
                <h5>08 may,2023</h5>
                </div>

            </div>
            <h2>Lorem Ipsum has been the industry's standard dummy</h2>
            <h4>Protecting your home from damaging leaks is 
            essential to maintaining the integrity</h4>
            <hr/>
            <div className='BlogCard-bottom-item'>
             <h5>Read More</h5>
             <img src={arrow}/>
            </div>

        </div>
    </div>
  )
}

export default BlogCard