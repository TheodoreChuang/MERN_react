import React, { Component } from "react";
import YouTube from "react-youtube";

//reusable YT video player component
class YTvideo extends Component {
    render() {
      const { yt_id } = this.props;

      const opts = {
        height: 'auto%',
        width: '100%',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };
  
      return (
        <YouTube
          videoId={yt_id}
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