import React from 'react';

class VideoCurrentInfo extends React.Component{
       
    render(){
        return(
            <div className="currentVideoInfo">            
            <span className="currentVideoInfoTitle"> {this.props.currentVideo.title}</span>
            <p className="currentVideoInfoDescription">{this.props.currentVideo.description}</p>
            </div>
        )
    }
}

export default VideoCurrentInfo; 

