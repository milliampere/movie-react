import React from 'react';

function Card(props) {
  
    // Destructuring props so we can write showPosters instead of this.props.showPosters and
    // movie.title instead of this.props.movie.title
    let {showPosters, movie} = props;
    showPosters = showPosters ? <img className="card-img-top" src={movie.posterurl} alt="Movie poster" /> : <div></div>;
    //const showPosters = true;
    
  function localClick(title){
    // Do stuff
    props.onClick(title);
  }

    return(
      <div className="card w-25 p-1">
        {showPosters}
        <div className="card-block">
          <h4 className="card-title">{movie.title}</h4>
          <p className="card-text">{movie.storyline}</p>
          {/* Vi måste skriva i anonym funktion när vi har argument 
          för att den inte ska köras direkt utan när vi klickar på knappen, eller.. */ }
          <button className="btn" onClick={() => props.onClick(props.title)}>Rösta</button>
        </div>
      </div>
    )
}

export default Card;