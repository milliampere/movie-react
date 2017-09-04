import React, { Component } from 'react';
import List from  './List';

class SearchForm extends Component{

  state = {
    allMovies: [],  
    searchTerm: ''
  }

  // Get movies when page is loaded
  componentDidMount(){
    this.getDataFromApi();   
  }

  // Fetch movies from api
  getDataFromApi = () => {
    fetch('https://fend-api.herokuapp.com/movies?_limit=20')
    .then((response) => response.json())
    .then(data => {
      this.setState({allMovies : data});  // set global state
    })
    .catch(error => console.log('Proooblem with the fetch operation: ' + error.message));
  }

  // Handle input on change
  onChange = (e) => {
    this.setState({[e.target.name] : e.target.value});
  }

  render(){
    const { allMovies, searchTerm } = this.state;

    let moviesToList = searchTerm ? allMovies.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase())) : [];
  
    return(
      <div className="searchForm">
        <input 
          type="text" 
          name="searchTerm" 
          onChange={this.onChange} 
          value={this.state.searchTerm} 
           />
        <List data={moviesToList}/>
      </div>
    );
  }
}

export default SearchForm;