import React from 'react'
import { motion } from 'framer-motion'
import { Parallax, Background } from 'react-parallax'

const Quote = () => {
  return (
    <>
      <Parallax className='md:h-[100vh] h-[50vh] w-full bg-green flex items-center justify-center text-center' >
        <div className='md:h-[100vh] h-[50vh] w-full flex flex-col items-center justify-center md:gap-10'>
          <h1 className='lg:text-[150px] md:text-[130px] sm:text-[130px] text-[50px] font-bold text-black'>Nice to</h1>
          <h1 className='lg:text-[150px] md:text-[130px] sm:text-[130px] text-[50px] font-bold text-black'>meet You !</h1>
        </div>
      </Parallax>
    </>
  )
}

export default Quote