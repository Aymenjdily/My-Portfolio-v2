import React from 'react'
import { motion } from 'framer-motion'
import Contact from '../Container/Contact/Contact'
import { container, item } from '../Animation/Animation'
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

const contact = () => {
  return (
    <motion.div
        initial={{y:"100%"}}
        animate={{y:"0%"}}
        transition={{duration:0.75, ease:"easeOut"}}
        exit={{opacity:1}}
        className='absolute md:h-[100vh] top-0 left-0 w-full bg-green lg:px-48 px-12'
    >
        <main>
            <div className='md:mt-52 mt-72 mb-52 p-1 overflow-hidden flex md:flex-row flex-col md:gap-0 gap-10 w-full justify-between'>
                <div className='flex-1'>
                    <h1 className='md:text-7xl text-5xl font-extrabold'>
                        Find Me : 
                    </h1>
                    <div className='lg:text-6xl text-2xl underline mt-12'>
                        <motion.ul variants={container} initial="hidden" animate="show" className='flex flex-col gap-5'>
                            <div className='overflow-hidden'>
                                <motion.li variants={item} className='pb-2 flex gap-3 items-center'>
                                    <FaInstagram/>
                                    Instagram
                                </motion.li>
                            </div>
                            <div className='overflow-hidden'>
                                <motion.li variants={item} className='pb-2 flex gap-3 items-center'>
                                    <FaLinkedin/>
                                    Linkedin
                                </motion.li>
                            </div>
                            <div className='overflow-hidden'>
                                <motion.li variants={item} className='pb-2 flex gap-3 items-center'>
                                    <FaTwitter/>
                                    Twitter
                                </motion.li>
                            </div>
                        </motion.ul>
                    </div>
                </div>
                <motion.div
                    animate={{y:0}}
                    initial={{y:"100%"}}
                    transition={{delay:0.5,duration:0.5}}
                    className="md:w-[500px]"
                >
                    <Contact/>
                </motion.div>
            </div>
        </main>
    </motion.div>
  )
}

export default contact