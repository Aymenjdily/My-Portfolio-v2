import { Caption, Footer, Header, Name, Projects, Quote, Title } from '../Components'
import { Project } from '../types'
import axios from "axios"

interface IPros {
  data : Project[]
}

const Home = ({ data } : IPros) => {
  console.log(data)
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <Name/>
      <Caption/>
      <Title/>
      <Projects data = {data}/>
      <Quote/>
      <Footer/>
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
