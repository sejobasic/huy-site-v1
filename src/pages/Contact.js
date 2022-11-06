import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import '../styles/Contact.css'

function Contact() {
  const [showModal, setShowModal] = useState(false)
  const form = useRef()

  const backdropVariant = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  const modalVariant = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: '30vh',
      opacity: 1,
      transition: { delay: 0.5, duration: 0.7 },
    },
  }

  const submitEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_mrse0ga',
        'template_zp4m1sk',
        form.current,
        'pN2cyh7Cb0mr1pIOS'
      )
      .then(
        (result) => {
          setShowModal(true)
          setTimeout(() => {
            setShowModal(false)
          }, 4000)
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <>
      <div className='flex-column'>
        <h2>Contact Us</h2>
        <form className='contact-form' ref={form} onSubmit={submitEmail}>
          <input type='text' name='user_name' placeholder='Enter your name' />
          <input
            type='email'
            name='user_email'
            placeholder='Enter your email'
          />
          <input type='text' name='user_subject' placeholder='Subject:' />
          <textarea name='message' placeholder='Message:'></textarea>
          <button type='submit' value='Send'>
            Submit
          </button>
        </form>
      </div>

      <div className='modal-cont'>
        <AnimatePresence exitBeforeEnter>
          {showModal && (
            <motion.div
              className='fade-bg'
              variants={backdropVariant}
              initial='hidden'
              animate='visible'
              exit='hidden'
            >
              <motion.div className='modal' variants={modalVariant}>
                <button onClick={() => setShowModal(false)}>X</button>
                <h5>MESSAGE RECEIVED!</h5>
                <p>
                  Thank you for your interest, We will get back to you as soon
                  as possible.
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Contact
