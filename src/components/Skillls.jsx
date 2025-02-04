import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import tailwind from '../assets/tailwind.png';
import react from '../assets/react.png';
const Skillls = () => {
  return (
    <div className='text-green-800 text-2xl md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center'>
        <h2  data-aos="fade-down" className='text-green-600 text-2xl md:text-4xl font-bold m-4'>MY <br/> Tech <br/> Stack </h2>
        <div  data-aos="fade-up" className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
            <img src={html} alt=''/>
            <p className='mt-2'>HTML:5</p>
        </div>

        <div data-aos="fade-down" className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
            <img src={css} alt='' width={100} height={100}/>
            <p className='mt-2'>CSS:3</p>
        </div>

        <div data-aos="fade-up" className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
            <img src={javascript} alt='' width={100} height={100}/>
            <p className='mt-2'>Javascript</p>
        </div>

        <div data-aos="fade-down" className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
            <img src={tailwind} alt='' width={100} height={100}/>
            <p className='mt-2'>Tailwind</p>
        </div>

        <div data-aos="fade-up"  className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
            <img src={react} alt='' width={100} height={100}/>
            <p className='mt-2'>React</p>
        </div>


<br/>
<br/>
<br/>



    </div>
  )
}

export default Skillls