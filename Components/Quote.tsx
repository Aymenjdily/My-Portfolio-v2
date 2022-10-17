import React from 'react'
import { motion } from 'framer-motion'
import { Parallax, Background } from 'react-parallax'

const Quote = () => {
  return (
    <>
        <Parallax className='h-[100vh] w-full bg-green flex items-center justify-center' blur={{ min: -15, max: 15 }} strength={300}>
            <Background className='flex capitalize w-full font-Quicksand '>
                <motion.h1
                        whileInView={{ x:[-200,0] }}
                        transition={{ duration: 1.5 }}
                        className='lg:text-[120px] md:text-[90px] sm:text-[70px] text-[35px] w-full font-bold text-black text-center uppercase'
                    >
                        Nice to meet you !
                </motion.h1>
            </Background>
        </Parallax>
    </>
  )
}

export default Quote