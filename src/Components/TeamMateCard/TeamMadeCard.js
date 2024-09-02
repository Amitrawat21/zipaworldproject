import React from "react";
import "./TeamMateCard.css";
import men from '../../Assest/men.png'
const TeamMadeCard = (props) => {
  return (
    <div className="TeamMadeCard-container">
              <img src={props.img}/>
      <div className="TeamMadeCard-container-wrapper">
        <div className="null">
      
        </div>
        <div className="TeamMadeCard-bottom">
          <h2>{props.name}</h2>
          <h4>{props.profession}</h4>
        </div>
      </div>
      
    </div>
  );
};

export default TeamMadeCard;
