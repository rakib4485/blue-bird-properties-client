import React from 'react';
import { HiOutlineCheckCircle } from "react-icons/hi";

const ContactCards = () => {
    return (
        <div className='my-9 mx-20'>
            <div className='grid grid-cols-1 lg:grid-cols-4 cursor-pointer'>
                <div className='hover:bg-emerald-500 hover:text-white p-10'>
                    <p className='text-2xl font-semibold mb-8'>Austin</p>
                    <p className='flex gap-2 items-center'><HiOutlineCheckCircle/> 22 Texas West Hills</p>
                    <p className='flex gap-2 items-center'><HiOutlineCheckCircle/> needhelp@tolins.com</p>
                    <p className='flex gap-2 items-center'><HiOutlineCheckCircle/> 888 999 0000</p>
                </div>
                <div className='hover:bg-emerald-500 hover:text-white p-10'>
                    <p className='text-2xl font-semibold mb-8'>Boston</p>
                    <p className='flex gap-2 items-center'><HiOutlineCheckCircle/> 22 Texas West Hills</p>
                    <p className='flex gap-2 items-center'><HiOutlineCheckCircle/> needhelp@tolins.com</p>
                    <p className='flex gap-2 items-center'><HiOutlineCheckCircle/> 888 999 0000</p>
                </div>
                <div className='hover:bg-emerald-500 hover:text-white p-10'>
                    <p className='text-2xl font-semibold mb-8'>Austin</p>
                    <p className='flex gap-2 items-center'><HiOutlineCheckCircle/> 22 Texas West Hills</p>
                    <p className='flex gap-2 items-center'><HiOutlineCheckCircle/> needhelp@tolins.com</p>
                    <p className='flex gap-2 items-center'><HiOutlineCheckCircle/> 888 999 0000</p>
                </div>
                <div className='hover:bg-emerald-500 hover:text-white p-10'>
                    <p className='text-2xl font-semibold mb-8'>Austin</p>
                    <p className='flex gap-2 items-center'><HiOutlineCheckCircle/> 22 Texas West Hills</p>
                    <p className='flex gap-2 items-center'><HiOutlineCheckCircle/> needhelp@tolins.com</p>
                    <p className='flex gap-2 items-center'><HiOutlineCheckCircle/> 888 999 0000</p>
                </div>
            </div>
        </div>
    );
};

export default ContactCards;