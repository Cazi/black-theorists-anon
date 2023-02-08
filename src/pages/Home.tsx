import React from 'react'
import '../styles.css'
import { motion } from "framer-motion";

const home = () => {
  return (
    <div className='home'>
      <div className="navbar">
        <div className="navbar-left">
          Black Theorists Anonymous
        </div>
        <div className="navbar-right">
          <div className="about"> Who We Are</div>
          <div className="activities">What We Do</div>
        </div>
      </div>
      {/* <div>
        <motion.button
          className="box"
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={{ opacity: 1, y: -100, scale: 1 }}
          
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.5 }}
        />
      </div> */}
    </div>
  )
}

export default home