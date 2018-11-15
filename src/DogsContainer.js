import React, { Component } from 'react';
import Dogs from './Dogs';
import DogPhoto from './DogPhoto';

export default class DogsContainer extends Component {
  state = {
    breed: ''
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ breed: value });
  };
  render() {
    const { breed } = this.state;
    return (
      <React.Fragment>
        <Dogs onDogSelected={this.handleChange} />
        {breed && (
          <div>
            <DogPhoto breed={breed} />
          </div>
        )}
      </React.Fragment>
    );
  }
}
