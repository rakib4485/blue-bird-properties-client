import React from 'react';
import { HiOutlineBadgeCheck } from "react-icons/hi";

const AboutDetails = () => {
    return (
        <div>
            
            <div className='mx-20 my-9 grid grid-cols-1 lg:grid-cols-2 items-center'>
                <div>
                    <img src="https://i.ibb.co/RNYNV54/about-page-img-1.jpg" alt="" />
                </div>
                <div>
                    <p className='text-green-600 font-semibold'>Find Your Properties</p>
                    <h1 className='text-5xl font-bold my-2'>Leader in the Market</h1>
                    {/* <h3 className='text-3x my-4 text-blue-500'>Lorem ipsum dolor sit amet, con adipiscing elit tiam convallis elit id impedie.</h3> */}
                    <p className='text-justify'>Bluebird Rent is a leading-rental portal web site with a comprehensive search facility for apartment/flat - finders to find any kind of apartment they wish to live in.So, please take a look around our extensive property listing and feel free to get in touch with us.</p>
                    <div className='mt-7'>
                        <p className='flex gap-3 items-center'><HiOutlineBadgeCheck className='text-green-600'/> Invest in your simply neighborhood</p>
                        <p className='flex gap-3 items-center my-3'><HiOutlineBadgeCheck className='text-green-600'/> Support people in free text extreme need</p>
                        <p className='flex gap-3 items-center'><HiOutlineBadgeCheck className='text-green-600'/> Largest global industrial business community</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutDetails;