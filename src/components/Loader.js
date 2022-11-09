import React from 'react'
import { motion } from 'framer-motion'

import logo from '../media/huy.png'
import coverVideo from '../media/video.mp4'

import '../styles/Loader.css'

function Loader() {
  return (
    <div className='loader-wrapper'>
      <div className='overlay'></div>
      <div className='loader-logo'>
        <img src={logo} alt='huy logo' />
      </div>
      <video className='video' src={coverVideo} autoPlay loop muted></video>
    </div>
  )
}

export default Loader
