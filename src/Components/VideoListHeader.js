import React from 'react';


class VideoListHeader extends React.Component{
       
    render(){
        if(this.props.searchText)
        {
        return(
            <div className="videoListHeader">
            <span> Videos from your search {this.props.searchText}</span>
            </div>
        )}
        else{
            return(
                <div className="videoListHeader">
                <span> Waiting from your search {this.props.searchText}</span>
                </div>
            )
        }
    }

}

export default VideoListHeader; 

