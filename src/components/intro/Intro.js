import React from 'react'
import "./Intro.css"
import github from "../../assets/github-ico.png"
import linkedin from "../../assets/linkedin-ico.png"

function Intro() {
  return (
    <section className='intro-section'>
            <div className='middle-intro-section'>
                <h1>Hey there! I'm Guilherme</h1>
                <h4>I like to code revolutionary projects </h4>
                <div className='cta'>
                    <a href='#projects' className='button button-intro'>Projects</a>
                </div>
                
            </div>
            <div className='socials'>
                <div className='socials-item'>
                    <a className='social-icon-a' href='https://www.linkedin.com/in/guilherme-matos-795829226/'>
                        <img className='social-icon' src={linkedin} alt='LinkedIn'></img>
                    </a>
                </div>
                <div className='socials-item'>
                    <a className='social-icon-a' href='https://github.com/Guilhermeccm'>
                        <img className='social-icon' src={github} alt='Github'></img>
                    </a>
                </div>
            </div>
            <div className='mouse-scroll'>
                <div className='mouse'></div>
            </div>
     </section>
  )
}

export default Intro