import React, { Component } from 'react';

class File extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className='item'>
        <span>File: {name}</span>
      </div>
    );
  }
}

export default File;
