import React, { Component } from 'react';

import Title from '../components/Title'
import Skill from '../components/Skill'

import '../css/topContainer.css'

class TopContainer extends Component {

  savePdf = () => {

  }
  
  render() {
    return(
      <div className="top-div">
        <Title></Title>
        <Skill></Skill>
      </div>
    )
  }
}

export default TopContainer;