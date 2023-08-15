import React from 'react';
import { FaSearch } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";


const HomeBanner = () => {
    return (
        <div className='py-28 flex items-center' style={{backgroundImage: 'url(https://i.ibb.co/WxRSFgw/slider-1-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            <div className='ml-20 w-full'>
                <h2 className="text-7xl font-bold text-white">Find Your Future <br /> Dream Home</h2>
                <div className='w-[70%] mt-10 h-20 rounded flex items-center justify-evenly gap-6 bg-white'>
                    <FaSearch className='text-2xl ml-3'/>
                    <input type="text" className='w-[60%] outline-none' placeholder='Search for city, property, agent and more...'/>
                    <button className='bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-lg font-semibold px-5 py-3 rounded-md mr-5'>Search Property</button>
                </div>
                <p className='text-white flex items-center gap-3 mt-5'><BsFillBuildingsFill className='text-4xl'/> Smart Real Estate Services All our the World</p>
            </div>
        </div>
    );
};

export default HomeBanner;