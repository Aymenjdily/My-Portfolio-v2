import React from 'react'
import { Parallax, Background } from 'react-parallax'

const Caption2 = () => {
  return (
    <>
        <Parallax className='md:h-[100vh] h-[50vh] w-full bg-black flex items-center justify-center' >
            <Background className='md:h-[100vh] h-[50vh] w-full flex md:flex-row flex-col items-center justify-center md:gap-10'>
            <h1 className='lg:text-[250px] md:text-[250px] sm:text-[130px] text-[70px] font-bold text-white'>UI</h1>
            <h1 className='lg:text-[100px] md:text-[250px] sm:text-[130px] text-[50px] font-bold bg-green px-5 text-black'>Developer</h1>
            </Background>
        </Parallax>
    </>
  )
}

export default Caption2