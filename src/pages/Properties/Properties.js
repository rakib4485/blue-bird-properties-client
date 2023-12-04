import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import Loader from '../../components/Loader/Loader';

const Properties = () => {

    

    const { data: properties = [], isLoading } = useQuery({
        queryKey: ['properties'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/properties/');
            const data = await res.json();
            return data;
        }
    })

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 9;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = [...properties].reverse().slice(firstIndex, lastIndex);
    const nPage = Math.ceil(properties.length / recordsPerPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);

    const prevPage = () => {
        if(currentPage !== 1){
            setCurrentPage(currentPage -1);
        }
    }

    const changeCurrentPage = (id) => {
        setCurrentPage(id);
    }

    const nextPage = () => {
        if(currentPage !== nPage) {
            setCurrentPage(currentPage + 1);
        }
    }

    if(isLoading){
        return <Loader/>
    }

    // console.log(properties);
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
                    records.map(property => <PropertyCard key={property._id} property={property} />)
                }
            </div>

            {
                nPage > 1 &&
                <div className='text-center my-5'>
                <div className="join mx-auto">
                    <button className="join-item btn hover:bg-purple-800 hover:text-white duration-500 transition-all" onClick={prevPage}>Prev</button>
                    {
                        numbers.map((n,i) => (
                            <button className={`join-item btn ${currentPage === n ? 'btn-active bg-purple-800 text-white': ''}`} key={i} onClick={() => changeCurrentPage(n)}>{n}</button>
                        ))
                    }
                    <button className="join-item btn hover:bg-purple-800 hover:text-white duration-500 transition-all" onClick={nextPage}>Next</button>
                </div>
                </div>
            }
        </div>
    );
};

export default Properties;