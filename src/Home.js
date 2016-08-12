import React, { Component } from 'react'
import './main.css'
import Gallery from './Gallery'
import info from './albums.json'

class Home extends Component {
  constructor () {
    console.log(info.album)

    super()
    this.state = {
      album: info.album
    }
  }
    //   info.album: [
    //     {name: 'Album 1', description:' This is about cats'},
    //     {name: 'Album 2', description: 'This is about bats'},
    //     {name: 'Album 3', description: 'This is about rats'},
    //     {name: 'Album 4', description: 'This is about mats'},
    //     {name: 'Album 5', description: 'This is about cats'},
    //     {name: 'Album 6', description: 'This is about thats'}
    //   ]
    // }
  render () {
    return <div className='Home'>
      <header>
        <h1>My Albums</h1>
      </header>
      <main>
        <Gallery navigate={this.props.navigate} album={this.state.album[0]} />
        <Gallery navigate={this.props.navigate} album={this.state.album[1]} />
        <Gallery navigate={this.props.navigate} album={this.state.album[2]} />
        <Gallery navigate={this.props.navigate} album={this.state.album[3]} />
        <Gallery navigate={this.props.navigate} album={this.state.album[4]} />
        <Gallery navigate={this.props.navigate} album={this.state.album[5]} />
      </main>
    </div>
  }
}

export default Home
