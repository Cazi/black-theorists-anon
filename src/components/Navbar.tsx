import React from 'react'
import '../styles/style-nav.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link className='text-link' to='/'>
          <p>Black Theorists Anonymous</p>
        </Link>
      </div>
      <div className="navbar-right">
        <Link className='about-button' to='/about'>Who We Are</Link>
        <div className="activities-button">What We Do</div>
        <div className="contact-button">Contact Us</div>
      </div>
    </div>
  )
}

export default Navbar