import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeProperties from '../HomeProperties/HomeProperties';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <HomeProperties/>
            <WhyChooseUs/>
        </div>
    );
};

export default Home;