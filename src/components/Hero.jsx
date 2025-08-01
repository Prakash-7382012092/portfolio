import React from 'react'
import heroImage from '../assets/prakash.png';
import './hero.css';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div data-aos="zoom-in-right"  className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-green'>
        <div data-aos="fade-up" className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>            
                <img src={heroImage}  data-aos="fade-up" alt='prakash' className='h-[300px] rounded-[10px] border-[2px] border-green-500'/>            
        </div>
        <div data-aos="fade-down" className='col-span-2 px-5 my-auto'>
            <h3 className='text-green-700 text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                <span className='primary-color'>
                    I`m  a                    
                </span>   <br/>
                <TypeAnimation sequence={[
                    "PHP LARAVEL CI",
                    1000,
                    "React Redux Vue Vuex",
                    1000,
                    "MYSQL, POSTGRES SQL"
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                />
                    
            </h3>  
            <span className='primary-color'>
                   Develo                  
                </span>  
                        
            <p data-aos="fade-down" className='text-green text-2xl sm:text-lg my-6 lg:text-xl'>
               My Name is Prakash Konga  & I have 4 years of Eperience in Web Development
            </p>  

            <div data-aos="fade-down" className="my-8 md:flex sm:block">
             
                <div className='but '> <a href='#contact' className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-greenyellow-500 to-green-500 text-2xl'>Contact Me</a> </div>      
            </div>        
        </div>
    </div>
  )
}

export default Hero
