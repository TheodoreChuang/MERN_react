import React, { Component } from 'react';
import ReactPlayer from 'react-player';
// import "./VideoPlayer.css";
 
class VideoPlayer extends Component {
  render () {
    const { url } = this.props;
    
    return ( 
        <div 
        style={{
          minWidth: "600px",
          minHeight: "300px",
          // border: "2px solid red"
        }}>
          <ReactPlayer
          width="100%"
          height="100%"
          url={url} 
          controls 
          />
        </div>
    );
  
  }
}

export default VideoPlayer;
