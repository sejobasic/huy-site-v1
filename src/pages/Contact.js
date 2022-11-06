import React from 'react'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='flex-column' >
      <form className='contact-form'>
        <input type='text' placeholder='Enter your name' />
        <input type='email' placeholder='Enter your email' />
        <textarea name="message" placeholder='Message:'></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact