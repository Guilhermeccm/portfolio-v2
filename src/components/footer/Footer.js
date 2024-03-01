import React from 'react'
import "./Footer.css"
import linkedin from "../../assets/linkedin-ico.png"
import github from "../../assets/github-ico.png"

function Footer() {
  return (
    <footer className='footer-section'>
        <div className='main-container footer'>
            <div className='main-footer'>
                <div className='left-footer'>
                    <h5>
                        <span className='footer-name'>Guilherme Matos</span>
                        <p className='footer-message'>I appreciate the time you spent looking around :)</p>
                    </h5>
                </div>

                <div className='right-footer'>
                    <h5>
                        <span className='footer-name'>Socials</span>
                    </h5>
                    <div className='footer-icon'>
                        <a target='_blank' href='https://www.linkedin.com/in/guilherme-matos-795829226/'>
                                <img className='social-icon-footer' src={linkedin}/>
                        </a>
                        <a target='_blank' href='https://github.com/Guilhermeccm'>
                                <img className='social-icon-footer' src={github}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer