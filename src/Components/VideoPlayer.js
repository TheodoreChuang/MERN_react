import React, { Component } from 'react';
import ReactPlayer from 'react-player';
 
class VideoPlayer extends Component {
  render () {
    const { url } = this.props;
    
    return (      
        <ReactPlayer
          className='react-player'
          width="100%"
          height="100%"
          url={url} 
          controls 
        />
    );
  
  }
}

export default VideoPlayer;
