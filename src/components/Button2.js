import React from 'react';

//OBS Detta är endast kodexempel, funkar ej utan PrimaryButton ska ju vara i tex App.js samt komponenter för sig! 

// Med ...props skickar vi vidare alla props
function PrimaryButton(props){
  return(
    <Button2 {...props} className="btn-primary"/>
  );
}

function Button2(props){
  return(
    <button className="`btn ${props.className} `" onClick={props.onClick}>
      {props.title}
    </button>
  );
}

<PrimaryButton title="Click me"/>