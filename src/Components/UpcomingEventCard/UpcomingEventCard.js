import React from 'react';
import './UpcomingEventCard.css';
import SaaSModern from '../../Assest/SaaS.png';
import address from '../../Assest/address.png';
import watch from '../../Assest/watch.png';

const UpcomingEventCard = () => {
  return (
    <div className="UpcomingEventCard-container">
      <img src={SaaSModern} alt="Event" />
      <div className="UpcomingEventCard-container-middle">
        <h2>Lorem Ipsum has been</h2>
        <h5>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
        </h5>
      </div>
      <div className="UpcomingEventCard-container-bottom">
        <div className="info-item">
          <img src={watch} alt="Time" />
          <span>08:00 am - 05:00 pm</span>
        </div>
        <div className="info-item">
          <img src={address} alt="Location" />
          <span>Noida sec 62</span>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEventCard;
