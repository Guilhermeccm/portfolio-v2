import React, { useState } from 'react'
import computer from "../../assets/project-mockup-example.jpeg"
import "./Projects.css"
import project1 from "../../assets/Financial-Tracker.png"

function Projects() {
    const projectName1 = "Financial Tracker"
    const projectName2 = "Project 2";
    const projectName3 = "Project 3";

    const projectsData = [
        {
            name:  "Financial Tracker",
            description: "This is the first Full-Stack project I've built using the framework React. It helped me understand the basics of it and gave me an idea on how to build some really cool stuff for the future.",
            image: computer
        },
        {
            name: "Friend's Portfolio",
            description: "This is a description",
            image: computer
        },
        {
            name: "Friend's Portfolio",
            description: "This is a second description",
            image: computer
        }
    ]

    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [direction, setDirection] = useState("")

    const goToNextProject = () => {
        setDirection("next")
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }

    const goToPreviousProject = () => {
        setDirection("prev")
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
                        <a className='button'>Case Study</a>
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
