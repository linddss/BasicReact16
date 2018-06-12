import React, { Component } from 'react';
//css
import '../css/layout.css';

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Test App'
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <p className="large-font">Test</p>
      </div>
    );
  }
}

export default Layout;
