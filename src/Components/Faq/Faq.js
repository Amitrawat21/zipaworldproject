import React, { useState } from "react";
import "./Faq.css";
import maskgroup from "../../Assest/maskgroup.png";
import plus from "../../Assest/plus.png";
import minus from "../../Assest/minus.png";
import girl from "../../Assest/girl.png";
import grandpa from "../../Assest/grandpa.png";
const Faq = () => {
  // Initialize state with an array to manage multiple FAQ items
  const [show, setShow] = useState(Array(6).fill(false));

  // Function to toggle show state for specific FAQ item
  const toggleShow = (index) => {
    setShow((prevShow) =>
      prevShow.map((item, idx) => (idx === index ? !item : item))
    );
  };

  return (
    <div className="faq-container">
      <div className="faq-wrapper-left">
        <h3>Our Faq Now</h3>
        <h1>There’s Donation Of Center Can Do Question</h1>
        <h4>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley
        </h4>

        <div className="all-fos-card">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index}>
              {!show[index] ? (
                <div className="fos-card">
                  <h5>Inspire Raised Why is it important ?</h5>
                  <img
                    src={plus}
                    onClick={() => toggleShow(index)}
                    alt="Show more"
                  />
                </div>
              ) : (
                <div className="fos-large-card">
                  <div className="fos-card-large">
                    <h5>Inspire Raised Why is it important ?</h5>
                    <img
                      src={minus}
                      onClick={() => toggleShow(index)}
                      alt="Show less"
                    />
                  </div>
                  <h4>
                    There are many variations of passages the majority have
                    suffered alteration in some form, injected humour, or
                    randomised words.
                  </h4>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="faq-wrapper-right">
        <img className="maskgroup" src={maskgroup} alt="FAQ Image" />
        <img className="girl" src={girl} alt="FAQ Image" />
        <img className="grandpa" src={grandpa} alt="FAQ Image" />
      </div>
    </div>
  );
};

export default Faq;
