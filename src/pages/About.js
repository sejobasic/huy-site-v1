import React from 'react'
import { motion } from 'framer-motion'
import ImageGallery from 'react-image-gallery'

// Media
import imgOne from '../media/img1.jpeg'
import imgTwo from '../media/img2.jpeg'
import imgThree from '../media/img3.jpeg'

// Components
import Line from '../components/Line'

// Styles
import '../styles/About.css'

function About() {
  const images = [
    {
      original: imgThree,
      thumbnail: imgThree,
    },
    {
      original: imgTwo,
      thumbnail: imgTwo,
    },
    {
      original: imgOne,
      thumbnail: imgOne,
    },
  ]

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
    <div className='about-wrapper flex-column'>
      <motion.span variants={aboutVariant} initial='hidden' animate='visible'>
        <ImageGallery
          items={images}
          autoPlay={true}
          slideDuration={500}
          slideInterval={8000}
          // showNav={true}
          showThumbnails={false}
          // showFullscreenButton={false}
          // showPlayButton={true}
        />
      </motion.span>
      <Line />
      <motion.p
        className='about-text'
        variants={aboutVariant}
        initial='hidden'
        animate='visible'
      >
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
