import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <section id='contact' className='contact-section'>
        <div  className='main-container'>
            <h2 className='heading-2'>
                <span className='heading-sec-main'>Get In Touch</span>
            </h2>
            <div className='form-container'>
                <form action='https://formspree.io/f/mnqkdbdp' method='POST'>
                    <div className='form-field'>
                        <label htmlFor='name' className='form-label'>Name</label>
                        <input className='form-input' placeholder='Enter Your Name' type='text' name='name' required/>
                    </div>
                    <div className='form-field'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input className='form-input' placeholder='Enter your Email' type='email' name='email' required/>
                    </div>
                    <div className='form-field'>
                        <label className='form-label'>Message</label>
                        <textarea className='form-input' placeholder='Enter Your Message' name='message' required/>
                    </div>
                    <button type='submit'className='button submit'>Submit</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact