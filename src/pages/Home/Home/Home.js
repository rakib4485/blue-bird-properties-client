import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeProperties from '../HomeProperties/HomeProperties';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import HotOffers from '../HotOffers/HotOffers';
import HomeServices from '../HomeServices/HomeServices';
import Clients from '../../AboutUs/Clients/Clients';

const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <HomeProperties/>
            <WhyChooseUs/>
            <HotOffers/>
            <HomeServices/>
            <Clients/>
        </div>
    );
};

export default Home;