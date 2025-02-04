import React from 'react'
import { MdEmail } from 'react-icons/md'
import { GrContactInfo } from 'react-icons/gr'

const Footer = () => {
  return (
    <div className='max-w-[100%] sm:h-[150px] p-12 flex justify-between mx-auto bg-green-700'>
        <span  className='text-green-200 text-3xl'>Prakash </span>
        <span className='text-green-200 text-3xl flex'> <MdEmail/> &nbsp;</span>
        <span className='text-green-200 text-3xl flex'><GrContactInfo/>  </span>
        
    </div>
  )
}

export default Footer