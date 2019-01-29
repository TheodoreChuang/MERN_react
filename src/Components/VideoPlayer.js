import React, { Component } from 'react';
import ReactPlayer from 'react-player';
 
class VideoPlayer extends Component {
  render () {
    const { url } = this.props;
    
    return <ReactPlayer 
    url={url} 
    controls 
    width="100%"
    height="auto"
    />
  }
}

export default VideoPlayer;
