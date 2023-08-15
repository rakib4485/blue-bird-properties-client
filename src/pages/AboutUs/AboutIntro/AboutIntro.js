import React from 'react';
import { Link } from 'react-router-dom';

const AboutIntro = () => {
    return (
        <div>
             <div>
                <div className="relative">
                    <div className="relative bg-gray-900">
                        <img
                            className="object-cover w-full h-[60vh]"
                            src='https://i.ibb.co/WFV3tMb/intro.jpg'
                            alt="Page Intro"
                        />
                        <div className="absolute inset-0 bg-black opacity-25"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center bg-blue-700 px-20 py-3">
                                <h1 className="text-3xl lg:text-6xl font-bold text-white mb-4">
                                    About Us
                                </h1>
                                <Link
                                    to="/"
                                    className="inline-block text-white font-bold py-2 px-4 rounded"
                                >
                                    <span className='hover:text-red-700'>Home</span> - About
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutIntro;