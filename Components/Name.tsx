import React from 'react'
import { Parallax, Background } from 'react-parallax'
import { motion } from 'framer-motion'

const Name = () => {
  return (
    <>
      <Parallax className='h-[100vh] bg-black flex items-center justify-center' blur={{ min: -15, max: 15 }} strength={300}>
      <Background className='h-[100vh] flex flex-row gap-10 text-center items-center justify-center font-Quicksand'>
          <motion.div
            whileInView={{ x:[-300,0] }}
            transition={{ duration: 1 }}
            className="w-full flex flex-row gap-5"
          >
            <h1 className='lg:text-[200px] md:text-[150px] sm:text-[100px] text-[60px] font-bold text-white'>I'm</h1>
            <h1 className='lg:text-[200px] md:text-[150px] sm:text-[100px] text-[60px] font-bold text-green'>Aymen</h1>
          </motion.div>
        </Background>
      </Parallax>
    </>
  )
}

export default Name
