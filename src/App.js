import React, { Component } from 'react';
import Button from 'material-ui/Button';

import Main from '../src/containers/Main'

import './App.css';

class App extends Component {

  savePdf = () => {

  }
  
  render() {
    return (
      <div className="App">
        <Button className="save-btn" onClick={this.savePdf}>保存为PDF</Button>
        <Main id="main"></Main>
      </div>
    );
  }
}

export default App;
