import React from 'react'
import { Parallax, Background } from 'react-parallax'
import { motion } from 'framer-motion'

const Name = () => {
  return (
    <>
      <Parallax className='md:h-[100vh] h-[50vh] w-full bg-black flex items-center justify-center' >
        <Background className='md:h-[100vh] h-[50vh] w-full flex md:flex-row flex-col items-center justify-center md:gap-10'>
          <h1 className='lg:text-[250px] md:text-[250px] sm:text-[130px] text-[80px] font-bold text-white'>I'm</h1>
          <h1 className='lg:text-[250px] md:text-[250px] sm:text-[130px] text-[80px] font-bold underline underline-offset-10 text-white decoration-green'>Aymen</h1>
        </Background>
      </Parallax>
    </>
  )
}

export default Name
