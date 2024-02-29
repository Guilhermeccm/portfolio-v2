import React, { useState } from 'react'
import "./Experience.css"
import { experienceItems } from '../../utils/experienceItems'

function Experience({active, setActive}) {


  return (
    <section className='experience-section'>
        <div className='main-container'>
            <h2 className='heading-2'>
                <span className='heading-sec-main'>Work Experience</span>
                <div className='experience-list'>
                    <ul className='experience-items'>
                        {experienceItems.map((item) => {
                            return <li key={item.id} onClick={() => setActive(item.id)} className={active === item.id ? "active" : ""}>
                               <span>{item.title}</span>
                               <span>{item.description}</span>
                            </li>
                        })}
                    </ul>
                </div>
            </h2>
        </div>
    </section>
  )
}

export default Experience