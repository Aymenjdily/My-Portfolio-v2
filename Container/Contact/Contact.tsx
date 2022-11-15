import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const Contact = () => {
    const schema = yup.object().shape({
        fullName : yup.string().required("your full name is required !"),
        email: yup.string().email().required("your email is required !"),
        message: yup.string().required("your message is required !")
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data : any) => {
        console.log(data)
    }

    return (
        <form className='bg-black px-10 py-10 shadow-2xl rounded-lg' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-white uppercase text-[30px] font-extrabold'>
                let's talk 
            </h1>

            <div className='flex flex-col gap-5 my-5'>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="fullName" className='text-white font-semibold text-[20px]'>
                        Name {" "}
                        <span className='text-green'>*</span>
                    </label>
                    <input type="text" placeholder='Full Name' id="" {...register("fullName")} className="bg-black outline-none border-b-[1px] border-white text-green py-3 "/>
                    <p className='text-[#FF5C5C] capitalize font-semibold'>
                        {errors.fullName?.message}
                    </p>
                </div>

                <div className='flex flex-col gap-3'>
                    <label htmlFor="email" className='text-white font-semibold text-[20px]'>
                        Email {" "}
                        <span className='text-green'>*</span>
                    </label>
                    <input type="text" placeholder='Email@example.com' {...register("email")} className="bg-black outline-none border-b-[1px] border-white text-green py-3"/>
                    <p className='text-[#FF5C5C] capitalize font-semibold'>
                        {errors.fullName?.message}
                    </p>
                </div>

                <div className='flex flex-col gap-3'>
                    <label htmlFor="message" className='text-white font-semibold text-[20px]'>
                        Message {" "}
                        <span className='text-green'>*</span>
                    </label>
                    <textarea placeholder='Your Message...' rows="5" {...register("message")} className="bg-black outline-none border-b-[1px] border-white text-green py-3 w-full"/>
                    <p className='text-[#FF5C5C] capitalize font-semibold'>
                        {errors.message?.message}
                    </p>
                </div>
            </div>

            <div className='flex items-end justify-end'>
                <input type={"submit"} value="send" className="bg-green text-black px-5 py-2 capitalize font-bold text-xl rounded-lg shadow-xl"/>
            </div>
        </form>
    )
}

export default Contact