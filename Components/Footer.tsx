import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='h-[100vh] font-Quicksand gap-8 bg-black items-center flex flex-col justify-center'>
        
        <h1 className='font-bold md:text-[120px] text-[40px] text-green capitalize'>
            find me
        </h1>
        <div className='flex flex-wrap gap-10 md:text-[150px] text-[50px] items-center justify-center text-white'>
          <Link
            href='https://github.com/Aymenjdily'
            target="_blank"
          >
            <FaGithub className='cursor-pointer hover:scale-110 hover:duration-150 duration-150'/>
          </Link>

          <Link
            href='https://www.linkedin.com/in/aymenjdily/'
            target="_blank"
          >
            <FaLinkedin className='cursor-pointer hover:scale-110 hover:duration-150 duration-150'/>
          </Link>
          
          <Link
            href='https://www.instagram.com/aymen_jdily/'
            target="_blank"
          >
            <FaInstagram className='cursor-pointer hover:scale-110 hover:duration-150 duration-150'/>
          </Link>
        </div>
    </div>
  )
}

export default Footer