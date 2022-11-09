import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Releases.css'

function Releases() {
  const releasesVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
  }

  const itemVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  }
  return (
    <>
      <motion.div
        className='flex-column'
        variants={releasesVariant}
        initial='hidden'
        animate='visible'
      >
        <motion.iframe
          src='https://open.spotify.com/embed/track/5iGVtn4ZJVCmwXn3Xj8TpF?utm_source=generator&theme=0'
          title='Spotify'
          width='80%'
          height='200'
          frameBorder='0'
          allowfullscreen=''
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          variants={itemVariant}
        ></motion.iframe>
        <motion.iframe
          src='https://open.spotify.com/embed/track/1a0Om9pOdvcNmX00KoVJ6Z?utm_source=generator&theme=0'
          title='Spotify'
          width='80%'
          height='200'
          frameBorder='0'
          allowfullscreen=''
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          variants={itemVariant}
        ></motion.iframe>
        <motion.iframe
          src='https://open.spotify.com/embed/track/2OYi0cHqHDiTbdGHe5gccb?utm_source=generator&theme=0'
          title='Spotify'
          width='80%'
          height='200'
          frameBorder='0'
          allowfullscreen=''
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          variants={itemVariant}
        ></motion.iframe>
      </motion.div>
    </>
  )
}

export default Releases
