import React, {Component} from 'react';

class Card extends Component {
  render(){
    const showPosters = this.props.showPosters ? <img className="card-img-top" src={this.props.movie.posterurl} alt="Movie poster" /> : <div></div>;
    //const showPosters = true;
    
    return(
      <div className="card w-25 p-1">
        {showPosters}
        <div className="card-block">
          <h4 className="card-title">{this.props.movie.title}</h4>
          <p className="card-text">{this.props.movie.storyline}</p>
        </div>
      </div>
    )
  };
}

export default Card;