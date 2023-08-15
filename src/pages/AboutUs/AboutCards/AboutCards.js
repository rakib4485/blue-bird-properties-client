import React from 'react';
import { HiOutlineHeart, HiOutlineKey, HiOutlineStar, HiOutlineThumbUp } from "react-icons/hi";

const AboutCards = () => {
    return (
        <div>
            
            <div className="my-5 mx-20 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className='bg-black text-center p-10 rounded'>
                    <p className='flex justify-center text-red-600 text-6xl mb-4'><HiOutlineKey/></p>
                    <p className='text-red-600 mb-5'>Quick Deals</p>
                    <p className='text-white'>It’s fun and easy to create your professionally looking website using GoodHomes Theme!</p>
                </div>
                <div className='bg-black text-center p-10 rounded'>
                    <p className='flex justify-center text-red-600 text-6xl mb-4'><HiOutlineThumbUp/></p>
                    <p className='text-red-600 mb-5'>Experience</p>
                    <p className='text-white'>It’s fun and easy to create your professionally looking website using GoodHomes Theme!</p>
                </div>
                <div className='bg-black text-center p-10 rounded'>
                    <p className='flex justify-center text-red-600 text-6xl mb-4'><HiOutlineStar/></p>
                    <p className='text-red-600 mb-5'>Exclusive Offers</p>
                    <p className='text-white'>It’s fun and easy to create your professionally looking website using GoodHomes Theme!</p>
                </div>
                <div className='bg-black text-center p-10 rounded'>
                    <p className='flex justify-center text-red-600 text-6xl mb-4'><HiOutlineHeart/></p>
                    <p className='text-red-600 mb-5'>Happy Clients</p>
                    <p className='text-white'>It’s fun and easy to create your professionally looking website using GoodHomes Theme!</p>
                </div>
            </div>
        </div>
    );
};

export default AboutCards;