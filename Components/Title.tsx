import React from 'react'
import { Background, Parallax } from 'react-parallax'
import { motion } from 'framer-motion';

const Title = () => {
  return (
    <Parallax className='h-[100vh] bg-black flex items-center justify-center' blur={{ min: -15, max: 15 }} strength={300}>
        <Background className='h-[100vh] flex flex-row gap-5 text-center items-center justify-center font-Quicksand'>
            <motion.p 
                whileInView={{ x:[-300,0] }}
                transition={{ duration: 1 }}
                className='lg:text-[130px] md:text-[70px] sm:text-[50px] text-[40px] capitalize font-bold text-white'
            >
                here are some of my projects
            </motion.p>
        </Background>
    </Parallax>
  )
}

export default Title
