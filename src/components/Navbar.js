import React from 'react'
import '../styles/Navbar.css'

import { NavLink } from 'react-router-dom'

import logo from '../media/huy.png'

function Navbar() {
  return (
    <div className='nav-container'>
      <nav>
        <div className='logo-container'>
          <NavLink to='/'>
            <img src={logo} alt='huy logo' />
          </NavLink>
        </div>
        <div className='nav-items'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/About'>About</NavLink>
          <NavLink to='/Releases'>Releases</NavLink>
          <NavLink to='/Contact'>Contact</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
