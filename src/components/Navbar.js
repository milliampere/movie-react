import React, {Component} from 'react';
import LoginForm from './LoginForm';

class Navbar extends Component {

  state = {
    loginForm: false,
    showLoginInfo: false
  }

  onClick = (e) => {
    if(this.state.loginForm){
      this.setState({loginForm: true});
    }
    else{
      this.setState({loginForm: true});
    }
  }

  render(){

    const showLoginInfo = this.state.showLoginInfo ? <div className="my-2 my-lg-0">
      <a className="nav-link" href="http://data">Logga ut</a></div> : '';

    return(
      <div>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="http://localhost:3000/">Movies</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="http://localhost:3000/">All movies <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="login">Login</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            {showLoginInfo}
          </div>
          
        </nav>
        
      </div>
    )
  }
}

export default Navbar;