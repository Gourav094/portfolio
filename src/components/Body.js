import React, { useRef } from 'react'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import MoreProjects from './MoreProjects'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'

const Body = () => {
    const heroSection = useRef(null);
    const aboutSection = useRef(null);
    const projectsSection = useRef(null);
    const contactSection = useRef(null);


    const sectionsRefs = {
        heroSection,
        aboutSection,
        projectsSection,
        contactSection,
    };

    return (
        <div className=''>
            <Header sectionsRefs = {sectionsRefs}/>
            <Hero  ref={heroSection}/>
            <About ref={aboutSection}/>
            <Projects ref={projectsSection}/>
            <MoreProjects/>
            <Contact ref={contactSection}/>
            <Footer/>
        </div>
    )
}

export default Body
