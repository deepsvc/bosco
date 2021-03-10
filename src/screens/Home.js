import React from 'react';
import Header from '../components/Header';
import HowItWorks from '../components/HowItWorks';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import SpecifiService from '../components/SpecifiService';
import Testimonial from '../components/Testimonial';
import Address from '../components/Address';

function Home() {
    return (
        <div>
            <Header />

            <HowItWorks />
            <About />
            <Services />
            <SpecifiService />
            <Testimonial />
            <Contact />
            <Address />
        </div>
    );
}

export default Home;
