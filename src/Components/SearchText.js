import React from 'react';
import {debounce} from 'lodash';

class SearchText extends React.Component{
    
    
    handleChange = debounce((text) => {
        this.props.apiCall(text);
      } ,500);


    render(){
        return(
            <header className="App-header">
            <input onChange={ e => this.handleChange(e.target.value)} className="searchText" type="text" placeholder="Search.." alt="Powered By YouTube"/>          
        </header> 
        )
    } 
}

export default SearchText; 

