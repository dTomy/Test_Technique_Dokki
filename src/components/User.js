import React, { Component } from 'react'

export default class 
 extends Component {
  render() {
    return (
      <div className='card card-body mb-3'>
        <h4>{this.props.prenom} <br/>
        {this.props.nom}<br/>
        {this.props.maiden}
        </h4>
        <ul className='list-group'>
            @{this.props.username}<br/>
            email:{this.props.email}
        </ul>
        <ul className='list-group'>
            {this.props.birthday}<br/>
            {this.props.gender}<br/>
            {this.props.height}cm / {this.props.weight}kg<br/>
        <li className='list-group-item'>
            <h6>
            {this.props.address},<br/>
            {this.props.city}<br/>
            </h6>
            {this.props.city},{this.props.codepostale}<br/>
        </li>
        </ul>
      </div>
    )
  }
}
