import React from 'react'
import "./About.css"


function About() {
  return (
    <section id='about' className='about-section'>
        <div  className='main-container'>
            <h2 className='heading-2'>
                 <span className='heading-sec-main'>About Me</span>
            </h2>
            <div className='about-content'>
                <div className='about-me-left'>
                    <h3 className='about-me-title'>Get to know me!</h3>
                    <div className='about-me-text'>
                        <p className='about-me-text-para'>Hey! <strong>Guilherme Matos</strong> here and I'm an aspiring Full-Stack Web Developer located in Lisbon. 
                            I'm a BE <strong>Computer Science and Engineering</strong> finalist @ NOVA | School Of Science And Technology.
                        </p>
                        <p className='about-me-text-para'>
                            I love how technology has evolved and how fast paced this industry is. It allows me to push my self and better myself in a way no other 
                            industry could... except maybe Investment Banking ;)
                        </p>
                    </div>
                    <a href='#contact' className='button about-me-button'>Get In Touch!</a>
                </div>
                <div className='about-me-right'>
                    <h3 className='about-me-title'>Tech Stack</h3>
                    <div className='skills'>
                        <div className='skills-skill'>Java</div>
                        <div className='skills-skill'>Javascript</div>
                        <div className='skills-skill'>HTML</div>
                        <div className='skills-skill'>CSS</div>
                        <div className='skills-skill'>React.js</div>
                        <div className='skills-skill'>SQL</div>
                        <div className='skills-skill'>C</div>
                    </div>
                    <h3 className='about-me-title'>Other Skills</h3>
                    <div className='skills'>
                        <div className='skills-skill'>Scrum</div>
                        <div className='skills-skill'>Maven</div>
                        <div className='skills-skill'>Tomcat</div>
                        <div className='skills-skill'>Google Cloud</div>
                        <div className='skills-skill'>UX/UI</div>
                        <div className='skills-skill'>Figma</div>
                    </div>
                </div>
                
            </div>
          
        </div>
    </section>
  )
}

export default About;