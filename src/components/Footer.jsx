import React from 'react'
import { MdEmail } from 'react-icons/md'
import { GrContactInfo } from 'react-icons/gr'

const Footer = () => {
  return (
    <div className='max-w-[100%] sm:h-[150px] p-12 flex justify-between mx-auto bg-green-700'>
        <span  className='text-green-200 text-3xl'>Prakash Konga</span>
        <span className='text-green-200 text-3xl flex'> <MdEmail/> &nbsp;prakash7382012092@gmail.com </span>
        <span className='text-green-200 text-3xl flex'><GrContactInfo/> :+91 7382012092 </span>
        
    </div>
  )
}

export default Footer