import React from 'react'
import { motion } from 'framer-motion'

// Media
import logo from '../media/huy.png'
import coverVideo from '../media/video.mp4'

// Styles
import '../styles/Loader.css'

function Loader() {
  const loaderVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 0,
      y: '100vh',
      transition: {
        delay: 3,
        duration: 3,
      },
    },
  }

  const logoVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  }
  return (
    <motion.div
      className='loader-wrapper'
      initial='hidden'
      animate='visible'
      variants={loaderVariant}
    >
      <div className='overlay'></div>
      <div className='loader-logo'>
        <motion.img 
          src={logo} 
          alt='huy logo' 
          initial='hidden'
          animate='visible'
          variants={logoVariant}
        />
      </div>
      <video className='video' src={coverVideo} autoPlay loop muted></video>
    </motion.div>
  )
}

export default Loader
