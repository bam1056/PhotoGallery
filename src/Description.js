import React, { Component } from 'react'
import './main.css'

class Description extends Component {
render () {
  return <div className='descriptions'>
  <h4>{this.props.name}</h4>
  <p>{this.props.info}</p>
  </div>
}
}

export default Description
