import React, { Component } from "react";
import YouTube from "react-youtube";

//reusable YT video player component
class YTvideo extends Component {
    render() {
      const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };
  
      return (
        <YouTube
          videoId="2g811Eo7K8U"
          opts={opts}
          onReady={this._onReady}
        />
      );
    }
  
    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  }

export default YTvideo;