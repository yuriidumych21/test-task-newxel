import React, { Component } from 'react';

class Folder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: props.collapsed
    };
  }

  toggleCollapse = (e) => {
    e.stopPropagation();
    this.setState((prevState) => ({
      collapsed: !prevState.collapsed
    }));
  };

  render() {
    const { name, children } = this.props;
    const { collapsed } = this.state;

    return (
      <div className='item' onClick={this.toggleCollapse}>
        <span>{collapsed ? '+' : '-'}</span>
        <span>{name}</span>
        {!collapsed && children}
      </div>
    );
  }
}

export default Folder;
