import React, { forwardRef } from 'react'
import chatflix from '../images/chatflix.png'
import streamer from '../images/streamer.png'
import hungerhub from '../images/hungerhub.png'
import nasa from '../images/nasa-mission.png'
import { FaGithub, FaLink } from 'react-icons/fa'
import { Chatflix_Github, Chatflix_Link, HungerHub_Github, HungerHub_Link, Nasa_Github, Nasa_Link, Streamer_Github, Streamer_Link } from './Constant'

const Projects = forwardRef((props, ref) => {

    return (
        <div ref={ref} id='projects' className='bg-neutral-900 h-fit text-white md:py-14 '>
            <div className='max-w-7xl md:mx-auto mx-4'>
                <h1 className='py-10 md:py-20'> <span className='text-2xl font-medium'>Projects I have developed</span>
                    <span className='hidden md:inline-flex md:w-60 lg:w-72 h-[.7px] bg-gray-600 mb-2 ml-6'></span>
                </h1>
                <div className='flex flex-col gap-10 md:gap-36'>
                    <div className='flex flex-col md:flex-row gap-10 pb-20 items-center'>
                        <div className='md:w-1/2 h-full border-1 shadow-lg cursor-pointer'>
                            <img src={chatflix} className='rounded-2xl' alt='project1' />
                        </div>
                        <div className='text-right md:w-1/2'>
                            <h1 className='text-3xl font-medium pb-6'>Chatflix</h1>
                            <p className='bg-slate-400 bg-opacity-10 text-sm md:text-base p-2 md:p-4 rounded-2xl mb-6'>Chatflix is a Streaming platform that offers to watch TV shows and movies on an internet-connected device. Integrate dynamic data through TMDB API. Ensured data security with Authentication and Protected routes.</p>
                            <ul className='text-sm font-medium tracking-tight flex max-w-[600px] flex-wrap  gap-1 md:gap-2 justify-end mb-4'>
                                <li className='bg-gray-800 text-[#ffc86b] px-2 rounded-md'>Javascript</li>
                                <li className='bg-gray-800 text-[#ffc86b] px-2 rounded-md'>TailwindCSS</li>
                                <li className='bg-gray-800 text-[#ffc86b] px-2 rounded-md'>React</li>
                                <li className='bg-gray-800 text-[#ffc86b] px-2 rounded-md'>Redux</li>
                                <li className='bg-gray-800 text-[#ffc86b] px-2 rounded-md'>Firebase</li>
                            </ul>
                            <ul className='text-xl flex gap-3 justify-end pr-1'>
                                <a alt='link' href={Chatflix_Github}><li className='cursor-pointer hover:rotate-12 hover:text-[#f1cf29]'><FaGithub /></li></a>
                                <a alt='link' href={Chatflix_Link}><li className='cursor-pointer hover:rotate-12 hover:text-[#f1cf29]'><FaLink /></li></a>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row-reverse gap-10 pb-20 items-center'>
                        <div className='md:w-1/2 h-full border-1 shadow-lg cursor-pointer'>
                            <img src={hungerhub} className='rounded-2xl' alt='project1' />
                        </div>
                        <div className='text-left md:w-1/2'>
                            <h1 className='text-3xl font-medium pb-6'>HungerHub</h1>
                            <p className='bg-slate-400 bg-opacity-10 text-sm md:text-base p-2 md:p-4 rounded-2xl mb-6'>HungerHub is a food ordering platform built using parcel. Integrated lazy loading for faster response time and optimized initial loading. Ensured stability through comprehensive testing.</p>
                            <ul className='text-sm font-medium tracking-tight flex max-w-[600px] flex-wrap  gap-1 md:gap-2 justify-start mb-4'>
                                <li className='bg-gray-800 text-[#ffc86b] px-2 rounded-md'>Javascript</li>
                                <li className='bg-gray-800 text-[#ffc86b] px-2 rounded-md'>React</li>
                                <li className='bg-gray-800 text-[#ffc86b] px-2 rounded-md'>TailwindCSS</li>
                                <li className='bg-gray-800 text-[#ffc86b] px-2 rounded-md'>Redux</li>
                                <li className='bg-gray-800 text-[#ffc86b] px-2 rounded-md'>jest</li>
                            </ul>
                            <ul className='text-xl flex gap-3 justify-start pr-1'>
                                <a alt='link' href={HungerHub_Github}><li className='cursor-pointer hover:rotate-12 hover:text-[#f1cf29]'><FaGithub /></li></a>
                                <a alt='link' href={HungerHub_Link}><li className='cursor-pointer hover:rotate-12 hover:text-[#f1cf29]'><FaLink /></li></a>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-10 pb-20 items-center'>
                        <div className='md:w-1/2 h-full border-1 shadow-lg cursor-pointer'>
                            <img src={streamer} className='rounded-2xl' alt='project1' />
                        </div>
                        <div className='text-right md:w-1/2'>
                            <h1 className='text-3xl font-medium pb-6'>Streamer</h1>
                            <p className='bg-slate-400 bg-opacity-10 text-sm md:text-base p-2 md:p-4 rounded-2xl mb-6 '>A Video Streaming Platform, featuring Infinite Scroll, Live Chat with API pooling, and a powerful search bar with Debouncing. Reduced website load time by 300ms through search result caching.</p>
                            <ul className='text-sm font-medium tracking-tight flex max-w-[600px] flex-wrap  gap-1 md:gap-2 justify-end mb-4'>
                                <li className='bg-gray-800 text-[#ffc86b] px-2 rounded-md'>Javascript</li>
                                <li className='bg-gray-800 text-[#ffc86b] px-2 rounded-md'>React</li>
                                <li className='bg-gray-800 text-[#ffc86b] px-2 rounded-md'>TailwindCSS</li>
                                <li className='bg-gray-800 text-[#ffc86b] px-2 rounded-md'>Redux</li>
                                <li className='bg-gray-800 text-[#ffc86b] px-2 rounded-md'>Firebase</li>
                            </ul>
                            <ul className='text-xl flex gap-3 justify-end pr-1'>
                                <a alt='' href={Streamer_Github}><li className='cursor-pointer hover:rotate-12 hover:text-[#f1cf29]'><FaGithub /></li></a>
                                <a alt='' href={Streamer_Link}><li className='cursor-pointer hover:rotate-12 hover:text-[#f1cf29]'><FaLink /></li></a>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row-reverse gap-10 pb-20 items-center'>
                        <div className='md:w-1/2 h-full border-1 shadow-lg cursor-pointer pt-6'>
                            <img src={nasa} className='rounded-2xl' alt='project1' />
                        </div>
                        <div className='text-left md:w-1/2'>
                            <h1 className='text-3xl font-medium pb-6'>Nasa-Mission-Control</h1>
                            <p className='bg-slate-400 bg-opacity-10 text-sm md:text-base p-2 md:p-4 rounded-2xl mb-6'>Build backend backend services for NASA mission control, integrating MongoDB for data integrity and leveraging SpaceX API for historical data analysis.. Deployed on Docker containers via Amazon EC2, implementing CI/CD for efficient workflows.</p>
                            <ul className='text-sm font-medium tracking-tight flex max-w-[600px] flex-wrap  gap-1 md:gap-2 justify-start mb-4'>
                                <li className='bg-neutral-800 text-[#ffc86b] px-2 rounded-md'>Javascript</li>
                                <li className='bg-neutral-800 text-[#ffc86b] px-2 rounded-md'>React</li>
                                <li className='bg-neutral-800 text-[#ffc86b] px-2 rounded-md'>Docker</li>
                                <li className='bg-neutral-800 text-[#ffc86b] px-2 rounded-md'>Node</li>
                                <li className='bg-neutral-800 text-[#ffc86b] px-2 rounded-md'>Express</li>
                                <li className='bg-neutral-800 text-[#ffc86b] px-2 rounded-md'>MongoDB</li>
                                <li className='bg-neutral-800 text-[#ffc86b] px-2 rounded-md'>jest </li>
                            </ul>
                            <ul className='text-xl flex gap-3 justify-start pr-1'>
                                <a alt='' href={Nasa_Github}><li className='cursor-pointer hover:rotate-12 hover:text-[#f1cf29]'><FaGithub /></li></a>
                                <a alt='' href={Nasa_Link}><li className='cursor-pointer hover:rotate-12 hover:text-[#f1cf29]'><FaLink /></li></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Projects