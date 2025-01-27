import React from 'react'
import proj1 from "../assets/prakashh.png";
import proj2 from "../assets/prakashu.png";
import proj3 from "../assets/prakash21.jpg";
import './Work.css';


const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
        <div className="pb-8">
            <h3 data-aos="fade-up" className='text-3xl mb-3 font-bold primary-color'>Gallery</h3>
            <p data-aos="fade-right" className='text-green-500 text-2xl'>Check out some of my Gallery images</p>

        </div>

        <div   className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[350px] bg-cover relative">
                <img src={proj1} alt='' className='imgg' data-aos="fade-up"/>
                <div className="opacity-0 group-hover:opacity-90  absolute inset-0 flex flex-col">
                    <span className='text-2xl font-bold text-green-400 tracking-wider'></span>
                    <div className='pt-0 text-center'>
                        <a href='/'>
                           {/* <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-600  text-white font-bold'>sfsdf</button> */}
                        </a>
                    </div>
                </div>
            </div>


            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[350px] bg-cover relative">
                <img src={proj2} alt='' className='' data-aos="fade-down"/>
                <div className="opacity-0 group-hover:opacity-90  absolute inset-0 flex flex-col">
                    <span className='text-2xl font-bold text-green-400 tracking-wider'></span>
                    <div className='pt-0 text-center'>
                        <a href='/'>
                           {/* <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-600  text-white font-bold'>sfsdf</button> */}
                        </a>
                    </div>
                </div>
            </div>


            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[350px] bg-cover relative">
                <img src={proj3} alt='' data-aos="fade-up"/>
                <div className="opacity-0 group-hover:opacity-90  absolute inset-0 flex flex-col">
                    <span className='text-2xl font-bold text-green-400 tracking-wider'></span>
                    <div className='pt-0 text-center'>
                        <a href='/'>
                           {/* <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-600  text-white font-bold'>sfsdf</button> */}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work
