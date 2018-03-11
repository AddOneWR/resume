import React, { Component } from 'react';
import Button from 'material-ui/Button';

import '../css/award.css'
class Award extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [
        {
          'name': '中国十大卡通形象评选',
          'time': '2010',
          'detail': `获得了第二名`
        },
        {
          'name': '作者最喜欢卡通人物排名',
          'time': '2018',
          'detail': `获得了第九名, 这是作者童年的回忆`
        }
      ]
    }
  }

  pushList = () => {
    var list = this.state.list
    list.push({'name':'...','time': '...', 'detail':'...'})
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
        <div className="title-font awa-title-font" contentEditable={true}>
          获奖
          <div className="awa-btn-div btn-div">
            <Button className="delete-btn hid-btn" onClick={this.popList} size={'small'}>-</Button>
            <Button className="add-btn hid-btn" onClick={this.pushList} size={'small'}>+</Button>
          </div>
        </div>
        {this.state.list.map((item,index) => {
          return(
            <div key={index}>
              <div className="title-font title-font-second" style={{marginTop: 15}} contentEditable={true}>
                {item.name}
              </div>
              <div className="title-font title-font-second" contentEditable={true}>
                {item.time}
              </div>
              <div className="font-main-body" contentEditable={true}>
                {item.detail}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Award;