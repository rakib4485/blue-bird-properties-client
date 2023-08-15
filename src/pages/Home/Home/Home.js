import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeProperties from '../HomeProperties/HomeProperties';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import HotOffers from '../HotOffers/HotOffers';

const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <HomeProperties/>
            <WhyChooseUs/>
            <HotOffers/>
        </div>
    );
};

export default Home;