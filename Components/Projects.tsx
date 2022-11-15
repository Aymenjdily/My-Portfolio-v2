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
        <div className='flex flex-wrap gap-20 justify-center'>
          {
            data?.map((project) => (
              <div
                key={project._id}
                className="bg-black p-8 flex-1 font-Quicksand flex justify-center flex-col shadow-2xl rounded-xl"
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
                  <button className='text-green border-2 border-green font-semibold px-5 py-2 capitalize shadow-2xl rounded-xl'>{project.btnDemo}</button>
                  <Link
                    href={`${project.linkGit}`}
                  >
                    <button className='px-5 py-2 capitalize bg-green flex items-center gap-3 font-bold text-[20px] shadow-2xl rounded-xl'>
                      <FaGithub className='text-[25px]'/>
                      {project.btnGit}
                    </button>
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
  )
}

export default Projects