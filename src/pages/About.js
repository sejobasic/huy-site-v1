import React from 'react'
import { motion } from 'framer-motion'
import '../styles/About.css'
import placeholder from '../media/placeholder.jpg'
import Line from '../components/Line'

function About() {
  return (
    <div className='flex-column'>
      <img className='artist-image' src={placeholder} alt='artist portrait' />
      <Line />
      <p>
        From Saigon, Vietnam, Huy is an artist set to change the standard. With
        his father's introduction to rock/metal at such a young age, Huy
        instantly knew he had found his passion. Knowing his calling in life was
        music, Huy decided to go head-on with his dream. With his ten years of
        experience producing, he is constantly evolving his direction with many
        genres ranging from Hip-Hop to Rock and everything in-between. As an
        artist, Huy consistently develops his sound, exploring various genres
        and techniques in his music. With all his courage, dedication, and soul,
        he is ready to showcase his music to the world, leaving all other
        options behind; There is no turning back for this genre-breaking artist.
      </p>
    </div>
  )
}

export default About
