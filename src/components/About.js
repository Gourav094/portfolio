import React, { forwardRef } from 'react'
import { ImHtmlFive } from 'react-icons/im'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiCss3, SiJavascript, SiTailwindcss, SiFirebase, SiCplusplus, SiMongodb, SiGraphql, SiExpress, SiDocker, SiTypescript, SiAmazonaws, SiThealgorithms, SiNextdotjs } from 'react-icons/si'
import { TbBrandVscode } from 'react-icons/tb'
import aboutImage from "../images/about.png"

const About =forwardRef((props, ref)=> {


    return (
        <div ref={ref} id='about' className='text-white px-4 py-10 md:pl-24 md:pt-24 bg-neutral-800 md:min-h-screen '>
            <div className='max-w-7xl mx-auto px-3'>
                <div className='pb-14 text-sm sm:text-base'  data-aos="fade-up">
                    <h1 className=''> 
                        <span className='text-2xl font-medium'>About me</span>
                        <span className='hidden md:inline-flex md:w-60 lg:w-72 h-[.5px] bg-gray-600 mb-2 ml-6'></span>
                    </h1>
                    <br />
                    <p className='md:pl-12 w-full md:w-3/4 tracking-widest text-gray-200'>My specialization is centered around <span className='text-[#ffc86b]'>full-stack development </span>, creating backend using node and express and the creation of UI / UX, with a specific focus on Javascript, React and solid expertise in databases, API Rest integrations. With good knowledege of Data structures, I've solved 550+ problems on leetcode. My approach translates into the creation of modern and intuitive web platforms , where the fusion of aesthetics and functionality is key to achieving exceptional results.</p>
                </div>
                <div className="flex md:flex-row flex-col gap-4 justify-between items-center">
                <div>
                    <h1>Here are some of the technologies that are part of my current stack</h1>
                    <br />
                    <div className='max-w-[550px] grid grid-cols-3 gap-6 mt-4 ml-2' data-aos="zoom-in-up" data-aos-duration="1500">
                        <div className='flex items-center gap-2'>
                            <ImHtmlFive />
                            <span>HTML</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <SiCss3 />
                            <span>CSS</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <SiJavascript />
                            <span>javascript</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaReact />
                            <span>React</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <SiTailwindcss />
                            <span>TailwindCss</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <SiTypescript />
                            <span>TypeScript</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <SiNextdotjs />
                            <span>Next</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaNodeJs />
                            <span>Node</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <SiExpress />
                            <span>Express</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <SiMongodb />
                            <span>MongoDB</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <SiGraphql />
                            <span>GraphQL</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <SiFirebase />
                            <span>Firebase</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <SiDocker />
                            <span>Docker</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <SiAmazonaws/>
                            <span>AWS</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <SiCplusplus />
                            <span>C++</span>
                        </div>
                       

                    </div>
                </div>
                <div className='md:mr-10' data-aos="zoom-in-up" data-aos-duration="1000">
                    <img src={aboutImage} alt='Hello!!'/>
                </div>
                </div>
            </div>
        </div>
    )
})

export default About
