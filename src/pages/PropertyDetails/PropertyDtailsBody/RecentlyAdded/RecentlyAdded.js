import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../../components/Loader/Loader';
import { Link } from 'react-router-dom';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const RecentlyAdded = () => {
    const { data: properties = [], isLoading } = useQuery({
        queryKey: ['properties'],
        queryFn: async () => {
            const res = await fetch('https://blue-bird-server.vercel.app/properties/');
            const data = await res.json();
            return data;
        }
    })

    const recentProperties = [...properties].reverse().slice(0, 3);

    if (isLoading) {
        return <Loader />
    }
    return (
        <div className='bg-white shadow-md rounded p-5 mt-8'>
            <h2 className="text-2xl font-semibold">Recently Added</h2>

            {
                recentProperties.map(property => (
                    <div className='flex gap-2 items-center mt-5'>
                        <img src={property.image} alt="" className='w-[100px] h-[70px]' />
                        <div>
                            <Link to={`/propertyDetails/${property._id}`} className="text-lg hover:text-blue-700">{property.propertyName}</Link>
                            <p className='flex items-center gap-2'><HiOutlineLocationMarker className='text-blue-800' /><span className='text-gray-600'>{property.location}</span></p>
                            <p><span className='text-blue-400'>৳ {property.rent}</span> / month</p>
                        </div>
                    </div>
                ))
            }



        </div>
    );
};

export default RecentlyAdded;