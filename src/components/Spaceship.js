import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <p>Name of the Spaceship: {this.props.name}</p>
        <p>Speed: {this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;
