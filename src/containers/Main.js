import React, { Component } from 'react';

import TopContainer from '../containers/TopContainer'
import BottomContainer from '../containers/BottomContainer'

import '../css/main.css'

class Main extends Component {
  render() {
    return(
      <div className="main-div">
        <TopContainer></TopContainer>
        <BottomContainer></BottomContainer>
      </div>
    )
  }
}

export default Main;