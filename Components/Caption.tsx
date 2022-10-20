import React from 'react'
import { Parallax, Background } from 'react-parallax'
import { motion } from 'framer-motion';

const Caption = () => {
  return (
    <>
     <Parallax className='md:h-[100vh] h-[50vh]' strength={500}>
        <Background className='md:h-[100vh] h-[50vh] flex justify-center items-center '>
          <h1 className='lg:text-[250px] md:text-[250px] sm:text-[180px] text-[70px] font-bold text-black'>Frontend</h1>
        </Background>
      </Parallax>
    </>
  )
}

export default Caption
