import React from 'react'
import '../styles/style-home.css'
import { motion } from "framer-motion";
import Navbar from '../components/Navbar';

const home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='home-image-spread'>
        <img className='home-image-galaxy' src={require('./images/galaxy.jpg')} alt="" />
        <img className='home-image-afroufo' src={require('./images/afroufo.png')} alt="" />
      </div>
      <p className='butler-quote'>"All that you touch, You Change. All that you Change, Changes you.
        The only lasting truth is Change. God is Change." - Octavia Butler</p>
    </div>
  )
}

export default home