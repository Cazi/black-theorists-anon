import { motion } from 'framer-motion'
import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/style-about.css'
const About = () => {
  return (
    <div className='about'>
      <Navbar />
      <h1 className='about-head'>About Us</h1>
      <div className='personas'>

        <motion.button
          className="box"
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={{ opacity: 1, y: -100, scale: 1 }}

          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.5 }}
        />

        <motion.button
          className="box"
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={{ opacity: 1, y: -100, scale: 1 }}

          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.5 }}
        />
        <motion.button
          className="box"
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={{ opacity: 1, y: -100, scale: 1 }}

          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.5 }}
        />
      </div >
    </div >
  )
}

export default About