import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/HeroSection'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Partners from '../components/Partners'
import Features from '../components/Features'
import Questions from '../components/Questions';
import Slider from '../components/Slider'
import Footer from '../components/Footer'

const Homepage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Section1 />
            <Section2 />
            <Slider />
            <Partners />
            <Features />
            <Questions />
            <Footer />
        </>
    )
}

export default Homepage