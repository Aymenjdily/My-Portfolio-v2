import React from 'react'
import { Project } from '../types'
import { motion } from 'framer-motion'
import { Parallax, Background } from 'react-parallax'
import { urlFor } from '../Service/client'
import Image from 'next/image'
import Link from "next/link"
import { FaGithub } from 'react-icons/fa'

interface IPros {
    data : Project[]
}

const Projects = ({ data } : IPros) => {
  return (
    <div className='bg-white flex items-center justify-center py-20 px-10'>
      <motion.div
        whileInView={{ y:[200,0] }}
        transition={{ duration:1}}
      >
        <div className='flex flex-wrap gap-20 justify-center'>
          {
            data.map((project) => (
              <div
                key={project._id}
                className="bg-black p-8 flex-1 font-Quicksand flex justify-center flex-col hover:scale-105 hover:duration-150 duration-150"
              >
                <h1 className='text-[25px] text-green font-bold uppercase'>
                  {project.title}
                </h1>
                <h3 className='text-[20px] text-gray font-semibold capitalize'>
                  {project.type}
                </h3>
                <p className='my-3 text-white'>
                  {project.description}
                </p>
                <div className='flex flex-row gap-5 mt-5'>
                  <button className='text-green border-2 border-green font-semibold px-5 py-2 capitalize'>{project.btnDemo}</button>
                  <Link
                    href={`${project.linkGit}`}
                  >
                    <button className='px-5 py-2 capitalize bg-green flex items-center gap-3 font-bold text-[20px]'>
                      <FaGithub className='text-[25px]'/>
                      {project.btnGit}
                    </button>
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
      </motion.div>
        {/* {
            data.map((item) => (
                <div
                  key={item._id}
                  className={`h-[100vh] bg-black font-Quicksand flex md:flex-row  flex-col justify-center items-center py-10`}
                >
                  <div className='flex flex-col md:items-center justify-center flex-1 md:px-20 px-10'>
                    <h1 className='text-green font-bold md:text-center uppercase md:text-[80px] text-[30px]'>
                      {item.title}
                    </h1>
                    <h2 className='text-gray font-semibold md:text-center capitalize text-[30px]'>
                      {item.type}
                    </h2>
                    <p className='text-white my-5 md:w-[50%] md:text-center'>
                      {item.description}
                    </p>
                    <Link href={item.link}>
                      <button className='text-green border-2 border-green px-5 py-3 capitalize font-semibold'>
                        {item.btnText}
                      </button>
                    </Link>
                  </div>

                  <div className='flex-1 items-center md:flex hidden justify-center'>
                    <Image
                      alt={item.title}
                      src={urlFor(item.image).url()}
                      width={1200}
                      height={1200}
                      className="object-contain"
                    />
                  </div>
                </div>
            ))
        } */}
    </div>
  )
}

export default Projects