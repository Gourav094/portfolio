import React, { forwardRef, useEffect, useState } from 'react'
import { FaRegCopy } from 'react-icons/fa'
import { CiMail } from "react-icons/ci";
import { Mail } from './Constant';
import {TiTick} from 'react-icons/ti'

const Contact =forwardRef((props, ref) => {
    const [showText,setShowText] = useState (false)

    useEffect(() => {
        setTimeout(() => {
            setShowText(false)
        },1000)
    },[showText])

    const handleCopyClipboard = () => {
        navigator.clipboard.writeText(Mail)
        setShowText(true)
    }
    return (
        <div ref={ref} id='contact' className='text-white px-24 py-32 bg-neutral-900 bg-opacity-95 w-full '>
            <div className='flex items-center justify-center flex-col gap-4'>
                <h1 className='text-4xl font-semibold'>Contact Me</h1>
                <h1>Interested in working together? We should schedule a time to chat.</h1>
                <h1>I'll bring the coffee.</h1>
                <div className='flex items-center mt-6 gap-2'>
                    <span className='text-lg'><CiMail /></span>
                    <span className='text-[#ffc86b]'>gouravgarg0203@gmail.com</span>
                    <div className='relative'>
                        <span className='text-lg cursor-pointer hover:text-[#ffc86b]' onClick={handleCopyClipboard}><FaRegCopy /></span>
                        {showText && <div className='absolute  top-full mt-2 flex item-center justify-start'>
                            <span className='text-green-600 text-xl rotate-12'><TiTick /></span>
                            <p className='text-sm font-thin'>Copied!</p>
                        </div>}
                    </div>
                </div>
                <a href={`mailto:${Mail}`} target="_blank" rel="noopener noreferrer"><button className='py-3 px-6 mt-6 shadow-lg rounded-lg bg-neutral-600 text-[#ffc86b] hover:bg-opacity-80'>Write to me @</button></a>
                
            </div>
        </div>
    )
})

export default Contact
