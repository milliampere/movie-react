import React, { Component } from 'react';
//import Button from './Button';
//import makePrimary from './makePrimary';

class LoginForm extends Component{

  state = {
    username: '',
    password: '', 
    userLoggedIn: false,
    error: false,
    passwordError: false,
    usernameError: false,
    formErrors: {username: '', password: ''},
    usernameValid: false,
    passwordValid: false,
    formValid: false
  }

  onChange = (e) => {
    e.preventDefault(); 
    this.setState({ [e.target.name] : e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.username && this.state.password){
      if(this.state.username.length > 8){
        console.log(this.state.username, this.state.password);
        this.setState({userLoggedIn: true});
        this.setState({error: false});
      }
      else{
        console.log("För kort användarnamn");
        this.setState({usernameError: true});
      }
    }

    else if(this.state.username && !this.state.password){
      this.setState({passwordError: true});
      console.log("Du måste skriva lösenord.");
    }
    else{
      this.setState({error: true});
    }

    this.props.onSubmitFromAbove(this.state.username);

  }

  render(){

    // Komponera med HOC
    //const PrimaryButton = makePrimary(Button);

    //const errorMessage = this.state.error ? <p>Error</p> : '';
    //const hasError = this.state.error ? 'has-danger' : '';
    const passwordErrorMessage = this.state.passwordError ? <div className="form-control-feedback">Skriv in lösenord</div> : '';
    const passwordError = this.state.passwordError ? 'has-danger' : '';
    const usernameErrorMessage = this.state.usernameError ? <div className="form-control-feedback">Skriv in användarnamn</div> : '';
    const usernameError = this.state.usernameError ? 'has-danger' : '';

    return(
      <div style={{maxWidth: "50%", margin: "5rem auto"}}>
        <form onSubmit={this.onSubmit}>
          <div className={`form-group ${usernameError}`}>
            <label htmlFor="username"></label>
            <input 
              type="text" 
              className="form-control"
              name="username" 
              onChange={this.onChange}
              value={this.state.username} 
              placeholder="Användarnamn" />
              { this.state.usernameError && <div className="form-control-feedback">Skriv användarnamn</div> }
              { usernameErrorMessage }
          </div>
          <div className={`form-group ${passwordError}`}>
            <label htmlFor="password"></label>
            <input 
              type="password" 
              className="form-control" 
              name="password" 
              onChange={this.onChange} 
              value={this.state.password} 
              placeholder="Lösenord" />
              { passwordErrorMessage }
          </div>
          <input type="submit" 
            className="btn"
            value="Logga in" />
        </form>
        { /* Komponera med HOC*/ }
        { /* <PrimaryButton title="Click me!" /> */ }
      </div>
    );
  }
}

export default LoginForm;