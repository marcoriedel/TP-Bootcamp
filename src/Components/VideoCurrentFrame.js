import React from 'react';
import YouTube from 'react-youtube';

class VideoCurrentFrame extends React.Component{
    
    render(){
        const opts = {
            height: '100%',
            width: '100%',
            playerVars: { autoplay: 1}
          };

        if(this.props.currentVideoId)
        {  
        return(
            <YouTube
            videoId={this.props.currentVideoId}
            opts={opts}
            onReady={this._onReady}
          />
        )}
        else{
        return(
            <img className="noVideoImg" src={ require('../Img/youTube.png')} alt="Powered By YouTube" />
            )
        }
    }
}

export default VideoCurrentFrame; 

