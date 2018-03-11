import React, { Component } from 'react';

import '../css/statement.css'

class Statement extends Component {
  constructor(props){
    super(props);
    this.state = {
      
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
        <div className="title-font" contentEditable={true}>
          个人简介
        </div>
        <div className="font-main-body bottom-state-div min-width300">
          <div className="bottom-border" contentEditable={true}>
          喜羊羊是在动画片《喜羊羊与灰太狼》中登场的虚拟角色，由祖丽晴（国语）和曾佩仪（粤语）配音。他是青青草原羊村的绵羊，
          大肥羊学校的学生、村长慢羊羊的得力助手。他是在羊村里最聪明的羊，也是羊村跑得最快的羊。
          曾多次运用智慧赶跑灰太狼，多次拯救羊族，是羊村的小英雄
          </div>
        </div>
      </div>
    )
  }
}

export default Statement;