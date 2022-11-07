import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Home.css'
import Line from '../components/Line'

function Home() {
  const videoVariant = {
    hidden: {
      x: '-100vw',
      opacity: 0,
    },
    visible: {
      x: '0',
      opacity: 1,
      transition: { duration: 2 },
    },
  }

  const spotifyVariant = {
    hidden: {
      x: '100vw',
      opacity: 0,
    },
    visible: {
      x: '0',
      opacity: 1,
      transition: { duration: 2 },
    },
  }

  return (
    <div className='home-container'>
      <motion.iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/4nyld2SqleU'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
        variants={videoVariant}
        initial='hidden'
        animate='visible'
      ></motion.iframe>

      <Line />
        <motion.iframe
          src='https://open.spotify.com/embed/track/5iGVtn4ZJVCmwXn3Xj8TpF?utm_source=generator&theme=0'
          title='Spotify'
          width='70%'
          height='300'
          frameBorder='0'
          allowfullscreen=''
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          variants={spotifyVariant}
          initial='hidden'
          animate='visible'
        ></motion.iframe>
    </div>
  )
}

export default Home
