import React, { Component } from 'react'
import {Link } from 'react-router-dom';

export default class NotFoundPage extends Component {

  render() {
    return (
      <div>
        <Link to="/institute">home</Link>
      </div>
    )
  }
}
