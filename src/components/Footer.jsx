import React from 'react'
import { MdEmail } from 'react-icons/md'
import { BiPhone } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='max-w-[100%] sm:h-[150px] p-12 flex justify-between mx-auto bg-green-700'>
        <span  className='text-green-200 text-3xl'>Prakash </span>
        <span className='text-green-200 text-3xl flex cursor-pointer'> <a href="mailto:prakash7382012092@gmail.com"><MdEmail />  </a> &nbsp;</span> 
        <span className='text-green-200 text-3xl flex cursor-pointer'> <a href="tel:+917382012092" className='decoration-none'><BiPhone className='decoration-none text-white'/></a> </span>    
            
    </div>
  )
}

export default Footer