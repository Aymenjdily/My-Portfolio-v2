import React from 'react'
import Link from 'next/link'
import { navLinks } from './Api'

const Navbar = () => {
  return (
    <nav className='text-2xl font-bold z-20 relative'>
      <ul className='flex gap-12 font-bold capitalize flex-wrap'>
        {
          navLinks.map((item) => (
            <Link 
              href={item.id}
              key={item.title}
            >
              <li className='cursor-pointer text-black'>
                {item.title}
              </li>
            </Link>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navbar