import React, { Component } from 'react';
import Button from 'material-ui/Button';

import '../css/experience.css'

class Experience extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [
        {
          'time': '2008',
          'company': '羊羊快乐的一年',
          'job': '队长',
          'detail': `喜羊羊带领着羊村的小伙伴们，一次又一次的破坏了灰太狼的捉羊大计`
        },
        {
          'time': '2011',
          'company': '喜羊羊与灰太狼之兔年顶呱呱',
          'job': '羊老大',
          'detail': `遇到了自己的父母，且后来成为月球救世主，遇到了自己的父母，掌握着拯救月球的秘密武器，总能在关键时刻化险为夷，带领大家走出困境`
        }
      ]
    }
  }

  pushList = () => {
    var list = this.state.list
    list.push({'time':'...','company': '...', 'job':'...','detail':'...'})
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
        <div className="title-font exp-title-font" contentEditable={true}>
          个人经历
          <div className="exp-btn-div btn-div">
            <Button className="delete-btn hid-btn" onClick={this.popList} size={'small'}>-</Button>
            <Button className="add-btn hid-btn" onClick={this.pushList} size={'small'}>+</Button>
          </div>
        </div>
        <div className="bottom-border">
          {this.state.list.map((item,index) => {
            return(
              <div key={index}>
                <div className="title-font title-font-second" style={{marginTop: 15}} contentEditable={true}>
                  {item.time}
                </div>
                <div className="title-font title-font-second">
                  <span style={{color: '#333333'}} contentEditable={true}>{item.company}</span> | <span contentEditable={true}>{item.job}</span>
                </div>
                <div className="font-main-body" contentEditable={true}>
                  {item.detail}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Experience;