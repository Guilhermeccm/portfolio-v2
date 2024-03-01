import React from 'react'
import "./Contact.css"
import {useForm, ValidationError} from "@formspree/react"

function Contact() {

    const [state, handleSubmit] = useForm("mnqkdbdp")
    if (state.succeeded) {
        return <p>Thank you for the message!</p>
    }


  return (
    <section className='contact-section'>
        <div className='main-container'>
            <h2 className='heading-2'>
                <span className='heading-sec-main'>Get In Touch</span>
            </h2>
            <div className='form-container'>
                <form onSubmit={handleSubmit} method='POST'>
                    <div className='form-field'>
                        <label htmlFor='name' className='form-label'>Name</label>
                        <input className='form-input' placeholder='Enter Your Name' type='text' name='name' required/>
                        <ValidationError prefix='Name' field='name' errors={state.errors}/>
                    </div>
                    <div className='form-field'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input className='form-input' placeholder='Enter your Email' type='email' name='email' required/>
                        <ValidationError prefix='Email' field='email' errors={state.errors}/>
                    </div>
                    <div className='form-field'>
                        <label className='form-label'>Message</label>
                        <textarea className='form-input' placeholder='Enter Your Message' name='message' required/>
                        <ValidationError prefix='Message' field='message' errors={state.errors}/>
                    </div>
                    <button type='submit' disabled={state.submitting} className='button submit'>Submit</button>
                </form>
            </div>
        </div>

    </section>
  )
}

export default Contact