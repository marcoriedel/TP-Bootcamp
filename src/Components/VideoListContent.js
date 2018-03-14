import React from 'react';


class VideoListContent extends React.Component{
        
    triggerChangeCurrentVideo(event) {
        this.props.changeCurrentVideo(this.props.videoId);
    }

    render(){
        return(
            <div className="videoListContent" onClick={this.triggerChangeCurrentVideo.bind(this)}>
                <div className="videListItemImg"><img src={this.props.picture} alt={this.props.title}/></div>
                <div className="videListItemInfo">
                    <p><span className="videoListItemTitle" >{this.props.title}</span></p>
                    <span className="videoListItemChannel">{this.props.channel}</span>
                </div>
            </div>
        )
    }
}

export default VideoListContent; 

