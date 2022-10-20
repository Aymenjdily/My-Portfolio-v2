import React from 'react'
import { Parallax, Background } from 'react-parallax'

const Header = () => {
  return (
    <>
      <Parallax className='md:h-[100vh] h-[50vh]' strength={500}>
        <Background className='md:h-[100vh] h-[50vh] flex justify-center items-center '>
          <h1 className='lg:text-[400px] md:text-[250px] sm:text-[180px] text-[100px] font-bold text-black'>Hello<span className='text-green'>,</span> </h1>
        </Background>
      </Parallax>
    </>
  )
}

export default Header
