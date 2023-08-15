import React from 'react';
import { Link } from 'react-router-dom';

const AboutBanner = () => {
    return (
        <div>
            
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
        </div>
    );
};

export default AboutBanner;