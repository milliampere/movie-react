import React, { Component } from 'react';

class LoginForm extends Component{

  state = {
    username: '',
    password: '', 
    userLoggedIn: false,
    error: false
  }

  onChange = (e) => {
    e.preventDefault(); 
    this.setState({ [e.target.name] : e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.username && this.state.password){
      console.log(this.state.username, this.state.password);
      this.setState({userLoggedIn: true});
      this.setState({error: false});
    }
    else{
      this.setState({error: true});
    }
  }

  render(){
    const errorMessage = this.state.error ? <p>Error</p> : '';
    const hasError = this.state.error ? 'has-danger' : '';
    return(
      <div style={{maxWidth: "50%", margin: "5rem auto"}}>
        <form onSubmit={this.onSubmit}>
          <div className={`form-group ${hasError}`}>
            <label htmlFor="username"></label>
            <input 
              type="text" 
              className="form-control"
              name="username" 
              onChange={this.onChange}
              value={this.state.username} 
              placeholder="Användarnamn" />
              { this.state.error && <div className="form-control-feedback">F</div> }
          </div>
          <div className={`form-group ${hasError}`}>
            <label htmlFor="password"></label>
            <input 
              type="password" 
              className="form-control" 
              name="password" 
              onChange={this.onChange} 
              value={this.state.password} 
              placeholder="Lösenord" />
              { errorMessage }
          </div>
          <input type="submit" 
            className="btn"
            value="Logga in" />
        </form>
      </div>
    );
  }
}

export default LoginForm;