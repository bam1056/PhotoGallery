import React, { Component } from 'react'
import './main.css'

class Image extends Component {
  render () {
    return <div className='galleryImage one'>
      <a href='./image.html'><img className='imageGallery' src='' alt='cat' /></a>
      <div className='descriptions'><h4>Photo 1</h4></div>
    </div>
  }
}
export default Image
