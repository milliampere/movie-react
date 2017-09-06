import React, {Component} from 'react';
import './../styles/Button.css';

class Button extends Component {

  state = {
    value: 'Value from inside button'
  }

  //Add a local onClick function
  localClick = (value) => {
    // Do stuff
    console.log(value);
    this.props.onClick(value);
  }

  render(){

    // Multiple ternary operator
    const buttonType = this.props.primary ? "btn btn-primary" : 
    (this.props.secondary ? "btn btn-secondary" : 
    (this.props.success ? "btn btn-success" : 
    (this.props.link ? "btn btn-link" : 
    "btn")));
    
  /*   let buttonType = 'btn';
    if(props.primary){
      buttonType = "btn btn-primary";
    }else if(props.secondary){
      buttonType = "btn btn-secondary";
    }else if(props.success){
      buttonType = "btn btn-success";
    }else if(props.link){
      buttonType = "btn btn-link";
    }  */

    // Lägga till class om vi bara har en return
    //const buttonType = props.primary ? "btn btn-primary" : "btn";

    // Make animations with css, add hide and show classes
    //const toggle = props.toggle ? "hide" : "show";

    return(
      <button className={buttonType} onClick={this.onClick}>
        {this.props.title}
      </button>
    );
  }
}

export default Button;