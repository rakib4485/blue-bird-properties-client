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
                    <h3 className='text-3x my-4 text-blue-500'>Lorem ipsum dolor sit amet, con adipiscing elit tiam convallis elit id impedie.</h3>
                    <p className='text-justify'>Quisq commodo simply free ornar tortor. Excepteur sint occaecat sunt in culpa qui officia deserunt mollit anim id est laborum. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.z</p>
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