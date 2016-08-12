import React, { Component } from 'react'
import './main.css'

class Photo extends Component {
  render () {
    return <div className='Photo'>
      <header>
        <span><a href='./album.html'><button type='button' name='button'>Back to Album 1</button></a></span><h1>Photo 1</h1>
      </header>
      <main>
        <div className='bigImageContainer'>
          <img className='bigImage' height='500px' width='500px' src='' alt='cat' />
        </div>
      </main>
    </div>
  }
}

export default Photo
