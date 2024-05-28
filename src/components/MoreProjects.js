import React, { useState } from 'react'
import { FaRegFolder } from 'react-icons/fa'
import { FiExternalLink } from "react-icons/fi";
import { projectLinks } from './Constant';

const MoreProjects = () => {

    const [show,setShow] = useState(false)

    return (
        <div className='bg-neutral-900 h-fit text-white py-10'>
            <div className='max-w-6xl mx-auto px-4 md:py-24'>
                <h2 className='text-center text-xl md:text-3xl font-semibold mb-20' data-aos="fade-up">Other Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 lg:px-10'  data-aos="fade-up" data-aos-duration="600">
                    <div className="w-full h-full lg:h-70 rounded-lg bg-gray-200 bg-opacity-95 p-4 lg:p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer">
                        <div className='flex justify-between items-center'>
                            <a alt='link' href={projectLinks.Streamer.Github}><span className='text-2xl text-gray-700'><FaRegFolder /></span></a>
                            <a alt='link' href={projectLinks.Streamer.Link}><span className='text-2xl text-gray-700'><FiExternalLink /></span></a>

                        </div>
                        <div>
                            <h2 className='text-xl font-bold tracking-wide text-gray-600 group-hover:text-gray-800'>Streamer</h2>
                            <p className='text-sm mt-3 text-gray-500'>A Video Streaming Platform, featuring Infinite Scroll, Live Chat with API pooling, and a powerful search bar with Debouncing.</p>
                        </div>
                        <ul className='text-xs md:text-sm text-gray-500 flex gap-2 flex-wrap '>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">Javascript</li>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">TailwindCSS</li>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">React</li>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">Redux</li>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">Firebase</li>
                        </ul>
                    </div>
                    <div className="w-full h-full lg:h-70 rounded-lg bg-gray-200 bg-opacity-95 p-4 lg:p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer">
                        <div className='flex justify-between items-center'>
                            <a alt='link' href={projectLinks.UrlShortener.Github}><span className='text-2xl text-gray-700'><FaRegFolder /></span></a>
                            <a alt='link' href={projectLinks.UrlShortener.Link}><span className='text-2xl text-gray-700'><FiExternalLink /></span></a>

                        </div>
                        <div>
                            <h2 className='text-xl font-bold tracking-wide text-gray-600 group-hover:text-gray-800'>Url Shortener</h2>
                            <p className='text-sm mt-3 text-gray-500'>A MERN stack application used to shorten the long URL's. Best practices and techniques were implemented to provide persistent data.</p>
                        </div>
                        <ul className='text-xs md:text-sm text-gray-500 flex gap-2 flex-wrap '>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">Javascript</li>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">Node</li>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">React</li>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">Express</li>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">MongoDB</li>
                        </ul>
                    </div>
                    <div className="w-full h-full lg:h-70 rounded-lg bg-gray-200 bg-opacity-95 p-4 lg:p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer">
                        <div className='flex justify-between items-center'>
                            <a alt='link' href={projectLinks.Ticktick.Github}><span className='text-2xl text-gray-700'><FaRegFolder /></span></a>
                            <a alt='link' href={projectLinks.Ticktick.Link}><span className='text-2xl text-gray-700'><FiExternalLink /></span></a>

                        </div>
                        <div>
                            <h2 className='text-xl font-bold tracking-wide text-gray-600 group-hover:text-gray-800'>Tick Tick</h2>
                            <p className='text-sm mt-3 text-gray-500'>A task management application built with the MERN stack, offering seamless task creation, updating, and deletion</p>
                        </div>
                        <ul className='text-xs md:text-sm text-gray-500 flex gap-2 flex-wrap '>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">Javascript</li>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">React</li>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">Redux-thunk</li>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">Node</li>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">Express</li>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">MongoDB</li>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">JWT</li>
                        </ul>
                    </div>
                    
                    {show && <> 
                    <div className="w-full h-full lg:h-70 rounded-lg bg-gray-200 bg-opacity-95 p-4 lg:p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer">
                        <div className='flex justify-between items-center'>
                            <a alt='link' href={projectLinks.NotesApp.Github} ><span className='text-2xl text-gray-700'><FaRegFolder /></span></a>
                            <a alt='link' href={projectLinks.NotesApp.Link} ><span className='text-2xl text-gray-700'><FiExternalLink /></span></a>

                        </div>
                        <div>
                            <h2 className='text-xl font-bold tracking-wide text-gray-600 group-hover:text-gray-800'>Notes</h2>
                            <p className='text-sm mt-3 text-gray-500'>Project based on Javascript and React.js, stores user's data on their browser using local storage</p>
                        </div>
                        <ul className='text-xs md:text-sm text-gray-500 flex gap-2 flex-wrap '>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">Html</li>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">Css</li>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">Javascript</li>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">React</li>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">local storage</li>
                        </ul>
                    </div>
                    <div className="w-full h-full lg:h-70 rounded-lg bg-gray-200 bg-opacity-95 p-4 lg:p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer">
                        <div className='flex justify-between items-center'>
                            <a alt='link' href={projectLinks.WeatherForecast.Github}><span className='text-2xl text-gray-700'><FaRegFolder /></span></a>
                            <a alt='link' href={projectLinks.WeatherForecast.Link}><span className='text-2xl text-gray-700'><FiExternalLink /></span></a>

                        </div>
                        <div>
                            <h2 className='text-xl font-bold tracking-wide text-gray-600 group-hover:text-gray-800'>Weather</h2>
                            <p className='text-sm mt-3 text-gray-500'>Developed with React.js and TailwindCss, with seamless design. By integrating with a weather API, it delivers accurate weather information for any location</p>
                        </div>
                        <ul className='text-xs md:text-sm text-gray-500 flex gap-2 flex-wrap '>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">Javascript</li>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">React</li>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">TailwindCSS</li>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">Weather API</li>
                        </ul>
                    </div>
                    <div className="w-full h-full lg:h-70 rounded-lg bg-gray-200 bg-opacity-95 p-4 lg:p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer">
                        <div className='flex justify-between items-center'>
                            <a alt='link' href={projectLinks.Todo.Github} ><span className='text-2xl text-gray-700'><FaRegFolder /></span></a>
                            <a alt='link' href={projectLinks.Todo.Link} ><span className='text-2xl text-gray-700'><FiExternalLink /></span></a>

                        </div>
                        <div>
                            <h2 className='text-xl font-bold tracking-wide text-gray-600 group-hover:text-gray-800'>Todo-list</h2>
                            <p className='text-sm mt-3 text-gray-500'>Website built with React.js, Tailwind CSS, and redux store for state management. We can create new todo and get the list according to active status.</p>
                        </div>
                        <ul className='text-xs md:text-sm text-gray-500 flex gap-2 flex-wrap '>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">TailwindCSS</li>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">Javascript</li>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">React</li>
                            <li className="bg-gray-200 text-[#185CA3] py-1 px-2 rounded-md text-sm backdrop-blur-sm self-end">Redux</li>
                        </ul>
                    </div>
                     </>}
                </div>
                <div className='flex justify-center mt-14'>
                    <button className='text-center rounded-lg py-2 px-4 text-slate-900 bg-[#ffc86b] font-medium text-lg hover:bg-opacity-80 duration-300' onClick={() => setShow(!show)}>{!show ? 'Show More' : 'Show Less'}</button>
                </div>
            </div>
        </div>
    )
}

export default MoreProjects