import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';



const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav=()=>{
        setNav(!nav)
    }
  return (
    <div className='bg-green-500 h-[100px] text-white h-[100px] max-w-[100%] mx-auto flex justify-between items-center'>
        <h1 className='text-3xl font-bold primary-color ml-4'>Prakash</h1>
        <ul className='hidden md:flex'>
            <li className='p-5 text-2xl'><a href='#about'>About</a></li>
            <li className='p-5 text-2xl'><a href='#work'>Gallery</a></li>
            <li className='p-5 text-2xl'><a href='#contact'>Contact</a></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden mr-6'>
            {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
        </div>

        <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500':'fixed left-[-100%]'}>
            <h1 className='text-3xl text-green-500 m-4'>Prakash</h1>
            <AiOutlineClose className="absolute top-2 right-2 text-green-600 text-3xl  ease-in-out duration-500" onClick={handleNav}/>
            <ul className='p-8 text-2xl'>
               
                <li className='p-2'><a href='#about'>About</a></li>
                
                <li className='p-2'><a href='#experience'>Experience</a></li>
                <li className='p-2'><a href='#contact'>Contact</a></li>

            </ul>

        </div>
        


    </div>
  )
}

export default Navbar