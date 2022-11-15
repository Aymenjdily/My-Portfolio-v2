import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import Navbar from '../Container/Navbar/Navbar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function MyApp({ Component,  pageProps, router}: AppProps) {
  const store = new QueryClient(
    {
      defaultOptions: {
        queries: {
          refetchOnWindowFocus : false
        }
      }
    }
  )
  return (
    <QueryClientProvider client={store}>
      <div className='py-24 px-12 lg:px-48 font-Quicksand h-[100vh] md:overflow-hidden overflow-visible'>
        <Navbar />
        <Head>
          Aymen
        </Head>
        <AnimatePresence initial={false}>
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
      </div>
    </QueryClientProvider>
  )
}

export default MyApp
