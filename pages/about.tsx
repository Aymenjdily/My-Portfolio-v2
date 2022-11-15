import React from 'react'
import { motion } from 'framer-motion'
import { container, item } from '../Animation/Animation'
import { FaReact, FaFigma } from 'react-icons/fa'
import { SiNextdotjs, SiJavascript, SiTypescript, SiSass, SiRedux, SiHtml5, SiCss3 } from 'react-icons/si'
import { IoLogoVue } from 'react-icons/io5'

const about = () => {
  return (
    <motion.div
        initial={{y:"100%"}}
        animate={{y:"0%"}}
        transition={{duration:0.75, ease:"easeOut"}}
        exit={{opacity:1}}
        className='absolute md:h-full top-0 left-0 w-full bg-green lg:px-48 px-16 '
    >
        <main >
            <div className='mt-96 mb-52 p-1 overflow-hidden'>
                <motion.h1
                animate={{y:0}}
                initial={{y:"100%"}}
                transition={{delay:0.5,duration:0.5}}
                className='text-6xl text-center lg:text-right lg:text-9xl font-extrabold  text-black'
                >
                I'M AYMEN            
                </motion.h1>
            </div>
            <div className='flex justify-between flex-col sm:flex-row md:items-center gap-10 md:pb-0 pb-5'>
                <div className='overflow-hidden mt-3'>
                    <motion.p variants={item} className="md:text-[20px] font-semibold text-[18px]">
                        Motivated web developer with experience creating custom websites <br/>
                        and platforms through JS and its ecosystem. Strong and creative,
                        <br/>
                        - I believe that  " The Process Is The Key " .
                    </motion.p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='capitalize font-bold text-[20px]'>
                        my techs
                    </h1>
                    <div className='grid md:grid-cols-5 grid-cols-4 gap-5 md:text-5xl text-3xl text-black'>
                        <FaReact className=''/>
                        <SiNextdotjs className=''/>
                        <IoLogoVue className=''/>
                        <SiJavascript className=''/>
                        <SiTypescript className=''/>
                        <SiSass className=''/>
                        <FaFigma className=''/>
                        <SiRedux className=''/>
                        <SiHtml5 className=''/>
                        <SiCss3 className=''/>
                    </div>
                </div>
            </div>
        </main>
    </motion.div>
  )
}

export default about