import React, { Component } from 'react'
import './main.css'

class Sidebar extends Component {
  render() {
    return  <div className='sidebar'>
    <nav className='sidebarNav'>
      <ul className='sidebarNavList'>
        <li className='sidebarNavListItems'><button type='button' name='button'>Album 1</button></li>
        <li className='sidebarNavListItems'><button type='button' name='button'>Album 2</button></li>
        <li className='sidebarNavListItems'><button type='button' name='button'>Album 3</button></li>
        <li className='sidebarNavListItems'><button type='button' name='button'>Album 4</button></li>
        <li className='sidebarNavListItems'><button type='button' name='button'>Album 5</button></li>
        <li className='sidebarNavListItems'><button type='button' name='button'>Album 6</button></li>
      </ul>
    </nav>
    </div>
  }
}

export default Sidebar
