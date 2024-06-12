import React, { forwardRef, useState } from 'react'
import { FaGithub, FaLink } from 'react-icons/fa'
import ReactPlayer from 'react-player'
import { projectLinks, images, videos } from './Constant';
import { IoPlayOutline } from 'react-icons/io5';
import projectsData from '../data/projects.json';

const Projects =forwardRef((props, ref) => {
    const [showVideo,setShowVideo] = useState(false)
    const [currentVideo,setCurrentVideo] = useState(null)
    const imageMap = {
        "budping": images.budping,
        "chatflix": images.chatflix,
        "hungerhub": images.hungerhub,
        "booksHub": images.booksHub,
        "nasa-mission": images.nasa,
      };

      const handleVideoClose = () => {
        setShowVideo(false)
        setCurrentVideo(null)
      }

    return (
        <div ref={ref} id='projects' className='bg-neutral-900 h-fit text-white md:py-14 '>
            <div className='max-w-7xl mx-auto px-4'>
                <h1 className='py-10 md:py-24' data-aos="fade-up">
                    <span className='text-2xl font-medium'>Projects I have developed</span>
                    <span className='hidden md:inline-flex md:w-60 lg:w-72 h-[.7px] bg-gray-600 mb-2 ml-6'></span>
                </h1>
                <div className='flex flex-col gap-10 md:gap-36'>
                    {projectsData?.projects.map((project,index) => (
                        <div key={index} className={`flex flex-col  gap-10 pb-50 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`} data-aos="fade-up" data-aos-duration="1000">
                            <div className='relative w-full md:w-1/2 h-full border-1 shadow cursor-pointer overflow-hidden '>
                                <img src = {imageMap[project.image]} className='opacity-50 rounded-2xl max-h-[365px] h-full' alt={project.name}/>
                                <span onClick={() => {
                                    setShowVideo(true)
                                    setCurrentVideo(project.video)
                                }} className='absolute flex items-center top-[50%] left-[50%] text-[40px] transform -translate-x-1/2 -translate-y-1/2 hover:shadow-black hover:drop-shadow-xl shadow-black transition-all duration-700 ' >
                                    <IoPlayOutline />
                                </span>
                            </div>
                            <div className={`${index % 2 === 1 ? 'text-left' : 'md:text-right'} md:w-1/2`}>
                                <h1 className='text-3xl font-medium pb-6'>{project.name}</h1>
                                <p className='bg-slate-400 bg-opacity-10 text-sm md:text-base p-2 md:p-4 rounded-2xl mb-6'>{project.description}</p>
                                <ul className={`text-sm font-normal tracking-tight flex max-w-[600px] flex-wrap  gap-1 md:gap-2 ${index % 2 === 1 ? 'md:justify-start' : 'md:justify-end'} mb-4`}>
                                    {project.technologies.map((tech) => (
                                        <li className='border border-gray-500 text-violet-200 px-2 rounded-md opacity-80'>{tech}</li>
                                    ))}
                                    
                                </ul>
                                <ul className={`text-xl flex gap-3 ${index % 2 === 1 ? 'md:justify-start' : 'md:justify-end'} pr-1`}>
                                    <a alt='link' href={project.github}><li className='cursor-pointer hover:rotate-12 hover:text-[#f1cf29]'><FaGithub /></li></a>
                                    <a alt='link' href={project.link}><li className='cursor-pointer hover:rotate-12 hover:text-[#f1cf29]'><FaLink /></li></a>
                                </ul>
                            </div>
                        </div>
                        
                        ))}
                </div>
            </div>
            {showVideo && currentVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={handleVideoClose}>
                    <div className="relative w-full max-w-3xl aspect-video p-4">
                        <ReactPlayer url={currentVideo} playing controls width="100%" />
                    </div>
                    <button onClick={handleVideoClose} className="absolute top-[50px] right-[10px] md:right-[8%] text-white text-3xl">&times;</button>
                </div>
            )}
        </div>)
    })
    
export default Projects
        // {showVideo && (
        //     <div className="w-full h-screen absolute">
        //         <div className="w-full aspect-video px-2 md:w-[50%] z-30 top-[45%] md:top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 absolute">
        //             <ReactPlayer                                                    
        //                 className="videoFrame"
        //                 url={videos.chatflixVideo}
        //                 light={images.chatflix}
        //                 playing
        //                 controls
        //                 />
        //         </div>
        //         <div onClick={() => setShowVideo(false)}
        //             className="w-full h-screen bg-black bg-opacity-90 z-50 absolute">
        //         </div>  
        //     </div>
        // )}