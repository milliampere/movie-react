import React, { Component } from 'react';
import './styles/App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
//import Button from './components/Button';
import Card from './components/Card';
import Row from './components/Row';
//import Input from './components/Input';
import LoginForm from './components/LoginForm';
import SearchForm from './components/SearchForm';
import SelectField from './components/SelectField';

class App extends Component {

  state = {
    allMovies: [],
    moviesByGenre: [],
    genre: '', 
    searchTerm: '',
    showHeader: true, 
    showPosters: true 
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
      this.setState({allMovies : data}); 
    })
    .catch(error => console.log('Proooblem with the fetch operation: ' + error.message));
  }

  filterByGenre = (e) => {
    const moviesByGenre = this.state.allMovies.filter(movie => {
      return movie.genres.includes(e.target.value)
    })
    this.setState({ moviesByGenre: moviesByGenre, genre: e.target.value });
  }

  /* Generic onChange-handler, updates all text inputs state */
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChangeCheck = (e) => {
    this.setState({ [e.target.name] : e.target.checked });
  }
  
  render() {
    const { genre, moviesByGenre, allMovies, searchTerm, showPosters } = this.state;

    let moviesToRender = genre ? moviesByGenre : allMovies;
    moviesToRender = searchTerm ? moviesToRender.filter(movie => movie.title.includes(searchTerm)) : moviesToRender;

    moviesToRender = moviesToRender.map((movie, index) => 
      <Card key={index} movie={movie} showPosters={showPosters}></Card>
    );

    const showHeader = this.state.showHeader ? <header><Navbar /></header> : '';


    return (
      <div className="App">

        {showHeader}

        <LoginForm />

        <SearchForm />

        <SelectField 
          onChange={this.filterByGenre} 
          value={genre} />

      <input 
        type="checkbox" 
        onChange={this.onChangeCheck} 
        name="showHeader" 
        value={this.state.checked}
        defaultChecked="true"
        />
        <label htmlFor="showHeader">Visa header</label>

        <input 
        type="checkbox" 
        onChange={this.onChangeCheck} 
        name="showPosters" 
        value={this.state.checked}
        defaultChecked="true"
        />
        <label htmlFor="showPosters">Visa posters</label>

        <Content>
          <Row>
            {moviesToRender}
          </Row>
        </Content>
          
      </div>
    );
  }
}

export default App;

