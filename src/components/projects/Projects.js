import React, { useState } from 'react'
import computer from "../../assets/project-mockup-example.jpeg"
import rafastuff from "../../assets/Projeto_RafaStuff.png"
import "./Projects.css"

function Projects() {

    const projectsData = [
        {
            name:  "Financial Tracker",
            description: "This is the first Full-Stack project I've built using the framework React. It helped me understand the basics of it and gave me an idea on how to build some really cool stuff for the future.",
            image: computer,
            link: "https://github.com/Guilhermeccm/financial-tracker"
        },
        {
            name: "Rafael's Portfolio",
            description: "This is my friend Rafael's portfolio. He is a UX/UI Designer and designed the website entirely. My job was to convert the figma design to something real and useful so he could show his future clients.",
            image: rafastuff,
            link: "https://github.com/Guilhermeccm/Rafael-Portfolio"
        },
        {
            name: "My Portfolio",
            description: "This portfolio website is also considered one my projects. Using React I was able to create things that HTML and CSS couldn't dream of.",
            image: computer,
            link: "https://github.com/Guilhermeccm/portfolio-v2"
        }
    ]

    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const goToNextProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }

    const goToPreviousProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length)
    }

    const currentProject = projectsData[currentProjectIndex]
  
  return (
    <section id='projects'  className='projects-section'>
        <div className='main-container'>
            <h2 className='heading-2-projects'>
                <span className='heading-sec-main'>Projects</span>
            </h2>
            <div className="projects-content">
                <div className="projects-row">
                <button className='arrow-button' onClick={goToPreviousProject}>{"<"}</button>
                    <div className='project-row-image'>
                        <img src={currentProject.image} className='laptop-img' alt='Project Screenshot' loading='lazy'/>
                    </div>
                    <div className='projects-row-content'>
                        <h3 className='projects-row-content-title'>{currentProject.name}</h3>
                        <p className='projects-row-content-description'>{currentProject.description}</p>
                        <a href={currentProject.link} className='button' target='_blank' rel='noreferrer'>Case Study</a>
                    </div>
                    <button className='arrow-button' onClick={goToNextProject}>{">"}</button>
                </div>
            </div>
            <div className='projects-indicators'>
                {projectsData.map((project, index) => (
                    <div key={index}
                    className={`projects-indicator ${index === currentProjectIndex ? 'active' : ""}`}
                    onClick={() => setCurrentProjectIndex(index)}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Projects