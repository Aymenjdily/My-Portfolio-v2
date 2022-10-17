import React from 'react'
import { Parallax, Background } from 'react-parallax'

const Header = () => {
  return (
    <>
      <Parallax className='h-[100vh] bg-white flex items-center justify-center' blur={{ min: -15, max: 15 }} strength={300}>
        <Background className='h-[100vh] flex flex-row gap-5 text-center items-center justify-center font-Quicksand'>
          <h1 className='lg:text-[200px] md:text-[150px] sm:text-[100px] text-[60px] font-bold text-black'>Hi<span className='text-green'>,</span> </h1>
          <h1 className='lg:text-[200px] md:text-[150px] sm:text-[100px] text-[60px] font-bold text-black'>There</h1>
        </Background>
      </Parallax>
    </>
  )
}

export default Header
