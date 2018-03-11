import React, { Component } from 'react';
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button';

import '../css/skill.css'

class Skill extends Component {
  constructor(props){
    super(props);
    this.state = {
      list : [
        {'name': 'Html','detail': '精通, 擅长各种惊人操作'},
        {'name': 'JavaScript','detail': '精通, 各种框架了如指掌'},
        {'name': 'Php','detail': '我觉得这是世界上最好的语言'},                    
      ]
    }
  }

  pushList = () => {
    var list = this.state.list
    list.push({'name':'...','detail':'...'})
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
        <div className="title-font skill-title-font" contentEditable={true} style={{marginBottom: 10}}>
          技能
          <div className="skill-btn-div btn-div">
            <Button className="delete-btn hid-btn" onClick={this.popList} size={'small'}>-</Button>
            <Button className="add-btn hid-btn" onClick={this.pushList} size={'small'}>+</Button>
          </div>
        </div>
        <Grid container spacing={24} className="title-font-second font-main-body">
          {this.state.list.map((item,index) => {
            return(
              <Grid item xs={6} className="margin-div skill-div" key={index}>
                <div className="skill-flex-div" key={index}>
                  <div style={{flex: 1}} contentEditable={true}>{item.name}</div>
                  <div style={{flex: 2}} contentEditable={true}>{item.detail}</div>
                </div>
              </Grid>
            )
          })}
        </Grid>
      </div>
    )
  }
}

export default Skill;