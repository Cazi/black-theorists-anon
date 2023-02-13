import React from 'react'
import '../styles/style-home.css'
import { motion } from "framer-motion";
import Navbar from '../components/Navbar';

const home = () => {
  return (
    <div className='home'>
      <Navbar/>
    </div>
  )
}

export default home