import React from 'react'
import img from "../assets/profile-pic-no-bg.png"
import "./Nav.css"
function Nav() {


  return (
    <nav className='nav'>
        <div className='left-content'>
            <img className='logo' src={img} alt='Logo'/>
            <span className='span'>Guilherme Matos</span>
        </div>
        <div className='right-content'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
        
    </nav>
  )
}

export default Nav;
