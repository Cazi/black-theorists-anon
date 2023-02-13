import React from 'react'
import '../styles/style-home.css'
import { motion } from "framer-motion";
import Navbar from '../components/Navbar';

const home = () => {
  return (
    <div className='home'>
      <Navbar/>
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