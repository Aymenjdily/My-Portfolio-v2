/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Project } from '../types'
import axios from "axios"
import { Projects } from '../Components'
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';

const project = () => {
  const { data : works, isLoading} = useQuery(['Projects'], () => {
    return axios.get(`http://localhost:3000/api/projects`)
    .then((res) => res.data)
        .catch(error => console.log(error))
  })
  console.log(works)
  return (
    <motion.div 
      initial={{y:"100%"}}
      animate={{y:"0%"}}
      transition={{duration:0.75, ease:"easeOut"}}
      exit={{opacity:1}}
      className='absolute top-0 left-0 w-full h-[100vh] bg-white lg:px-48 px-4'
    >
      <div className='md:mt-52 mt-64 mb-36 p-1 overflow-hidden'>
        {
          isLoading &&
          <h1>Loading ...</h1>
        }
        <Projects data={works}/>
      </div>
    </motion.div>
  )
}

export default project