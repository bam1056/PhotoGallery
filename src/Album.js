import React, { Component } from 'react'
import './main.css'

class Album extends Component {
  render () {
    return <main className='album'>

          <div className='sidebar'>
            <nav className='sidebarNav'>
              <ul className='sidebarNavList'>
                <li className='sidebarNavListItems'><a href='./image.html'><button type='button' name='button'>Album 1</button></a></li>
                <li className='sidebarNavListItems'><a href='./image.html'><button type='button' name='button'>Album 2</button></a></li>
                <li className='sidebarNavListItems'><a href='./image.html'><button type='button' name='button'>Album 3</button></a></li>
                <li className='sidebarNavListItems'><a href='./image.html'><button type='button' name='button'>Album 4</button></a></li>
                <li className='sidebarNavListItems'><a href='./image.html'><button type='button' name='button'>Album 5</button></a></li>
                <li className='sidebarNavListItems'><a href='./image.html'><button type='button' name='button'>Album 6</button></a></li>
              </ul>
            </nav>
          </div>

          <article>
            <h1 className='galleryHead'>Gallery Three</h1>
            <div className='galleryOfImages'>
              <div className='galleryImage one'>
                <a href='./image.html'><img className='imageGallery' src='' alt='cat' /></a>
                <div className='descriptions'><h4>Photo 1</h4></div>
              </div>
              <div className='galleryImage two'>
                <a href='./image.html'><img className='imageGallery' src='' alt='cat' /></a>
                <div className='descriptions'><h4>Photo 2</h4></div>
              </div>
              <div className='galleryImage three'>
                <a href='./image.html'><img className='imageGallery' src='' alt='cat' /></a>
                <div className='descriptions'><h4>Photo 3</h4></div>
              </div>
              <div className='galleryImage four'>
                <a href='./image.html'><img className='imageGallery' src='' alt='cat' /></a>
                <div className='descriptions'><h4>Photo 4</h4></div>
              </div>
              <div className='galleryImage five'>
                <a href='./image.html'><img className='imageGallery' src='' alt='cat' /></a>
                <div className='descriptions'><h4>Photo 5</h4></div>
              </div>
              <div className='galleryImage six'>
                <a href='./image.html'><img className='imageGallery' src='' alt='cat' /></a>
                <div className='descriptions'><h4>Photo 6</h4></div>
              </div>
            </div>
        </article>
        </main>
  }
}

export default Album
