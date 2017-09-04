import React, { Component } from 'react';
import './styles/App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Button from './components/Button';
//import List from './components/List/List';
import Card from './components/Card';
import Row from './components/Row';
import Input from './components/Input';
import LoginForm from './components/LoginForm';
import SearchForm from './components/SearchForm';
import SelectField from './components/SelectField';

class App extends Component {

  state = {
    allMovies: [], 
    moviesFiltered: [], 
    name: '',
    searchString: '',
    moviesByGenre: []
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
      this.setState({moviesFiltered : data});  // set global state
    })
    .catch(error => console.log('Proooblem with the fetch operation: ' + error.message));
  }


  // Copy the array to new state
  copyDataState = () => {
    this.setState({moviesFiltered : this.state.allMovies});
  }

  filterMovies = () => {
    this.setState({moviesFiltered : this.state.allMovies});
  } 


  handleChange = (e) => {
    e.preventDefault();

    this.setState({ searchString : e.target.value });
    
    if(e.target.value === ''){
      this.setState({moviesFiltered : this.state.allMovies});
    }

  }

  onChange = (e) => {
    e.preventDefault(); 
    this.setState({ checked : e.target.checked });
  }


  handleSubmit = (e) => {
    if(e.keyCode === 13){
      e.preventDefault(); 

      const searchString = this.state.searchString;
      const movies = this.state.allMovies;

      let someMovies = movies.filter((movie) => 
        movie.title.toLowerCase().indexOf(searchString.toLowerCase()) > -1);
  
      this.setState({ moviesFiltered : someMovies });
    }
  }

  filterByGenre = (e) => {
    const moviesByGenre = this.state.allMovies.filter(movie => {
      return movie.genres.includes(e.target.value)
    })
    this.setState({ moviesByGenre: moviesByGenre, genre: e.target.value });
  }


  render() {
    const { genre, moviesByGenre, allMovies, searchTerm } = this.state;

    let movies = this.state.moviesFiltered.map((movie, index) => 
      <Card key={index} movie={movie}></Card>
    );

    return (
      <div className="App">

        <Navbar />

        <SearchForm />

        <SelectField 
          onChange={this.filterByGenre} 
          value={genre} />

        <Content>
          <Row>
            {movies}
          </Row>
        </Content>
          
          <Button onClick={this.getDataFromApi}>Fetch movies</Button>

        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.onChange} />

          <select
          value={this.state.value}
          onChange={this.onChange}>
          <option value="Hej">Hej</option>
          </select>

        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="value"
            value={this.state.value}
            onChange={this.onChange} />    
        </form>

        <Input handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.value}/>

      </div>
    );
  }
}

export default App;

