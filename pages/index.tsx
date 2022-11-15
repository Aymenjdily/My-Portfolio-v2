import Generator from '../Container/Generator/Generator'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      initial={{y:"100%"}}
      animate={{y:"0%"}}
      transition={{duration:0.75, ease:"easeOut"}}
      exit={{opacity:1}}
      className='absolute h-[100vh] top-0 left-0 w-full bg-white lg:px-48 px-16 md:overflow-hidden overflow-visible'
    >
      <main className=''>
        <div className='mt-96 mb-52 p-1 overflow-hidden'>
          <motion.h1
            animate={{y:0}}
            initial={{y:"100%"}}
            transition={{delay:0.5,duration:0.5}}
            className='text-6xl text-center lg:text-right lg:text-9xl font-extrabold capitalize text-black'
          >
            Hello there,            
          </motion.h1>
        </div>

        <div className='flex justify-between flex-col sm:flex-row items-center gap-10 md:pb-0 pb-5'>
          <div className='font-bold text-3xl flex-1'>
            <span className='text-green text-3xl capitalize'>
              nice to meet you !
            </span>
          </div>
          <div className='flex-1'>
            <Generator/>
          </div>
        </div>
      </main>
    </motion.div>
  )
}

export default Home
