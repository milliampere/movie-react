import React, { Component } from 'react';
import './../styles/Button.css';

class Button extends Component{
  render(){
    return(
      <button style={this.props.style} className="button" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;