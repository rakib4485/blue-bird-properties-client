import React from 'react';
import AboutIntro from './AboutIntro/AboutIntro';
import AboutDetails from './AboutDetails/AboutDetails';
import AboutCards from './AboutCards/AboutCards';
import AboutBanner from './AboutBanner/AboutBanner';
import Clients from './Clients/Clients';

const AboutUs = () => {
    return (
        <div className=''>
            <AboutIntro/>
            <AboutDetails/>
            <AboutBanner/>
            <AboutCards/>
            <Clients/>
        </div>
    );
};

export default AboutUs;