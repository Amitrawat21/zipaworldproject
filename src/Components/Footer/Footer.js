import React from "react";
import address from "../../Assest/address3.png";
import message from "../../Assest/message2.png";
import call from "../../Assest/call.png";
import social from "../../Assest/soicial.png";
import sending from "../../Assest/sending.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-top-card">
          <img src={address} />
          <div className="footer-top-card-desc">
            <h4>Location</h4>
            <h4>Lorem Ipsum has been the</h4>
          </div>
        </div>
        <div className="footer-top-card">
          <img src={message} />
          <div>
            <h4>Location</h4>
            <h4>Lorem Ipsum has been the</h4>
          </div>
        </div>
        <div className="footer-top-card">
          <img src={call} />
          <div>
            <h4>Location</h4>
            <h4>Lorem Ipsum has been the</h4>
          </div>
        </div>
      </div>

      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col-first">
              <h4>logo</h4>
              <h3>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s
              </h3>
              <h3> Copyright © 2024. All right reserved.</h3>
            </div>
            <div class="footer-col">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">order status</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Pages</h4>
              <ul>
                <li>
                  <a href="#">Event</a>
                </li>
                <li>
                  <a href="#">get involved</a>
                </li>
                <li>
                  <a href="#">Causes</a>
                </li>
                <li>
                  <a href="#">Volunteer</a>
                </li>
                <li>
                  <a href="#">Donation</a>
                </li>
              </ul>
            </div>
            <div class="footer-col-second">
              <h4>Newslatter</h4>
            
              <h3>
                Newsletter Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s enter your email address
              </h3>
              <div className="message-send">
                <h3>Enter your email Address</h3>
                <img src={sending}/>
              </div>
              <img src={social}/>
              <div className="footer-col-des">
                <h3>Privacy pilicy</h3>
                <h3>Term and condition</h3>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
