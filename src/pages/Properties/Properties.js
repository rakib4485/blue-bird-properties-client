import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import Loader from '../../components/Loader/Loader';

const Properties = () => {
    const { data: properties = [], refetch, isLoading } = useQuery({
        queryKey: ['properties'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/properties/');
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loader/>
    }

    console.log(properties);
    return (
        <div className='mx-[8%]'>
            <form>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div>
                        <h4 className="text-xl font-semibold">Choose Category</h4>
                        <select className="select select-accent w-full max-w-xs">
                            <option disabled selected>Dark mode or light mode?</option>
                            <option>Auto</option>
                            <option>Dark mode</option>
                            <option>Light mode</option>
                        </select>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold">Choose Category</h4>
                        <select className="select select-accent w-full max-w-xs">
                            <option disabled selected>Dark mode or light mode?</option>
                            <option>Auto</option>
                            <option>Dark mode</option>
                            <option>Light mode</option>
                        </select>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold">Choose Category</h4>
                        <select className="select select-accent w-full max-w-xs">
                            <option disabled selected>Dark mode or light mode?</option>
                            <option>Auto</option>
                            <option>Dark mode</option>
                            <option>Light mode</option>
                        </select>
                    </div>
                </div>
            </form>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    properties.map(property => <PropertyCard key={property._id} property={property} />)
                }
            </div>
        </div>
    );
};

export default Properties;