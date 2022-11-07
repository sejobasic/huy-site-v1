import React from 'react'
import { motion } from 'framer-motion'

function Line() {
  const lineVariant = {
    hidden: {
      width: '0',
      opacity: 0,
    },
    visible: {
      width: '100%',
      opacity: 1,
      transition: { duration: 2 },
    },
  }
  return (
    <motion.div
      className='line'
      variants={lineVariant}
      initial='hidden'
      animate='visible'
      exit='hidden'
    ></motion.div>
  )
}

export default Line
