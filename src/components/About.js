import React from 'react'
import { ImHtmlFive } from 'react-icons/im'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiCss3, SiJavascript, SiTailwindcss, SiFirebase, SiCplusplus, SiMongodb, SiGraphql, SiExpress, SiDocker, SiTypescript } from 'react-icons/si'
import { TbBrandVscode } from 'react-icons/tb'
const About = () => {
    return (
        <div className='text-white pl-24 pt-16 bg-neutral-800 h-screen w-full '>
            <div className='pb-14'>
                <h1 className=''> <span className='text-2xl font-medium'>About me</span>
                    <span className='hidden md:inline-flex md:w-60 lg:w-72 h-[.5px] bg-gray-600 mb-2 ml-6'></span>
                </h1>
                <br />
                <p className='pl-12 w-3/4 tracking-wide text-gray-200'>With over 6 years of programming experience and a track record of more than 15 years as an Accountant, my specialization is /centered around backend development and the creation of UI / UX, with a specific focus on Python and solid expertise in databases, data analysis, API Rest integrations, and cloud technology. My approach translates into the creation of modern and intuitive web platforms , where the fusion of aesthetics and functionality is key to achieving exceptional results.</p>
            </div>
            <div>
                <h1>Here are some of the technologies that are part of my current stack</h1>
                <br />
                <div className='max-w-[550px] grid grid-cols-3 gap-6 mt-4 ml-2'>
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
                        <SiFirebase />
                        <span>Firebase</span>
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
                        <SiDocker />
                        <span>Docker</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <SiCplusplus />
                        <span>C++</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About
