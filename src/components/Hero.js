import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { IoMdMail } from "react-icons/io";

const Hero = () => {
    return (

        <div className='bg-neutral-900 h-fit w-full'>
            <div className="flex justify-center h-screen">
                <div className="flex items-center justify-center relative gap-40 text-white">
                    <div className="flex flex-col">
                        <h1 className='text-2xl'>Hello!, My name is</h1>
                        <br /><br />
                        <h1 className='text-[4.2rem] leading-4 mb-[2.2rem] font-serif '><span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400'>Gourav </span>

                            <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500'>Garg</span></h1>
                        <p className='text-[1.2rem] leading-4 text-center mt-4 italic'>I'm a <span className='font-semibold'>Software Developer</span> who loves building Interactive, digital experiences on web.</p>
                        <div className=''>
                            <ul className='text-white text-2xl my-8 flex gap-4'>
                                <li className='hover:text-[#f1cf29] hover:rotate-12 transition-all'><FaGithub/></li>
                                <li className='hover:text-[#f1cf29] hover:rotate-12 transition-all'><FaLinkedin/></li>
                                <li className='hover:text-[#f1cf29] hover:rotate-12 transition-all'><FaTwitter/></li>
                                <li className='hover:text-[#f1cf29] hover:rotate-12 transition-all'><IoMdMail/></li>
                            </ul>
                            <button className='text-white px-4 py-2 border rounded-3xl font-medium hover:text-[#222] hover:bg-gradient-to-r hover:border-none transition-all from-yellow-400 to-orange-500 hover:scale-95'>My resume</button>
                        </div>
                    </div>
                    <div className="image">

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Hero
