import React from 'react';
import serviceBg from '../../../assets/images/providing_one_bg.jpg'
import providingShape from '../../../assets/images/providing_one_shape_1.png'
import Button from '../../../components/Button/Button';
import { GiSpookyHouse, GiFamilyHouse } from "react-icons/gi";
import { MdApartment } from "react-icons/md";
import { FaBuildingFlag } from 'react-icons/fa6';

const HomeServices = () => {
    return (
        <div style={{background:`linear-gradient(rgba(40, 47, 68, .90), rgba(40, 47, 68, .90)), url(${serviceBg})`, backgroundSize: "cover", backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} className='py-32 px-[7%] flex gap-10 items-center'>
            <div className='w-[40%] relative'>
                <h4 className='text-xl font-semibold text-green-600'>What Are Your Looking</h4>
                <h1 className='text-5xl font-bold text-white mb-10 mt-3'>Providing the <br /> Best Real Estate Services</h1>
                <Button>Search Property</Button>
                <div className='absolute bottom-1 right-16'>
                    <img src={providingShape} alt="" className='animate-[wiggle_5s_ease-in-out_infinite]'/>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-10'>
                <div className='text-center text-white'>
                    <div className='text-6xl text-blue-500 bg-white p-10 text-center rounded hover:bg-blue-500 hover:text-white duration-500'><GiSpookyHouse className='mx-auto'/></div>
                    <h4 className='text-xl font-semibold mt-2'>Modern <br /> Villas</h4>
                </div>
                <div className='text-center text-white'>
                    <div className='text-6xl text-blue-500 bg-white p-10 rounded hover:bg-blue-500 hover:text-white duration-500'><GiFamilyHouse /></div>
                    <h4 className='text-xl font-semibold mt-2'>Furnished <br /> Homes</h4>
                </div>
                <div className='text-center text-white'>
                    <div className='text-6xl text-blue-500 bg-white p-10 rounded hover:bg-blue-500 hover:text-white duration-500'><MdApartment /></div>
                    <h4 className='text-xl font-semibold mt-2'>Sweet <br /> Apartment</h4>
                </div>
                <div className='text-center text-white'>
                    <div className='text-6xl text-blue-500 bg-white p-10 rounded hover:bg-blue-500 hover:text-white duration-500'><FaBuildingFlag /></div>
                    <h4 className='text-xl font-semibold mt-2'>Commercial <br /> Building</h4>
                </div>
            </div>
        </div>
    );
};

export default HomeServices;