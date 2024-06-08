import React, { forwardRef } from 'react'
import { FaGithub, FaLink } from 'react-icons/fa'
import ReactPlayer from 'react-player'
import { projectLinks, images, videos } from './Constant';

const Projects = forwardRef((props, ref) => {

    return (
        <div ref={ref} id='projects' className='bg-neutral-900 h-fit text-white md:py-14 '>
            <div className='max-w-7xl mx-auto px-4'>
                <h1 className='py-10 md:py-20' data-aos="fade-up">
                    <span className='text-2xl font-medium'>Projects I have developed</span>
                    <span className='hidden md:inline-flex md:w-60 lg:w-72 h-[.7px] bg-gray-600 mb-2 ml-6'></span>
                </h1>
                <div className='flex flex-col gap-10 md:gap-36'>
                    <div className='flex flex-col md:flex-row gap-10 pb-20 items-center' data-aos="fade-up" data-aos-duration="1000">
                        <div className='w-full md:w-1/2 h-full border-1 shadow cursor-pointer overflow-hidden rounded-2xl'>
                            <div className='relative w-full h-0 pb-[56.25%]'>
                                <ReactPlayer
                                    className="absolute top-0 left-0 w-full h-full"
                                    url={videos.budpingVideo}
                                    light={images.budping}
                                    playing
                                    controls
                                />
                            </div>
                        </div>
                        <div className='text-right md:w-1/2'>
                            <h1 className='text-3xl font-medium pb-6'>BudPing</h1>
                            <p className='bg-slate-400 bg-opacity-10 text-sm md:text-base p-2 md:p-4 rounded-2xl mb-6'>BudPing is a real-time chat application with intuitive user interface that serves as a comprehensive solution for efficient communication, offering users a seamless platform to exchange messages instantly in real time</p>
                            <ul className='text-sm font-normal tracking-tight flex max-w-[600px] flex-wrap  gap-1 md:gap-2 justify-end mb-4'>
                                <li className='border border-gray-500 text-violet-200 px-2 rounded-md'>Javascript</li>
                                <li className='border border-gray-500 text-violet-200 px-2 rounded-md'>TailwindCSS</li>
                                <li className='border border-gray-500 text-violet-200 px-2 rounded-md'>React</li>
                                <li className='border border-gray-500 text-violet-200 px-2 rounded-md'>Redux</li>
                                <li className='border border-gray-500 text-violet-200 px-2 rounded-md'>Node</li>
                                <li className='border border-gray-500 text-violet-200 px-2 rounded-md'>Express</li>
                                <li className='border border-gray-500 text-violet-200 px-2 rounded-md'>Sockets</li>
                                <li className='border border-gray-500 text-violet-200 px-2 rounded-md'>MongoDB</li>
                            </ul>
                            <ul className='text-xl flex gap-3 justify-end pr-1'>
                                <a alt='link' href={projectLinks.Budping.Github}><li className='cursor-pointer hover:rotate-12 hover:text-[#f1cf29]'><FaGithub /></li></a>
                                <a alt='link' href={projectLinks.Budping.Link}><li className='cursor-pointer hover:rotate-12 hover:text-[#f1cf29]'><FaLink /></li></a>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row-reverse gap-10 pb-20 items-center' data-aos="fade-up" data-aos-duration="1000">
                        <div className='w-full md:w-1/2 h-full border-1 shadow cursor-pointer overflow-hidden rounded-2xl'>
                        <div className='relative w-full h-0 pb-[56.25%]'>
                                <ReactPlayer                                                    
                                    className="videoFrame"
                                    url={videos.chatflixVideo}
                                    light={images.chatflix}
                                    playing
                                    controls
                                    />
                            </div>
                        </div>
                        <div className='text-left md:w-1/2'>
                            <h1 className='text-3xl font-medium pb-6'>Chatflix</h1>
                            <p className='bg-slate-400 bg-opacity-10 text-sm md:text-base p-2 md:p-4 rounded-2xl mb-6'>Chatflix is a Streaming platform that offers to watch TV shows and movies on an internet-connected device. Integrate dynamic data through TMDB API. Ensured data security with Authentication and Protected routes.</p>
                            <ul className='text-sm font-medium tracking-tight flex max-w-[600px] flex-wrap  gap-1 md:gap-2 justify-start mb-4'>
                                <li className='border border-gray-500 text-violet-200  px-2 rounded-md'>Javascript</li>
                                <li className='border border-gray-500 text-violet-200  px-2 rounded-md'>TailwindCSS</li>
                                <li className='border border-gray-500 text-violet-200  px-2 rounded-md'>React</li>
                                <li className='border border-gray-500 text-violet-200  px-2 rounded-md'>Redux</li>
                                <li className='border border-gray-500 text-violet-200  px-2 rounded-md'>Firebase</li>
                            </ul>
                            <ul className='text-xl flex gap-3 justify-start pl-1'>
                                <a alt='link' href={projectLinks.Chatflix.Github}><li className='cursor-pointer hover:rotate-12 hover:text-[#f1cf29]'><FaGithub /></li></a>
                                <a alt='link' href={projectLinks.Chatflix.Link}><li className='cursor-pointer hover:rotate-12 hover:text-[#f1cf29]'><FaLink /></li></a>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-10 pb-20 items-center' data-aos="fade-up" data-aos-duration="1000">
                        <div className='w-full md:w-1/2 h-full border-1 shadow cursor-pointer overflow-hidden rounded-2xl'>
                            <div className='relative w-full h-0 pb-[56.25%]'>
                                <ReactPlayer                                                    
                                    className="videoFrame"
                                    url={videos.hungerhubVideo}
                                    light={images.hungerhub}
                                    playing
                                    controls
                                    />
                            </div>
                        </div>
                        <div className='text-right md:w-1/2'>
                            <h1 className='text-3xl font-medium pb-6'>HungerHub</h1>
                            <p className='bg-slate-400 bg-opacity-10 text-sm md:text-base p-2 md:p-4 rounded-2xl mb-6'>HungerHub is a food ordering platform built using parcel. Integrated lazy loading for faster response time and optimized initial loading. Ensured stability through comprehensive testing.</p>
                            <ul className='text-sm font-medium tracking-tight flex max-w-[600px] flex-wrap  gap-1 md:gap-2 justify-end mb-4'>
                                <li className='border border-gray-500 text-violet-200  px-2 rounded-md'>Javascript</li>
                                <li className='border border-gray-500 text-violet-200  px-2 rounded-md'>React</li>
                                <li className='border border-gray-500 text-violet-200  px-2 rounded-md'>TailwindCSS</li>
                                <li className='border border-gray-500 text-violet-200  px-2 rounded-md'>Redux</li>
                                <li className='border border-gray-500 text-violet-200  px-2 rounded-md'>jest</li>
                            </ul>
                            <ul className='text-xl flex gap-3 justify-end pl-1'>
                                <a alt='link' href={projectLinks.HungerHub.Github}><li className='cursor-pointer hover:rotate-12 hover:text-[#f1cf29]'><FaGithub /></li></a>
                                <a alt='link' href={projectLinks.HungerHub.Link}><li className='cursor-pointer hover:rotate-12 hover:text-[#f1cf29]'><FaLink /></li></a>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row-reverse gap-10 pb-20 items-center' data-aos="fade-up" data-aos-duration="1000">
                        <div className='md:w-1/2 h-full border-1 shadow-lg cursor-pointer'>
                            <img src={images.booksHub} className='rounded-2xl' alt='project1' />
                        {/* <ReactPlayer                                                    
                                className="videoFrame"
                                url={""}
                                light={images.booksHub}
                                playing
                                controls
                                /> */}
                        </div>
                        <div className='text-left md:w-1/2'>
                            <h1 className='text-3xl font-medium pb-6'>BooksHub</h1>
                            <p className='bg-slate-400 bg-opacity-10 text-sm md:text-base p-2 md:p-4 rounded-2xl mb-6 '>A MERN stack project showcasing books by genres with authentication using Passport.js.Users can add books to their personal bookshelf, explore detailed book information, and search for their favorite titles.</p>
                            <ul className='text-sm font-medium tracking-tight flex max-w-[600px] flex-wrap  gap-1 md:gap-2 justify-start mb-4'>
                                <li className='border border-gray-500 text-violet-200  px-2 rounded-md'>Javascript</li>
                                <li className='border border-gray-500 text-violet-200  px-2 rounded-md'>React</li>
                                <li className='border border-gray-500 text-violet-200  px-2 rounded-md'>TailwindCSS</li>
                                <li className='border border-gray-500 text-violet-200  px-2 rounded-md'>Node</li>
                                <li className='border border-gray-500 text-violet-200  px-2 rounded-md'>Express</li>
                                <li className='border border-gray-500 text-violet-200  px-2 rounded-md'>MongoDB</li>
                                <li className='border border-gray-500 text-violet-200  px-2 rounded-md'>Passport.js</li>
                            </ul>
                            <ul className='text-xl flex gap-3 justify-start pr-1'>
                                <a alt='' href={projectLinks.BooksHub.Github}><li className='cursor-pointer hover:rotate-12 hover:text-[#f1cf29]'><FaGithub /></li></a>
                                <a alt='' href={projectLinks.BooksHub.Link}><li className='cursor-pointer hover:rotate-12 hover:text-[#f1cf29]'><FaLink /></li></a>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-10 pb-20 items-center' data-aos="fade-up" data-aos-duration="1000">
                        <div className='md:w-1/2 h-full border-1 shadow-lg cursor-pointer pt-6'>
                            <img src={images.nasa} className='rounded-2xl' alt='project1' />
                        </div>
                        <div className='text-right md:w-1/2'>
                            <h1 className='text-3xl font-medium pb-6'>Nasa-Mission-Control</h1>
                            <p className='bg-slate-400 bg-opacity-10 text-sm md:text-base p-2 md:p-4 rounded-2xl mb-6'>Build backend backend services for NASA mission control, integrating MongoDB for data integrity and leveraging SpaceX API for historical data analysis.. Deployed on Docker containers via Amazon EC2, implementing CI/CD for efficient workflows.</p>
                            <ul className='text-sm font-medium tracking-tight flex max-w-[600px] flex-wrap  gap-1 md:gap-2 justify-end mb-4'>
                                <li className='bg-neutral-800 text-[#ffc86b] px-2 rounded-md'>Javascript</li>
                                <li className='bg-neutral-800 text-[#ffc86b] px-2 rounded-md'>React</li>
                                <li className='bg-neutral-800 text-[#ffc86b] px-2 rounded-md'>Node</li>
                                <li className='bg-neutral-800 text-[#ffc86b] px-2 rounded-md'>Express</li>
                                <li className='bg-neutral-800 text-[#ffc86b] px-2 rounded-md'>MongoDB</li>
                                <li className='bg-neutral-800 text-[#ffc86b] px-2 rounded-md'>jest </li>
                                <li className='bg-neutral-800 text-[#ffc86b] px-2 rounded-md'>CI/CD</li>
                                <li className='bg-neutral-800 text-[#ffc86b] px-2 rounded-md'>Docker</li>
                                <li className='bg-neutral-800 text-[#ffc86b] px-2 rounded-md'>AWS</li>
                            </ul>
                            <ul className='text-xl flex gap-3 justify-end pr-1'>
                                <a alt='' href={projectLinks.Nasa.Github}><li className='cursor-pointer hover:rotate-12 hover:text-[#f1cf29]'><FaGithub /></li></a>
                                <a alt='' href={projectLinks.Nasa.Link}><li className='cursor-pointer hover:rotate-12 hover:text-[#f1cf29]'><FaLink /></li></a>
                            </ul>
                        </div>
                    </div>
                    {/* <div className='flex flex-col md:flex-row gap-10 pb-20 items-center'>
                        <div className='md:w-1/2 h-full border-1 shadow-lg cursor-pointer'>
                        <ReactPlayer                                                    
                                className="videoFrame"
                                url="https://youtu.be/ePOcgH0Qx8o"
                                light={images.streamer}
                                playing
                                controls
                                />
                        </div>
                        <div className='text-right md:w-1/2'>
                            <h1 className='text-3xl font-medium pb-6'>Streamer</h1>
                            <p className='bg-slate-400 bg-opacity-10 text-sm md:text-base p-2 md:p-4 rounded-2xl mb-6 '>A Video Streaming Platform, featuring Infinite Scroll, Live Chat with API pooling, and a powerful search bar with Debouncing. Reduced website load time by 300ms through search result caching.</p>
                            <ul className='text-sm font-medium tracking-tight flex max-w-[600px] flex-wrap  gap-1 md:gap-2 justify-end mb-4'>
                                <li className='border border-gray-500 text-violet-200  px-2 rounded-md'>Javascript</li>
                                <li className='border border-gray-500 text-violet-200  px-2 rounded-md'>React</li>
                                <li className='border border-gray-500 text-violet-200  px-2 rounded-md'>TailwindCSS</li>
                                <li className='border border-gray-500 text-violet-200  px-2 rounded-md'>Redux</li>
                                <li className='border border-gray-500 text-violet-200  px-2 rounded-md'>Firebase</li>
                            </ul>
                            <ul className='text-xl flex gap-3 justify-end pr-1'>
                                <a alt='' href={projectLinks.Streamer.Github}><li className='cursor-pointer hover:rotate-12 hover:text-[#f1cf29]'><FaGithub /></li></a>
                                <a alt='' href={projectLinks.Streamer.Link}><li className='cursor-pointer hover:rotate-12 hover:text-[#f1cf29]'><FaLink /></li></a>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
})

export default Projects