import React from 'react';

const PropertyVideo = ({video}) => {
    return (
        <div className='bg-white shadow-md rounded p-5 mt-8'>
            <h2 className="text-2xl font-semibold mb-5">Property Video</h2>   
            <video src={video} controls height={500} width={500} className='mx-auto rounded-md'></video>
        </div>
    );
};

export default PropertyVideo;