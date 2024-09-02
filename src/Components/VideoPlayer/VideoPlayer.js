import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import video from '../../VIdeo/video.MP4';

const VideoPlayer = () => {
  return (
    <Video
         controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
      autoPlay
      loop
      muted
      
      poster="http://sourceposter.jpg"
      style={{ width:"92vw", height: '440px' }} // Inline style for height
      onCanPlayThrough={() => {
        // Do stuff
      }}
    >
      <source src={video} type="video/webm" />
      <track
        label="English"
        kind="subtitles"
        srcLang="en"
        src="http://source.vtt"
        default
      />
    </Video>
  );
};

export default VideoPlayer;
