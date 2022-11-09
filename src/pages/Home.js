import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Home.css'
import Line from '../components/Line'
import Footer from '../components/Footer'

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
    <>
      <div className='home-container'>
        <div className='youtube-wrapper'>
          <motion.iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/NSsbmdNAEFY'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
            variants={videoVariant}
            initial='hidden'
            animate='visible'
          ></motion.iframe>
        </div>
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
      <Footer />
    </>
  )
}

export default Home
