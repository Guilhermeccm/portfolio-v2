import React, { useEffect, useState } from 'react'
import "./Experience.css"
import { experienceItems } from '../../utils/experienceItems'

function Experience({active, setActive}) {

    const [selectedExperience, setSelectedExperience] = useState();

      // Function to handle selecting an experience
    const handleExperienceSelection = (id) => {
        setSelectedExperience(experienceItems.find(item => item.id === id));
        setActive(id);
    };

    // Set the initial selected experience when component mounts
    useEffect(() => {
        setSelectedExperience(experienceItems[0]); // Select the first item
        setActive(experienceItems[0].id); // Set active state to the first item's id
    }, []); // Empty dependency array to run this effect only once on mount

  return (
    <section id='experience' className='experience-section'>
        <div className='main-container'>
                <h2 className='heading-2'>
                    <span className='heading-sec-main'>Work Experience</span>
                    <div className='inner'>
                        <div className='experience-list'>
                            <ul className='experience-items'>
                                {experienceItems.map((item) => {
                                    return<li setActive key={item.id} onClick={() => handleExperienceSelection(item.id)} className={active === item.id ? "active" : ""}>    
                                    <span className='work-title'>{item.title}</span>
                                    </li>
                                })}
                            </ul>
                        </div>
                        <div className='experience-details'>
                            {selectedExperience && (
                            <div>
                                <h3>
                                    <span>{selectedExperience.role}</span>
                                    <span className='company'>
                                        @
                                        <a target='_blank' href={selectedExperience.link} className='inline-link'>{selectedExperience.title}</a>
                                    </span>
                                </h3>
                                <p className='date'>{selectedExperience.date}</p>
                                <ul className='experience-ul'>
                                    <li className='description'>{selectedExperience.description1}</li>
                                    <li className='description'>{selectedExperience.description2}</li>
                                </ul>
                            </div>
                            )}

                        </div>
                    </div>
                </h2>
        </div>
    </section>
  )
}

export default Experience