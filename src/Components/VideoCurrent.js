import React from 'react';
import VideoCurrentInfo from './VideoCurrentInfo'
import VideoCurrentFrame from './VideoCurrentFrame'

class VideoCurrent extends React.Component{
    
    render(){
        return(
            <div className="currentVideo">
            <VideoCurrentFrame currentVideoId = {this.props.currentVideoId}/>
            <VideoCurrentInfo currentVideo = {this.props.currentVideo}/>            
          </div>
        )
    }
}

export default VideoCurrent; 

