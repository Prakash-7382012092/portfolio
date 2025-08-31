// new-project/src/component/Project.jsx
import React from 'react'
import proj1 from "../assets/shopping.png";
import proj2 from "../assets/task_todo.png";
import proj3 from "../assets/caluclator.png";
import "./project.css"; // make sure it's imported

const Project = () => {
 return (
  <div className="max-w-[1200px] mx-auto p-5" id="work">
   <div className="pb-8 text-center">
    <h3 data-aos="fade-up" className="text-3xl mb-3 font-bold primary-color">Project</h3>
    <p data-aos="fade-right" className="text-green-500 text-2xl">Check out one of My Project</p>
   </div>

   {/* ✅ Use Tailwind flexbox for responsive grid layout */}
   <div className="flex flex-col md:flex-row justify-center items-center gap-x-12">
    
    {/* ✅ Use responsive width classes and remove Bootstrap classes */}
    <div data-aos="zoom-in" className="w-full md:w-[30%] mb-4 abc text-center">
     <a href="https://prakash-7382012092.github.io/shopping/" target="_blank" rel="noreferrer">
      <img src={proj1} alt="Shopping App" className="img-fluid h-[400px]" />
     </a>
     <br />
     <a 
      href="https://prakash-7382012092.github.io/shopping/" 
      target="_blank" 
      rel="noreferrer" 
      className="bg-green-800 p-[15px] text-white rounded-[10px] cursor-pointer" // ✅ Remove 'btn btn-success'
     >
      View Project
     </a>
    </div>
    
    {/* Repeat for proj2 and proj3 */}
    <div data-aos="zoom-in" className="w-full md:w-[30%] mb-4 abc text-center">
     <a href="https://prakash-7382012092.github.io/task_todo/" target="_blank" rel="noreferrer">
      <img src={proj2} alt="Task Todo" className="img-fluid h-[400px]" />
     </a>
     <br />
     <a 
      href="https://prakash-7382012092.github.io/task_todo/" 
      target="_blank" 
      rel="noreferrer" 
      className="bg-green-800 p-[15px] text-white rounded-[10px] cursor-pointer"
     >
      View Project
     </a>
    </div>

    <div data-aos="zoom-in" className="w-full md:w-[30%] mb-4 abc text-center">
     <a href="https://prakash-7382012092.github.io/calculator/" target="_blank" rel="noreferrer">
      <img src={proj3} alt="Calculator App" className="img-fluid h-[400px]" />
     </a>
     <br />
     <a 
      href="https://prakash-7382012092.github.io/calculator/" 
      target="_blank" 
      rel="noreferrer" 
      className="bg-green-800 p-[15px] text-white rounded-[10px] cursor-pointer"
     >
      View Project
     </a>
    </div>

   </div>
  </div>
 )
}

export default Project