import React from 'react'
import aboutimg from "../assets/prakashh.png";

const About = () => {
  return (
   <>
   <div class="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mt-20" id='about'>

  <div class="col-span-4 md:col-span-3 p-4">
    <h2 data-aos="fade-right" className='text-4xl font-bold mb-4 text-green-600'>About Me</h2>
   <h3 data-aos="fade-up" className='text-3xl text-green-600'> Can Develop Website From Scratch to Advance Level  </h3>
   <br/>
   <h3 data-aos="fade-down" className='text-3xl text-green-600'> Can Handle Frontend and Backend  </h3>
   <br/>
   
   <h3 data-aos="fade-right" className='text-3xl text-green-600'>Can Handle Github Restful API Payment Gateways </h3>
   <br/>
   <h3 data-aos="fade-up" className='text-3xl text-green-600'>Skills :React Redux TailWind css PHP Laravel</h3>
  

  </div>

  <div data-aos="fade-left" class="col-span-4 md:col-span-1  p-4">
   <img src={aboutimg} />
  </div>
</div>

   
            
        <br/>
<br/>
<br/><br/>
<br/>
<br/> 
</>
    
  )
}

export default About
