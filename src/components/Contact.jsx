import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1200px] mx-auto sm:py-20 p-5' id='contact'>
        <div className="text-center">
              <h2 data-aos="fade-up" className='text-4xl font-bold leading-tight text-green-700'>Contact Me</h2>
        </div>  
        <div className='max-w[800px] mx-auto'>
            <div className='max-w-[800px] mx-auto'>
                <div className='mt-6 bg-green-900 rounded-xl'>
                    <div className="p-10">
                        <form action='' method='POST'>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                <div>
                                    <div className="mt-2 5 relative">
                                        <input type='text' name='' id='' data-aos="fade-left" placeholder='Enter Your Name' class="bg-green-300 w-full px-4 py-4 text-blue-600 placeholder-gray-500 border-gray-5000 rounded-md focus:outline-none focus:border-pink-600"/>
                                    </div>

                                    <div className="mt-2 5 relative">
                                        <input type='email' name='' id='' data-aos="fade-left" placeholder='Enter Your Email' class="bg-green-300 w-full px-4 py-4 text-blue-600 placeholder-gray-500 border-gray-5000 rounded-md focus:outline-none focus:border-pink-600"/>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <div className="mt-2 5">
                                            <textarea name='' id='' data-aos="fade-left"  placeholder='Your Message' className='w-full px-4 py-4 bg-green-300 text-blue-700 placeholder-gray-400 border border-green-500 rounded-md focus:outline-none focus:border-green-600' rows="4"></textarea>
                                        </div>
                                    </div>

                                    <div className='sm:col-span-2'>
                                        <button type="submit" data-aos="zoom-in" className="text-xl w-full p-4 mt-2 font-semibold text-white-800 bg-green-500 rounded-md">Send</button>
                                    </div>

                                    



                                    

                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>    
    </div>
  )
}

export default Contact
