import React, { Component } from 'react';
import './styles/App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Button from './components/Button';
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
    showLoginForm: true, 
    showPosters: true, 
    test: "Test",
    username: '' 
  }

  // Här kan vi 
  onSubmit = (usernameFromBelow) => {
    this.setState({username: usernameFromBelow})
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
    //const showLoginForm = this.state.showLoginForm ? <div><LoginForm /></div> : '';

    // Tillstånd = state
    var tillstand;
    tillstand = {
      filmer: ["Alfons", "Emil i Lönneberga"],
      filtreradeFilmer: ["Filtrerad"],
      inloggad: true
    };

    // Destructuring  const {variabel, variabel2} = this.state;
    // Behöver ej vara i samma ordning men ska heta samma. 
    // Vi kan skapa ny variabler med property: newVar, exempel filmer: film
    const {filmer: film, inloggad, filtreradeFilmer} = tillstand;

    console.log(film);  // ["Alfons", "Emil i Lönneberga"]
    console.log(filtreradeFilmer); ["Filtrerad"]
    console.log(inloggad); // true

    return (
      <div className="App">

        { /* JSX don't render false, null, undefined or true. This can be useful to conditionally render React elements. 
        https://facebook.github.io/react/docs/jsx-in-depth.html#booleans-null-and-undefined-are-ignored Fråga! */ }
        {<Navbar /> && showHeader}

        {this.state.showLoginForm ? <div><LoginForm onSubmitFromAbove={this.onSubmit}/></div> : ''}
        { /* <LoginForm onSubmitFromAbove={this.onSubmit} /> */ }

        {this.state.username && <p>Ditt username: {this.state.username}</p>}

        <Button primary title="Hej" />
        

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
        name="showLoginForm" 
        value={this.state.checked}
        defaultChecked="true"
        />
        <label htmlFor="showLoginForm">Visa LoginForm</label>

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
            <Title type="h1" text="Hej" />
            <Title type="h2">Hej</Title>
          </Row>
          <Row>
            {moviesToRender}
          </Row>
        </Content>
          
      </div>
    );
  }
}

// Vi kan börja med att skriva Title(props) och sen när vi vet vilka 
// variabler vi använder kan vi byta 
// Vi kan använda switch, kanske inte bästa lösningen men en lösning
// Ska vi använda text eller children för texten?
function Title({type, text, children}){
  switch(type){
    case "h1":
      return <h1>{text}</h1>;
      break;
    case "h2":
      return <h2>{children}</h2>;
      break;
    default:
      return <p>Hello</p>;
      break;
  }
}

export default App;

