import React, { Component } from 'react'

export default class 
 extends Component {
  render() {
    return (
      <div className='card card-body mb-3'>
        <h4>{this.props.firstName}</h4>
        <ul className='list-group'>
        <li className='list-group-item'>
            Nom : {this.props.lastName}
        </li>
        <li className='list-group-item'>
            email : {this.props.email}
        </li>
        </ul>
      </div>
    )
  }
}
