import React from 'react';
import VideoListHeader from './VideoListHeader'
import VideoListContent from './VideoListContent'

class VideoList extends React.Component{
    
    changeCurrentVideo(videoId) {

        this.props.changeCurrentVideo(videoId);
    }
    
    render(){
        return(
        <div className="videoList">
        <VideoListHeader searchText = {this.props.searchText} />
        
            {
                this.props.videoList.map((video) => {
                return  <VideoListContent key={ video.id.videoId }
                                    videoId={ video.id.videoId }
                                    title={ video.snippet.title }
                                    picture={ video.snippet.thumbnails.default.url }
                                    channel={ video.snippet.channelTitle }
                                    changeCurrentVideo={this.changeCurrentVideo.bind(this)}
                                     /> 
                })
            }
        </div>
        )
    }
}

export default VideoList; 

