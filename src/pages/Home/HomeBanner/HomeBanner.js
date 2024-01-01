import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


const HomeBanner = () => {
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [visible, setVisible] = useState('')
    const [area, setArea] = useState('')
    const navigate = useNavigate();


    useEffect(() => {
        fetch('https://blue-bird-server.vercel.app/properties?area=null')
        .then(res => res.json())
        .then(data => {
            setFilterData(data);
        })
    }, [])

    const handleFilter = event => {
        const value = event.target.value.toLowerCase();
        setArea(value);
        const res = filterData.filter( f => f.area.toLowerCase().includes(value))
        const unique = [...new Set(res.map((item) => item.area))];
        setData(unique)
        setVisible('')
        if(value === ""){
            setData([])
            setVisible('')
        }
    }

    const handleDefault = name => {
        const search = document.getElementById('search');
        search.value = name;
        setVisible('hidden')
        setArea(name)
    }

    const handleSearch = () => {
        navigate(`/properties?area=${area}`)
    }
    
    return (
        <div className='py-28 flex items-center' style={{backgroundImage: 'url(https://i.ibb.co/WxRSFgw/slider-1-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            <div className='ml-20 w-full'>
                <h2 className="text-7xl font-bold text-white">Find Your Future <br /> Dream Home</h2>
                <div className='w-[70%] mt-10 h-20 rounded flex items-center justify-evenly gap-6 bg-white'>
                    <FaSearch className='text-2xl ml-3'/>
                    <input type="text" id='search'  className='w-[60%] outline-none' placeholder='Search for city, property, agent and more...' onChange={handleFilter}/>
                    <button className='bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-lg font-semibold px-5 py-3 rounded-md mr-5' onClick={handleSearch}>Search Property</button>
                </div>
                {
                    data.length > 0 && 
                    <div className={`absolute bg-white z-50 p-5 ${visible}`}>
                    {
                        data.map((d,i) => (
                            <div key={i} className='cursor-pointer py-2' onClick={() => handleDefault(d)}>
                                {d}
                            </div>
                        ))
                    }
                </div>
                }
                <p className='text-white flex items-center gap-3 mt-5'><BsFillBuildingsFill className='text-4xl'/> Smart Real Estate Services All our the World</p>
            </div>
        </div>
    );
};

export default HomeBanner;