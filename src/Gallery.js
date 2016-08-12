import React, { Component } from 'react'
import './main.css'
import Description from './Description'

class Gallery extends Component {
  navigateToAlbum = (e) => {
    e.preventDefault()
    this.props.navigate('album')
  }
  render () {
    return <div className='gallery one' onClick={this.navigateToAlbum}>
      <a href=''><img className='imageGallery' src='' alt='cat gallery' /></a>
      <Description name={this.props.album.name} info={this.props.album.description}/>
    </div>
  }
}

export default Gallery
