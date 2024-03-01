import React from 'react'
import img from "../../assets/profile-pic-no-bg.png"
import "./Nav.css"
function Nav() {


  return (
    <header className='header'>
      <nav className='nav'>
          <div className='left-content'>
            <div className='logo-container'>
              <a href='#'><img className='logo' src={img} alt='Logo'/></a>
            </div>
            <a className='links' href='#'><span className='span'>Guilherme Matos</span></a>
          </div>
          <div className='right-content'>
              <ul>
                  <li><a className="links" href='#'>Home</a></li>
                  <li><a className="links" href='#about'>About</a></li>
                  <li><a className="links" href='#projects'>Projects</a></li>
                  <li><a className='links' href='#experience'>Experience</a></li>
                  <li><a className="links" href='#contact'>Contact</a></li>
              </ul>
          </div>
          
      </nav>
    </header>
  )
}

export default Nav;
