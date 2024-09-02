import React  , {useState}from "react";
import styled from "styled-components";
import SaaSModern from "../../Assest/SaaS.png";
import "./CausesCard.css"

const CausesCard = () => {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="CausesCard-container">
      <img src={SaaSModern} />
      <div className="CausesCard-container-middle">
        <h2>Lorem Ipsum has been</h2>
        <h6>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy{" "}
        </h6>
      </div>

      <div className="CausesCard-container-bottom">
        <h3>goals:<span>$0000</span></h3>
        <h3>Raised:<span>$0000</span></h3>
      </div>
<div className="progresbar">
<input className="slider" type="range" color="red" />
<h4>83%</h4>

</div>
    
   
      

      <button>Donate Now</button>
   
     
    </div>
  );
};

export default CausesCard;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #1f1f1f;
  color: #ffffff;
`;
