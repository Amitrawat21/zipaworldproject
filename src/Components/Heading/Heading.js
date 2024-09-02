import React from "react";
import './Heading.css'
import group from "../../Assest/Group.png"
import image from "../../Assest/image.png"
const Heading = () => {
  return (
    <div className="heading-wrapper">
      <div className="heading-left">
        <h1>Rising Together-Building Stronger Communities</h1>
        <h2>Commited to Uplifting Lives Bringing Hope Into Action </h2>
        <div className="heading-left-bottom">
            <button>Volunteer now</button>
            <button>Contact us</button>
        </div>
      </div>

      <div className="heading-right">
      <img className="parent-image" src={group} alt="Logo" />
      <img className="child-image" src={image} alt="Logo" />

      </div>
    </div>
  );
};

export default Heading;
