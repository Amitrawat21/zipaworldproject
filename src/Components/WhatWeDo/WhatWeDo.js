import React from "react";
import "./WhatWeDo.css";
import ellipse from "../../Assest/Ellipse99.png";
import Card from "../Card/Card";

const WhatWeDo = () => {
  return (
    <div className="WhatWeDo-container">
      <div className="WhatWeDo-container-left">
        <img src={ellipse} className="Ellipse99" />
        <div className="cards">
          <div className="cards-left">
            <Card />
            <Card />
          </div>
          <div className="cards-right">
            <Card />
          </div>
        </div>
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
  );
};

export default WhatWeDo;
