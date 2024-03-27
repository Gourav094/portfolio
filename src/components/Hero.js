import React, { forwardRef } from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { IoMdMail } from "react-icons/io";
import gourav from "../images/Gourav.jpg"
import {Github, Linkedin, Mail, Resume, Twitter} from "./Constant"


const Hero = forwardRef((props, ref) => {

    return (

        <div ref={ref} id='hero' className='bg-neutral-900 bg-opacity-95 min-h-screen w-full'>
            <div className="max-w-6xl mx-auto py-32">
                <div className="flex items-center  relative gap-40 text-white">
                    <div className="flex flex-col">
                        <h1 className='text-2xl '>Hello!, My name is</h1>
                        <h1 className='text-6xl leading-4 my-8 font-sans font-bold text-[#ffc86b]'>Gourav Garg </h1>
                        <p className='text-[1.2rem] leading-6 mt-4 italic'>I'm a <span className='font-semibold'>Software Developer</span> who loves building Interactive, digital experiences on web.</p>
                        <div className=''>
                            <ul className='text-white text-2xl my-8 flex gap-4'>
                                <a href={Github} target='_blank' rel="noopener noreferrer"><li className='hover:text-[#ffc86b] hover:rotate-12 transition-all'><FaGithub/></li></a>
                                <a href={Linkedin} target='_blank' rel="noopener noreferrer"><li className='hover:text-[#ffc86b] hover:rotate-12 transition-all'><FaLinkedin/></li></a>
                                <a href={Twitter} target='_blank' rel="noopener noreferrer"><li className='hover:text-[#ffc86b] hover:rotate-12 transition-all'><FaTwitter/></li></a>
                                <a href={`mailto:${Mail}`} target='_blank' rel="noopener noreferrer"><li className='hover:text-[#ffc86b] hover:rotate-12 transition-all'><IoMdMail/></li></a>
                            </ul>
                            <a alt='resume' href={Resume} target='"_blank' rel="noopener noreferrer"><button className='text-[#ffc86b] px-4 py-2 border border-[#ffc86b] rounded-lg font-semibold hover:text-[#111] hover:bg-[#ffc86b] hover:bg-opacity-90 hover:scale-95'>My resume</button></a>
                        </div>
                    </div>
                    <div className="w-1/3 h-60 relative group">
                        <div className='relative z-20 flex pl-6 lg:pl-0'>
                            <img alt='me' loading='lazy' className='w-44 h-52 rounded-md' src={gourav}/>
                        </div>
                        <div className="absolute hidden lg:inline-flex h-[230px] w-[180px] top-1 left-5 border-2  border-blue-200 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300">

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
})

export default Hero
