import React from 'react'
import proj1 from "../assets/1.png";


const Project = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
            <div className="pb-8">
                <h3 data-aos="fade-up" className='text-3xl mb-3 font-bold primary-color'>Project</h3>
                <p data-aos="fade-right" className='text-green-500 text-2xl'>Check out one of My Project</p>
    
            </div>
    <center>
           <div data-aos="zoom-in" className="col-md-6 col-sm-12 mx-auto">
            <img src={proj1} className='img-fluid h-[400px]'   />
            <br/>
            <a href="https://prakash-7382012092.github.io/shopping/" target='_blank' className='btn btn-success bg-green-800 p-[15px] text-white rounded-[10px] cursor-pointer'>View Project</a>

           </div>
            </center>
        </div>
  )
}

export default Project
