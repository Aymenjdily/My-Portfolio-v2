import React from 'react'
import { Background, Parallax } from 'react-parallax'
import { motion } from 'framer-motion';

const Title = () => {
  return (
    <Parallax className='md:h-[100vh] h-[50vh] w-full bg-white flex items-center justify-center text-center' >
      <div className='md:h-[100vh] h-[50vh] w-full flex flex-col items-center justify-center md:gap-10'>
        <h1 className='lg:text-[150px] md:text-[130px] sm:text-[130px] text-[50px] font-bold text-black'>Here some of</h1>
        <h1 className='lg:text-[150px] md:text-[130px] sm:text-[130px] text-[50px] font-bold text-black'>my projects</h1>
      </div>
    </Parallax>
  )
}

export default Title
