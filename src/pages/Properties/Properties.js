import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import Loader from '../../components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Properties = () => {
    const [area, setArea] = useState('')

    const [searchParams] = useSearchParams();
    useEffect(() => {
        setArea(searchParams.get('area'))
    }, [searchParams])

    let { data: properties = [], isLoading } = useQuery({
        queryKey: ['properties', area],
        queryFn: async () => {
            const res = await fetch(`https://blue-bird-server.vercel.app/properties?area=${area}`);
            const data = await res.json();
            setFinalResult(await data);
            return data;
        }
    });

    const { data: cities = [] } = useQuery({
        queryKey: ['properties'],
        queryFn: async () => {
            const res = await fetch(`https://blue-bird-server.vercel.app/properties?area=null`);
            const data = await res.json();          
            return data;
        }
    })

    console.log(cities)

    const [currentPage, setCurrentPage] = useState(1);
    const [finalResult, setFinalResult] = useState([]);
    const recordsPerPage = 9;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = [...finalResult].reverse().slice(firstIndex, lastIndex);
    const nPage = Math.ceil(finalResult.length / recordsPerPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);
    const [data, setData] = useState([])
    const [visible, setVisible] = useState('')


    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const changeCurrentPage = (id) => {
        setCurrentPage(id);
    }

    const nextPage = () => {
        if (currentPage !== nPage) {
            setCurrentPage(currentPage + 1);
        }
    }

    const handleFilter = event => {
        const value = event.target.value.toLowerCase();
        // setArea(value);
        const res = cities.filter(f => f.area.toLowerCase().includes(value))
        const unique = [...new Set(res.map((item) => item.area))];
        setData(unique)
        setVisible('')
        if (value === "") {
            setData([])
            setVisible('')
        }
    }

    const handleSearch = () => {

    }
    const handleDefault = name => {
        const search = document.getElementById('search');
        search.value = name;
        setVisible('hidden')
        setArea(name)
    }

    const handleSort = (event) => {
        console.log(event.target.value);
        const type = event.target.value;
        if(type === 'default'){
            setFinalResult(properties)
        }
        else{
            const result = properties.filter(property => {
            return property.propertyType === type;
        })
        console.log(result)
        setFinalResult(result);
        }
        
    }

    if (isLoading) {
        return <Loader />
    }

    if(finalResult.length < 1){
        return <Loader/>
    }

    // console.log(properties);
    return (
        <div className='mx-[8%]'>
            <div className=' mb-5 flex justify-between items-end'>
                <div className='w-[70%] mt-10 h-20 rounded flex items-center justify-evenly gap-6 bg-white border-2'>
                    <FaSearch className='text-2xl ml-3' />
                    <input type="text" id='search' defaultValue={area} className='w-[60%] outline-none' placeholder='Search for city, property, agent and more...' onChange={handleFilter} />
                    <button className='bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-lg font-semibold px-5 py-3 rounded-md mr-5' onClick={handleSearch}>Search Property</button>
                </div>
                <div>
                    <select className="select select-bordered w-full max-w-xs" onChange={handleSort}>
                        <option disabled selected>Filter</option>
                        <option value="default">Default</option>
                        <option value="Family">Family</option>
                        <option value="Bachelor">Bachelor</option>
                    </select>
                </div>
            </div>
            {
                data.length > 0 &&
                <div className={`absolute bg-white z-50 p-5 ${visible}`}>
                    {
                        data.map((d, i) => (
                            <div key={i} className='cursor-pointer py-2' onClick={() => handleDefault(d)}>
                                {d}
                            </div>
                        ))
                    }
                </div>
            }
            <div className='bg-slate-600 h-[2px] mb-5'></div>

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
                            numbers.map((n, i) => (
                                <button className={`join-item btn ${currentPage === n ? 'btn-active bg-purple-800 text-white' : ''}`} key={i} onClick={() => changeCurrentPage(n)}>{n}</button>
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