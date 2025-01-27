import React from 'react'
import heroImage from '../assets/prakash.png';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div data-aos="zoom-in-right"  className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-green'>
        <div data-aos="fade-up" className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>            
                <img src={heroImage} alt='prakash' className='h-[300px] rounded-[10px] border-[2px] border-green-500'/>            
        </div>
        <div data-aos="fade-down" className='col-span-2 px-5 my-auto'>
            <h1 className='text-green-700 text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                <span className='primary-color'>
                    I`m  a                    
                </span>   <br/>
                <TypeAnimation sequence={[
                    "PHP Full Stack",
                    1000,
                    "React Desinger",
                    1000,
                    "PHP,Laravel,React"
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                />
                            
            </h1>  
            <p data-aos="fade-down" className='text-green text-2xl sm:text-lg my-6 lg:text-xl'>
               My Name is Prakash Konga  and  have 3.5 years of Eperience in Web Development
            </p>  

            <div data-aos="fade-down" className="my-8">
                 <a href='/' className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-greenyellow-500 to-green-500 text-2xl'>Download CV</a>
                 <a href='#contact' className='px-6 py-3 bg-green-500 w-full rounded-xl mr-4 border border-green-500 hover:bg-gradient-to-br from-green-500 to-blue-300 text-white hover:border-none text-2xl'>Contact</a>           
            </div>        
        </div>
    </div>
  )
}

export default Hero
