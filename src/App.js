import React, { Component } from 'react'
import './App.css'
import Home from './Home'
import Album from './Album'
import Footer from './Footer'
import Photo from './Photo'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentScreen: 'home'
    }
  }
    navigateTo = (screen) => {
      this.setState({
        currentScreen: screen
      })
    }

    // goHome = () => {
    //   this.navigateTo('home')
    // }

    render () {
      let screen
      switch(this.state.currentScreen) {
        case 'home': screen = <Home navigate={this.navigateTo}/>
          break;
        case 'album': screen = <Album />
          break;
        case 'photo': screen = <Photo />
          break;
        default: screen = <Home />
      }

      return <div className="App">
        <main>
          {screen}
        </main>
        <Footer />
      </div>
    }
  }
export default App
