import React from 'react';
import './../styles/Button.css';

function Button(props){
  const buttonType = props.primary ? "btn btn-primary" : "btn";
  // Make animations with css, add hide and show classes
  const toggle = props.toggle ? "hide" : "show";

    return(
      <button style={props.style} className={buttonType} onClick={props.onClick}>
        {props.title}
      </button>
    );
}

export default Button;