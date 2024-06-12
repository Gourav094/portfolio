import React from 'react'

const Header = ({sectionsRefs}) => {
    const scrollDown = (ref) => {
        
        window.scrollTo({
            top: ref?.current?.offsetTop,
            behavior: 'smooth',
        });
    };

    return (
        <div className='bg-neutral-950 bg-opacity-95 top-0 z-50 sticky'>
            <div className='py-8 px-4 flex justify-between items-center max-w-7xl mx-auto'>
                <button className=' rounded-full h-10 w-10 text-3xl font-bold text-[#ffc86b] px-1 font-sans'>G</button>
                <div>
                    <ul className='flex gap-6 text-[18px] text-gray-300'>
                        <li className='cursor-pointer hover:text-white' onClick={() => scrollDown(sectionsRefs.heroSection)}>Home</li>
                        <li className='cursor-pointer hover:text-white' onClick={() => scrollDown(sectionsRefs.aboutSection)}>About</li>
                        <li className='cursor-pointer hover:text-white' onClick={() => scrollDown(sectionsRefs.projectsSection)}>Projects</li>
                        <li className='cursor-pointer hover:text-white' onClick={() => window.open("https://medium.com/@garggourav012")}>Blogs</li>
                        <li className='cursor-pointer hover:text-white' onClick={() => scrollDown(sectionsRefs.contactSection)}>Contact</li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
