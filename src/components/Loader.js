import React from 'react'
import { motion } from 'framer-motion'

import logo from '../media/huy.png'
import coverVideo from '../media/video.mp4'

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
  return (
    <motion.div
      className='loader-wrapper'
      initial='hidden'
      animate='visible'
      variants={loaderVariant}
    >
      <div className='overlay'></div>
      <div className='loader-logo'>
        <img src={logo} alt='huy logo' />
      </div>
      <video className='video' src={coverVideo} autoPlay loop muted></video>
    </motion.div>
  )
}

export default Loader
