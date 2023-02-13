import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <p>Black Theorists Anonymous</p>
      </div>
      <div className="navbar-right">
        <div className="about">Who We Are</div>
        <div className="activities">What We Do</div>
        <div className="contact">Contact Us</div>
      </div>
    </div>
  )
}

export default Navbar