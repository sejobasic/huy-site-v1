import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

// Media
import logo from '../media/huy.png'

// Styles
import '../styles/Navbar.css'

function Navbar() {
  const navVariant = {
    hidden: { opacity: 0, y: '-100%' },
    visible: {
      opacity: 1,
      y: '0%',
      transition: {
        duration: 1.5,
      },
    },
  }

  return (
    <div className='nav-container'>
      <motion.nav initial='hidden' animate='visible' variants={navVariant}>
        <div className='logo-container'>
          <NavLink to='/'>
            <img className='logo' src={logo} alt='huy logo' />
          </NavLink>
        </div>
        <div className='nav-items'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/About'>About</NavLink>
          <NavLink to='/Releases'>Releases</NavLink>
          <NavLink to='/Contact'>Contact</NavLink>
        </div>
      </motion.nav>
    </div>
  )
}

export default Navbar
