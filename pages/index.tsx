import { Caption, Caption2, Footer, Header, Name, Projects, Quote, Title } from '../Components'
import { Project } from '../types'
import axios from "axios"

interface IPros {
  data : Project[]
}

const Home = ({ data } : IPros) => {
  console.log(data)
  return (
    <div className='w-full bg-white'>
        <div className='sm:px-16 px-4 flex items-center justify-start bg-white'>
          <div className='xl:max-w-[1280px] w-full font-Quicksand'>
            <Header/>
          </div>
        </div>

        <div className='sm:px-16 px-4 flex items-center justify-center bg-black'>
          <div className='xl:max-w-[1280px] w-full font-Quicksand'>
            <Name/>
          </div>
        </div>

        <div className='sm:px-16 px-4 flex items-center justify-center bg-white'>
          <div className='xl:max-w-[1280px] w-full font-Quicksand'>
            <Caption/>
          </div>
        </div>

        <div className='sm:px-16 px-4 flex items-center justify-center bg-black'>
          <div className='xl:max-w-[1280px] w-full font-Quicksand'>
            <Caption2/>
          </div>
        </div>

        <div className='sm:px-16 px-4 flex items-center justify-center bg-white'>
          <div className='xl:max-w-[1280px] w-full font-Quicksand'>
            <Title/>
          </div>
        </div>

        <div className='sm:px-16 px-4 flex items-center justify-center bg-white'>
          <div className='xl:max-w-[1280px] w-full font-Quicksand'>
            <Projects data = {data}/>
          </div>
        </div>

        <div className='sm:px-16 px-4 flex items-center justify-center bg-green'>
          <div className='xl:max-w-[1280px] w-full font-Quicksand'>
            <Quote/>
          </div>
        </div>
        
        <div className='sm:px-16 px-4 flex items-center justify-center bg-black'>
          <div className='xl:max-w-[1280px] w-full font-Quicksand'>
            <Footer/>
          </div>
        </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const { data } = await axios.get(`https://aymenjdily.netlify.app/api/projects`)

  return {
    props : {
      data : data
    }
  }
}

export default Home
