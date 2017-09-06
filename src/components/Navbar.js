import React, {Component} from 'react';
import LoginForm from './LoginForm';

// Change to function?
class Navbar extends Component {

  state = {
    showLoginForm: false
  }

  onClick = (e) => {
    if(this.state.loginForm){
      this.setState({loginForm: true});
    }
    else{
      this.setState({loginForm: true});
    }
  }

  onChangeCheck = e => {
    this.setState({ [e.target.name] : e.target.checked });
  }

  render(){

/*     const showLoginInfo = showLoginInfo ? 
      <div className="my-2 my-lg-0">
        <a className="nav-link" href="http://data">Logga ut</a>
      </div> : ''; */

    
    const showLoginFormLink = <div><input 
      type="checkbox" 
      onChange={this.props.onChangeCheck} 
      name="showLoginForm" 
      value={this.state.checked}
      defaultChecked="false"
      /> <label htmlFor="showLoginForm">Logga in</label></div>;

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
                {showLoginFormLink}
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
          
        </nav>
        <div>{this.state.showLoginForm && <div><LoginForm />Hej</div>}</div>
      </div>
    )
  }
}

export default Navbar;