import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IoCopy } from "react-icons/io5"

const Generator = () => {
    const url = "https://api.api-ninjas.com/v1/quotes?category=success"
    const { data, isLoading, isError, refetch } = useQuery(['Quotes'], () => {
        return axios.get(`${url}`,{
            headers: { 'X-Api-Key' : 'K4nTxU9d8gF9IjBgy55czA==8CIWtBi8M0xWexV4'},
        })
        .then((res) => res.data)
        .catch(error => console.log(error))
        
    })
    const Generate = () => {
        refetch()
        setcopied(false)
    }
    const [copied, setcopied] = useState(false)
    console.log(data)
    return (
        <div className='bg-black p-5 shadow-2xl rounded-xl text-white font-bold flex flex-col gap-4 hover:scale-105 duration-100 hover:duration-100'>
            <div className='flex flex-col'>
                <div className='px-3 py-2'>
                    <h2 className='mb-3 uppercase text-green font-extrabold'>
                        get a quote
                    </h2>
                    {
                        isLoading && <h1> Loading ... </h1>
                    }
                    {
                        isError && <h1> Sorry no Quote for today ! </h1>
                    }
                    {
                        data?.map((item : any) => (
                            <div
                                key={item?.quote}
                            >
                                {item?.quote}
                            </div>
                        ))
                    }
                </div>
                
            </div>
            <div className='flex flex-row gap-5 items-center ml-3'>
                <div>
                    <CopyToClipboard
                        text={data?.fact}
                        onCopy={() => setcopied(true)}
                    >
                        <button className='flex items-center gap-2 text-green'>
                            <IoCopy/>
                            {
                                copied 
                                ?
                                "Copied"
                                :
                                "Copy"
                            }

                        </button>
                    </CopyToClipboard>
                </div>
                <button 
                    className='bg-green text-black px-5 py-2 uppercase font-bold shadow-2xl rounded-xl'
                    onClick={Generate}
                >
                    generate
                </button>
            </div>
        </div>
    )
}

export default Generator