import React from 'react'
import { motion } from 'framer-motion'
import '../styles/About.css'
import placeholder from '../media/placeholder.jpg'
import Line from '../components/Line'

function About() {
  const imageVariant = {
    hidden: { opacity: 0, transform: 'scale(0)' },
    visible: {
      opacity: 1,
      transform: 'scale(1)',
      transition: {
        duration: 1.5,
      },
    },
  }

  const aboutVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  }
  
  return (
    <div className='flex-column'>
      <motion.img
        className='artist-image'
        src={placeholder}
        alt='artist portrait'
        variants={imageVariant}
        initial='hidden'
        animate='visible'
      />
      <Line />
      <motion.p variants={aboutVariant} initial='hidden' animate='visible'>
        From Saigon, Vietnam, <strong>Huy</strong> is an artist set to change
        the standard. With his father's introduction to rock/metal at such a
        young age, Huy instantly knew he had found his passion. Knowing his
        calling in life was music, <strong>Huy</strong> decided to go head-on
        with his dream. With his ten years of experience producing, he is
        constantly evolving his direction with many genres ranging from Hip-Hop
        to Rock and everything in-between. As an artist, <strong>Huy</strong>{' '}
        consistently develops his sound, exploring various genres and techniques
        in his music. With all his courage, dedication, and soul, he is ready to
        showcase his music to the world, leaving all other options behind; There
        is no turning back for this genre-breaking artist.
      </motion.p>
    </div>
  )
}

export default About
