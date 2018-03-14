import React from 'react';
import {debounce} from 'throttle-debounce';

class SearchText extends React.Component{
        
    handleChange(event) {
        this.props.apiCall(event.target.value);
      }  

    render(){
        return(
            <header className="App-header">
            <input onChange={this.handleChange.bind(this)} className="searchText" type="text" placeholder="Search.." alt="Powered By YouTube"/>          
        </header> 
        )
    } 
}

export default SearchText; 

