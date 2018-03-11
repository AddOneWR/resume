import React, { Component } from 'react';
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button';

import '../css/education.css'

class Education extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [
        {
          'time': '2005年至今',
          'pro': '村长慢羊羊的助手',
          'uni': '大肥羊学校',
        }
      ]
    }
  }

  pushList = () => {
    var list = this.state.list
    list.push({'time':'...','pro': '...', 'uni':'...'})
    this.setState({
      list: list
    })
  }

  popList = () => {
    var list = this.state.list
    list.pop()
    this.setState({
      list: list
    })
  }

  render() {
    return(
      <div>
        <div className="title-font edu-title-font" contentEditable={true}>
          教育情况
          <div className="edu-btn-div btn-div">
            <Button className="delete-btn hid-btn" onClick={this.popList} size={'small'}>-</Button>
            <Button className="add-btn hid-btn" onClick={this.pushList} size={'small'}>+</Button>
          </div>
        </div>
        <Grid container spacing={24} className="title-font-second" style={{marginTop: 10}}>
          {this.state.list.map((item,index) => {
            return(
              <Grid item xs={6} className="margin-div" key={index}>
                <div contentEditable={true}>{item.time}</div>
                <div contentEditable={true}>{item.pro}</div>
                <div style={{fontWeight:800}} contentEditable={true}>{item.uni}</div>
              </Grid>
            )
          })}
        </Grid> 
      </div>
    )
  }
}

export default Education;