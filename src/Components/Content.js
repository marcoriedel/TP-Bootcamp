import React from 'react';
import SearchText from './SearchText'
import DataContent from './DataContent'

class Content extends React.Component {
    constructor(props){
        super(props);  
        this.state = {
            videoList: [],
            currentVideoId:'',
            currentVideo:{},
            searchText:''
        }           
    }    
    
    apiCall(value) {

        if(value !==''){
            
            let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet%20&q='+value+'&type=video%20&videoDefinition=high&maxResults=20&key=AIzaSyAVD2FfiuTPgeiHMu95tgaFg3b6R0C2rOw';    
    
            fetch(url)
              .then((response) => {
                return response.json()
              })
              .then((response) => {
                this.setState({ videoList: response.items, searchText:value }                
                )
              })
            }   
        else{ this.setState({videoList:[],searchText:''})}    
    }

    changeCurrentVideo(videoId){
        this.setState({currentVideoId:videoId});
        this.videoInfoApiCall(videoId);
    }

    videoInfoApiCall(videoID){
        let url = 'https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id='+videoID+'&key=AIzaSyAVD2FfiuTPgeiHMu95tgaFg3b6R0C2rOw';

        fetch(url)
        .then((response)=>{
            return response.json()
        })
        .then((response) => {
            this.setState({currentVideo: response.items[0].snippet})
        })
    }    

    render() {
      return (
        <div className="App">
          <SearchText apiCall={this.apiCall.bind(this)} />
          <DataContent 
                    videoList={this.state.videoList} 
                    searchText={this.state.searchText} 
                    changeCurrentVideo={this.changeCurrentVideo.bind(this)} 
                    currentVideo={this.state.currentVideo} 
                    currentVideoId={this.state.currentVideoId} /> 
        </div>
      );
    }
  }  
  
  export default Content;
  