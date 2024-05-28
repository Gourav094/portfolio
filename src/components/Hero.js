import React, { forwardRef } from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { IoMdMail } from "react-icons/io";
import gourav from "../images/Gourav.jpg"
import { socialLinks } from './Constant';


const Hero = forwardRef((props, ref) => {

    return (

        <div ref={ref} id='hero' className='bg-neutral-900 bg-opacity-95 md:min-h-screen w-full'>
            <div className="max-w-6xl mx-auto px-4 py-10 md:py-32">
                <div className="flex flex-col md:flex-row items-center  relative gap-16 md:gap-40 text-white">
                    <div className="flex flex-col">
                        <h1 className='text-xl '>Hello!, My name is</h1>
                        <span className="typing-animation my-2 w-fit">
                            <h1 className='text-4xl md:text-5xl leading-4 py-2  font-sans font-medium text-[#ffc86b]'>Gourav Garg </h1>
                        </span>
                        <p className='text-[1.2rem] leading-6 mt-4 italic'>I'm a <span className='font-semibold'>Software Developer</span> who loves building Interactive, digital experiences on web.</p>
                        <div className='' data-aos="zoom-in-up">
                            <ul className='text-white text-2xl my-8 flex gap-4'>
                                <a href={socialLinks.Github} target='_blank' rel="noopener noreferrer"><li className='hover:text-[#ffc86b] hover:rotate-12 transition-all'><FaGithub /></li></a>
                                <a href={socialLinks.Linkedin} target='_blank' rel="noopener noreferrer"><li className='hover:text-[#ffc86b] hover:rotate-12 transition-all'><FaLinkedin /></li></a>
                                <a href={socialLinks.Twitter} target='_blank' rel="noopener noreferrer"><li className='hover:text-[#ffc86b] hover:rotate-12 transition-all'><FaTwitter /></li></a>
                                <a href={`mailto:${socialLinks.Mail}`} target='_blank' rel="noopener noreferrer"><li className='hover:text-[#ffc86b] hover:rotate-12 transition-all'><IoMdMail /></li></a>
                            </ul>
                        </div>
                            <a alt='resume' href={socialLinks.Resume} target='"_blank' rel="noopener noreferrer"><button className='text-[#ffc86b] px-4 py-2 border border-[#ffc86b] rounded-lg font-semibold hover:text-[#111] hover:bg-[#ffc86b] hover:bg-opacity-90 hover:scale-95'>My resume</button></a>
                    </div>
                    <div className="w-full lg:w-1/3 h-60 relative group">
                        <div className='absolute w-full -left-6 -top-6 rounded-lg'>
                            <div className='relative z-20 flex pl-6 lg:pl-0'>
                                <img alt='me' loading='lazy' className='w-44 h-52 rounded-lg' src={gourav} />
                            </div>
                            <div className="absolute hidden lg:inline-flex h-[230px] w-[180px] top-1 left-5 border-2  border-blue-200 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
})

export default Hero
