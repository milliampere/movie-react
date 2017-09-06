import React from 'react';

function Row(props){

  // Props är ett objekt dvs; typeof props === Object, vi kan med destructuring 
  // skriva istället const {children} = props;
  const children = props.children;
  return( 
    <div className="row d-flex justify-content-center">
      {children}
    </div>

  )
}

export default Row;

// Vi kan också skriva direkt istället för props som argument
/* function Row({children, title, onClick}){
    return( 
      <div className="row d-flex justify-content-center">
        {children} */