import React, { Component } from 'react'
import StudioList from '../StudioList/index'

export default class Belong extends Component {
    render() {
      return (
        <div>
          <StudioList institute={this.props.match.params.id}/>
        </div>
      );
    }
  }