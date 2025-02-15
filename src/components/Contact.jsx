import React from 'react'
import { CgMailForward } from 'react-icons/cg'
import { GiMailbox } from 'react-icons/gi'
import { MdEmail } from 'react-icons/md'
import "./contact.css";
import { BiPhone } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';

const Contact = () => {
  return (
    <div className='max-w-[1200px] mx-auto sm:py-20 p-5' id='contact'>
        <div className="text-center">
              <h2 data-aos="fade-up" className='text-4xl font-bold leading-tight text-green-700'>Contact Me</h2>
        </div>  
        <div className='max-w[800px] mx-auto'>
            <div className='max-w-[800px] mx-auto'>
                <div className='mt-6 bg-green-900 rounded-xl'>
                    <center>
                    <table className='table table-centered table-responsive table-bordered table-stripped p-6'>
                        <br/>
                        <tr data-aos="fade-up"> <th>Gmail</th><td> <span className='ml-[40px]'><a href="mailto:prakash7382012092@gmail.com"><MdEmail /></a></span></td></tr>
                        <tr data-aos="fade-in"> <th>Phone</th><td> <span className='ml-[40px]'><a href="tel:+917382012092"><BiPhone /></a></span></td></tr>
                        <tr data-aos="zoom-in"> <th>Whats App</th><td> <span className='ml-[40px]'><a href="https://wa.me/917382012092?text=Hi%20Prakash" target="_blank"> <FaWhatsapp /></a></span></td></tr>
                        <tr data-aos="zoom-out"> <th>Linked in</th><td> <span className='ml-[40px]'><a href="https://www.linkedin.com/in/prakash-k-996874143/" target="_blank"> <LiaLinkedin /></a></span></td></tr>
                        <tr data-aos="fade-in"> <th>Github </th><td> <span className='ml-[40px]'><a href="https://github.com/Prakash-7382012092" target="_blank"> <BsGithub /></a></span></td></tr>
                        <tr data-aos="fade-up"> <th>Instagram</th><td> <span className='ml-[40px]'><a href="https://www.instagram.com/prakash_k73/" target="_blank"> <BsInstagram /></a></span></td></tr>
                        <br/>
                       
                    </table>
                    </center>
                    

                </div>
            </div>
        </div>    
    </div>
  )
}

export default Contact
