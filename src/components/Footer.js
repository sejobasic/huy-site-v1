import React from 'react'
import { motion } from 'framer-motion'

// Styles
import '../styles/Footer.css'

// Components
import Line from './Line'

function Footer() {
  const footerVariant = {
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
    <footer>
      <div className='footer-container'>
        <Line />
        <motion.div
          className='footer-content'
          variants={footerVariant}
          initial='hidden'
          animate='visible'
        >
          <motion.a
            href='https://www.facebook.com/huyouthere'
            target='_blank'
            rel='noreferrer'
            variants={itemVariant}
          >
            Facebook
          </motion.a>
          <motion.a
            href='https://www.instagram.com/huyouthere/'
            target='_blank'
            rel='noreferrer'
            variants={itemVariant}
          >
            Instagram
          </motion.a>
          <motion.a
            href='https://twitter.com/huyouthere'
            target='_blank'
            rel='noreferrer'
            variants={itemVariant}
          >
            Twitter
          </motion.a>
          <motion.a
            href='https://www.tiktok.com/@huyouthere'
            target='_blank'
            rel='noreferrer'
            variants={itemVariant}
          >
            Tik Tok
          </motion.a>
          <motion.a
            href='https://open.spotify.com/artist/1NTMbL31XUN7LvSUq8VjMc?si=gq8D96WPSkSYVSfT9BK7iw'
            target='_blank'
            rel='noreferrer'
            variants={itemVariant}
          >
            Spotify
          </motion.a>
          <motion.a
            href='https://music.apple.com/us/artist/huy/450736253'
            target='_blank'
            rel='noreferrer'
            variants={itemVariant}
          >
            Apple Music
          </motion.a>
        </motion.div>
        <Line />
      </div>
    </footer>
  )
}

export default Footer
