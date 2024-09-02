import React from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import "./Video.css";
const Video = () => {
  return (
    <div className="video-container">
      <div className="video-container-lower">
        <div className="lowers-allcard">
          <div className="single-card">
            <h2>000+</h2>
            <h5>positive review </h5>
            <h5 className="last-child">fundraising capgain in al time</h5>
          </div>
          <div className="single-card">
            <h2>000+</h2>
            <h5>positive review </h5>
            <h5 className="last-child">fundraising capgain in al time</h5>
          </div>
          <div className="single-card">
            <h2>000+</h2>
            <h5>positive review </h5>
            <h5 className="last-child">fundraising capgain in al time</h5>
          </div>
          <div className="single-card">
            <h2>000+</h2>
            <h5>positive review </h5>
            <h5 className="last-child">fundraising capgain in al time</h5>
          </div>
        </div>
      </div>
      <div className="video-player">
        <VideoPlayer />
      </div>
    </div>
  );
};

export default Video;
