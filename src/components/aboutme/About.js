import React from 'react'
import "./About.css"


function About() {
  return (
    <section id='about' className='about-section'>
        <div  className='main-container'>
            <h2 className='heading-2'>
                 <span className='heading-sec-main'>About Me</span>
                 <span className='heading-sec-sub'>I'm a BE Computer Science and Engineering finalist @ NOVA | School Of Science And Technology</span>
            </h2>
            <div className='about-content'>
                <div className='about-me-left'>
                    <h3 className='about-me-title'>Get to know me!</h3>
                    <div className='about-me-text'>
                        <p className='about-me-text-para'>Hey! <strong>Guilherme Matos</strong> here and I'm a Full-Stack Web Developer located in Lisbon. 
                        I've built and collaborated with talented people 
                        to create digital products for both business and consumer use.
                        </p>
                        <p className='about-me-text-para'>
                        I'm a bit of a tech and inovation junky. Over the years, I've used hundreds 
                        of web and mobile apps in different industries. Feel free to contact me here.
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
                </div>
            </div>
          
        </div>
    </section>
  )
}

export default About;