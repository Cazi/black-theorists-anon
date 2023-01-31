import React from 'react'
import '../styles.css'
import { motion } from "framer-motion";

const home = () => {
  return (
    <div className='home'>
      <div>
        <motion.img
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, y: -100, scale: 1 }}
          transition={{
            repeatType: "reverse",
            repeat: Infinity,
            repeatDelay: 1.5,
            duration: 0.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        />
      </div>
    </div>
  )
}

export default home