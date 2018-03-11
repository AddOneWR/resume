import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

import '../css/title.css'

class Title extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '喜羊羊',
      job: '绵羊',
      leftList: ['青青草原','羊村','大肥羊学校'],
      rightList: [
        {'label': 'P','value': '741741741'},
        {'label': 'W','value': 'xyy520'},
        {'label': 'E','value': 'xiyangyang@yc.com'},
      ]
    }
  }

  changeAvatar = () => {
    document.getElementById('upload-img').addEventListener('change',function(){
      console.log(this)
      var pic = this.files[0]
      var r = new FileReader()
      r.readAsDataURL(pic)
      r.onload = function(e){
        document.getElementsByClassName('top-img')[0].setAttribute("src",this.result)
      }
    })
    document.getElementById('upload-img').click()
  }

  pushLeftList = () => {
    var leftList = this.state.leftList
    leftList.push('....')
    this.setState({
      leftList: leftList
    })
  }

  popLeftList = () => {
    var leftList = this.state.leftList
    leftList.pop()
    this.setState({
      leftList: leftList
    })
  }

  pushRightList = () => {
    var rightList = this.state.rightList
    rightList.push({'label': '...','value': '...'})
    this.setState({
      rightList: rightList
    })
  }
  
  popRightList = () => {
    var rightList = this.state.rightList
    rightList.pop()
    this.setState({
      rightList: rightList
    })
  }

  render() {
    return(
      <div className="top-title-div">
        <Grid container spacing={24}>
          <Grid item xs={3} className="top-img-div">
            <img src={require('../static/avatar.jpeg')} className="top-img" alt="头像" onClick={this.changeAvatar}/>
            <input type="file" id="upload-img" style={{display: 'none'}} />
          </Grid>
          <Grid item xs={9}>
            <div className="top-name" contentEditable={true}>
              {this.state.name}
            </div>
            <div className="top-job" contentEditable={true}>
              {this.state.job}
            </div>
            <Grid container spacing={24} className="top-brief-grid font-main-body">
              <Grid item xs={5} className="margin-div min-width200 left-list-div">
                <div className="left-btn-div btn-div">
                  <Button className="delete-btn hid-btn" onClick={this.popLeftList} size={'small'}>-</Button>
                  <Button className="add-btn hid-btn" onClick={this.pushLeftList} size={'small'}>+</Button>
                </div>
                {this.state.leftList.map((item,index) => {
                  return(
                    <div key={index} contentEditable={true}>{item}</div>
                  )
                })}
              </Grid>
              <Grid item xs={6} className="margin-div min-width200 right-list-div">
                <div className="right-btn-div btn-div">
                  <Button className="delete-btn hid-btn" onClick={this.popRightList} size={'small'}>-</Button>
                  <Button className="add-btn hid-btn" onClick={this.pushRightList} size={'small'}>+</Button>
                </div>
                {this.state.rightList.map((item,index) => {
                  return(
                    <div key={index}>
                      <span className="short-label" contentEditable={true}>{item.label}: </span>
                      <span contentEditable={true}>{item.value}</span>
                    </div>
                  )
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid> 
      </div>
    )
  }
}

export default Title;