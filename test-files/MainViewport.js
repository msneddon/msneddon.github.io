
import React, { Component } from 'react';


import Publications from './Publications.js'



class MainViewport extends Component {

  render() {

    if(this.props.view==='publications') {
        return ( <Publications /> );
    }
    else {
        return ( <div>{this.props.view}</div> );
    }
  }
}

export default MainViewport;

