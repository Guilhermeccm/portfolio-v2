import React from 'react'
import computer from "../../assets/project-mockup-example.jpeg"
import "./Projects.css"

function projects() {
    const projectName1 = "Financial Tracker"
    const projectName2 = "Project 2";
    const projectName3 = "Project 3";
  
  return (
    <section className='projects-section'>
        <div className='main-container'>
            <h2 className='heading-2-projects'>
                <span className='heading-sec-main'>Projects</span>
                <span className='heading-sec-sub'>These are the projects I'd like you to see</span>
            </h2>
            <div className='projects-content'>
                <div className='projects-row'>
                    <div className='project-row-image'>
                        <img src={computer} className='laptop-img' alt='Project Screenshot' loading='lazy'/>
                    </div>
                    <div className='projects-row-content'>
                        <h3 className='projects-row-content-title'>{projectName1}</h3>
                        <p className='projects-row-content-description'>
                        This is the first <strong>Full-Stack</strong> project I've built using the framework <strong>React</strong>.
                        It helped me understand the basics of it and gave me an idea on how to build some really 
                        cool stuff for the future.
                        </p>
                        <a className='button'>Case Study</a>
                    </div>
                </div>

                <div className='projects-row'>
                    <div className='project-row-image'>
                        <img src={computer} className='laptop-img' alt='Project Screenshot' loading='lazy'/>
                    </div>
                    <div className='project-row-content'>
                        <h3 className='projects-row-content-title'>{projectName2}</h3>
                        <p className='projects-row-content-description'>
                        This is the first <strong>Full-Stack</strong> project I've built using the framework <strong>React</strong>.
                        It helped me understand the basics of it and gave me an idea on how to build some really 
                        cool stuff for the future.
                        </p>
                        <a className='button'>Case Study</a>
                    </div>
                </div>

                <div className='projects-row'>
                    <div className='project-row-image'>
                        <img src={computer} className='laptop-img' alt='Project Screenshot' loading='lazy'/>
                    </div>
                    <div className='project-row-content'>
                        <h3 className='projects-row-content-title'>{projectName3}</h3>
                        <p className='projects-row-content-description'>
                        This is the first <strong>Full-Stack</strong> project I've built using the framework <strong>React</strong>.
                        It helped me understand the basics of it and gave me an idea on how to build some really 
                        cool stuff for the future.
                        </p>
                        <a className='button'>Case Study</a>
                    </div>
                </div>
            </div>



        </div>
    </section>
  )
}

export default projects
