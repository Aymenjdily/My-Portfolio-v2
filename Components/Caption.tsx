import React from 'react'
import { Parallax, Background } from 'react-parallax'
import { motion } from 'framer-motion';

const Caption = () => {
  return (
    <>
      <Parallax className='h-[100vh] bg-white flex items-center justify-center w-full' blur={{ min: -15, max: 15 }} strength={300}>
        <Background className='h-[100vh] flex flex-col gap-5 text-center capitalize w-full items-center justify-center font-Quicksand'>
            <motion.div
                whileInView={{ x:[300,0] }}
                transition={{ duration: 1 }}
                className="w-full flex flex-row gap-5"
            >
                <h1 className='lg:text-[130px] md:text-[90px] sm:text-[70px] text-[35px] font-bold text-black px-5 bg-green'>frontend </h1>
                <h1 className='lg:text-[130px] md:text-[90px] sm:text-[70px] text-[35px] font-bold text-black'>developer</h1>
            </motion.div>
            <motion.div
                whileInView={{ x:[300,0] }}
                transition={{ duration: 1.5 }}
                className="w-full flex flex-row gap-5 text-center items-center justify-center"
            >
                <h1 className='lg:text-[130px] md:text-[90px] sm:text-[70px] text-[35px] font-bold text-black'>and <span className='bg-green px-5'>UI</span></h1>
                <h1 className='lg:text-[130px] md:text-[90px] sm:text-[70px] text-[35px] font-bold text-black'>designer</h1>
            </motion.div>
        </Background>
      </Parallax>
    </>
  )
}

export default Caption
