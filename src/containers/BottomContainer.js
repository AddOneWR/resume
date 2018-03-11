import React, { Component } from 'react'
import Grid from 'material-ui/Grid'

import Statement from '../components/Statement'
import Award from '../components/Award'
import Experience from '../components/Experience'
import Education from '../components/Education'

import '../css/bottomContainer.css'



class BottomContainer extends Component {
  render() {
    return(
      <div className="bottom-div">
        <div className="bottom-border">
          <Grid container spacing={24}>
              <Grid item xs={6} className="bottom-border-right min-width300">
                <Statement></Statement>
                <Award></Award>
              </Grid>
              <Grid item xs={6} className="min-width300">
                <Experience></Experience>
                <Education></Education>
              </Grid>
          </Grid> 
        </div>
      </div>
    )
  }
}

export default BottomContainer;