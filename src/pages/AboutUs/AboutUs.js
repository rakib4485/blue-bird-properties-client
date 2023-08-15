import React from 'react';
import { HiOutlineBadgeCheck, HiOutlineHeart, HiOutlineKey, HiOutlineStar, HiOutlineThumbUp } from "react-icons/hi";
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className=''>
            <div className='mx-20 my-5 grid grid-cols-1 lg:grid-cols-2 items-center'>
                <div>
                    <img src="https://i.ibb.co/RNYNV54/about-page-img-1.jpg" alt="" />
                </div>
                <div>
                    <p className='text-green-600 font-semibold'>Find Your Properties</p>
                    <h1 className='text-5xl font-bold my-2'>Leader in the Market</h1>
                    <h3 className='text-3x my-4 text-blue-500'>Lorem ipsum dolor sit amet, con adipiscing elit tiam convallis elit id impedie.</h3>
                    <p className='text-justify'>Quisq commodo simply free ornar tortor. Excepteur sint occaecat sunt in culpa qui officia deserunt mollit anim id est laborum. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.z</p>
                    <div className='mt-7'>
                        <p className='flex gap-3 items-center'><HiOutlineBadgeCheck className='text-green-600'/> Invest in your simply neighborhood</p>
                        <p className='flex gap-3 items-center my-3'><HiOutlineBadgeCheck className='text-green-600'/> Support people in free text extreme need</p>
                        <p className='flex gap-3 items-center'><HiOutlineBadgeCheck className='text-green-600'/> Largest global industrial business community</p>
                    </div>
                </div>
            </div>
            <div>
            <div>
                <div className="relative">
                    <div className="relative bg-gray-900">
                        <img
                            className="object-cover w-full h-[60vh]"
                            src='https://i.ibb.co/pr2VcND/about-page-img-2.jpg'
                            alt="Page Intro"
                        />
                        <div className="absolute inset-0 bg-black opacity-25"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <h1 className="text-6xl font-bold text-white mb-5 lg:mb-10 lg:w-2/3 mx-auto">
                                Are You Ready To Buy Dream House?
                                </h1>
                                <Link className='text-white bg-blue-700 py-5 px-10 mt-9 rounded font-bold'>Search Property</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
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
            <div className="my-9 mx-36">
                <h1 className="text-3xl text-center">Our Clients</h1>
                <div className='bg-red-700 p-[2px] w-[60px] mx-auto'></div>
                <div className="mt-5 grid grid-cols-2 lg:grid-cols-4">
                    <div className='border'>
                        <img className='py-7 px-16' src="https://i.ibb.co/z8mHyZj/partner1.png" alt="" />
                    </div>
                    <div className='border'>
                        <img className='py-7 px-16' src="https://i.ibb.co/tKkf0w8/partner2.png" alt="" />
                    </div>
                    <div className='border'>
                        <img className='py-7 px-16' src="https://i.ibb.co/8Bk1wLz/partner3.png" alt="" />
                    </div>
                    <div className='border'>
                        <img className='py-7 px-16' src="https://i.ibb.co/pWJT9gV/partner4.png" alt="" />
                    </div>
                    <div className='border'>
                        <img className='py-7 px-16' src="https://i.ibb.co/ZH4140q/partner5.png" alt="" />
                    </div>
                    <div className='border'>
                        <img className='py-7 px-16' src="https://i.ibb.co/0n9PjvQ/partner6.png" alt="" />
                    </div>
                    <div className='border'>
                        <img className='py-7 px-16' src="https://i.ibb.co/Cm48QRN/partner7.png" alt="" />
                    </div>
                    <div className='border'>
                        <img className='py-7 px-16' src="https://i.ibb.co/xG18RKN/partner8.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;