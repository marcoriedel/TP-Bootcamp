import React from 'react';
import VideoList from './VideoList'
import VideoCurrent from './VideoCurrent'

class DataContent extends React.Component{
    
    changeCurrentVideo(videoId) {
        this.props.changeCurrentVideo(videoId);
    }

    render(){
        return(
          <div className="dataContent">
            <VideoCurrent currentVideo = {this.props.currentVideo} currentVideoId = {this.props.currentVideoId} />
            <VideoList videoList ={this.props.videoList} searchText={this.props.searchText} changeCurrentVideo={this.changeCurrentVideo.bind(this)} />         
          </div>   
        )
    }
}

export default DataContent; 



