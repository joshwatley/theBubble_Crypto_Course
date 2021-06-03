import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import IncludedSection from '../components/IncludedSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import MidFooter from '../components/MidFooter'
import MissionSection from '../components/MissionSection'
import ContactSection from '../components/ContactSection'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <IncludedSection />
            <MidFooter />
            <MissionSection />
            <ContactSection />
        </>
    );
}

export default Home
