import React from "react";
import "./About.css";
import Ellipse from "../../Assest/Ellipse.png";
import Ellipse2 from "../../Assest/Ellipse103.png"
import Ellipse3 from "../../Assest/Ellipse102.png"
import donate from "../../Assest/donate.png"

const About = () => {
  return (
    <div className="about-container">
      <div className="about-conatiner-left">
        <div className="aboutus">
          <h2>About us</h2>
          <hr />
        </div>
        <h1>Together Today For A Better Tomorrow</h1>
        <h2>
          Zipaworld Foundation is a not-for-profit organization that empowers
          communities through capacity building of marginalized and underserved
          people. Through our comprehensive support programs in Education,
          Healthcare, Livelihood, among others, we strive to create an
          environment where everyone has the opportunity to thrive.
        </h2>
    
        <button>Discover More</button>
      
       
      </div>
      <div className="about-conatiner-right">
        <div className="circle-container">
          <div className="circle circle-one">
            <div className="circle circle-two">
              <div className="circle circle-three">
                <img src={Ellipse} alt="Ellipse" className="ellipse-img" />
              </div>
            </div>
          </div>
        </div>
        <img src={Ellipse2} className="ellipse2"/>
        <img src={Ellipse3} className="ellipse3"/>
        <h3 className="bottom-news">
        150 million people in the world still homeless
        </h3>
        <h3 className="top-news">
        150 million people in the world still homeless
        </h3>
        <div className="donate">
            <img src = {donate}/>
            <h3>Donate</h3>
        </div>
        <div className="Volunteer">
            <img src = {donate}/>
            <h3>Volunteer</h3>
        </div>
      </div>
     
    </div>
  );
};

export default About;
