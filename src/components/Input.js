import React, {Component} from 'react';

class Input extends Component {

  render(){
    return(
      <form>
        <div className="form-group">
            <input 
              type="text" 
              name="name"
              value={this.props.value} 
              onChange={ this.props.handleChange }
              onKeyDown={ this.props.handleSubmit }
              className="input form-control"
              id="input1" 
              placeholder="Enter movie title" />
        </div>
      </form>
    )
  }
}

export default Input;
