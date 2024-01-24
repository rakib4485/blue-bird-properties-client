import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import HomePropertyCard from './HomePropertyCard';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const HomeProperties = () => {

    const places = [
        {
            id: 1,
            name: 'Ghulshan',
            img: "https://i.ibb.co/P9ynptL/explore-one-img-1.jpg"
        },
        {
            id: 2,
            name: 'Dhanmondi',
            img: "https://i.ibb.co/LhbFsgq/explore-one-img-2.jpg"
        },
        {
            id: 3,
            name: 'Banani',
            img: "https://i.ibb.co/7VPpRdY/explore-one-img-3.jpg"
        },
        {
            id: 4,
            name: 'Baridhara',
            img: "https://i.ibb.co/HD9yFVc/explore-one-img-4.jpg"
        },
        {
            id: 5,
            name: 'Uttara',
            img: "https://i.ibb.co/nfccgk3/explore-one-img-5.jpg"
        },
        {
            id: 6,
            name: 'Mirpur',
            img: "https://i.ibb.co/7VPpRdY/explore-one-img-3.jpg"
        },
    ]

    // const {data: properties = []} = useQuery({
    //     queryKey: ['property'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/properties?area=null');
    //         const data = await res.json()
    //         return data;
    //     }
    // })

    return (
        <div className='mx-[7%] mt-20'>
            <h4 className='text-xl font-semibold text-green-600'>Find Your Properties</h4>
            <h1 className='text-5xl font-bold capitalize'>Explore the Places</h1>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                // loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[ Autoplay]}
                className="mySwiper"
            >
                {places.map(place => <SwiperSlide key={place.id}><Link to={`/properties?area=${place.name}`}><HomePropertyCard place={place} /></Link></SwiperSlide>)}

            </Swiper>
        </div>
    );
};

export default HomeProperties;