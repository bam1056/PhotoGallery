import React, { Component } from 'react'
import './main.css'
import Sidebar from './Sidebar'
import Image from './Image'
import info from './albums.json'

class Album extends Component {
  constructor () {
    super ()
    this.state = {
      photo: this.info.photo
    }
  }
  render () {
    return <main className='album'>
      <Sidebar />
      <article>
        <h1 className='galleryHead'>Gallery Three</h1>
        <div className='galleryOfImages'>
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
        </div>
      </article>
    </main>
  }
}

export default Album
