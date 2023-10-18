import React from 'react';

const PropertyVideo = () => {
    return (
        <div className='bg-white shadow-md rounded p-5 mt-8'>
            <h2 className="text-2xl font-semibold mb-5">Property Video</h2>   
            <video src="https://res.cloudinary.com/dtoj9n94u/video/upload/v1696745852/mp4_cnr_14_ratebypass_yes_dur_134_257_lmt_1669835332979732_mt_16_fdllti.mp4" controls height={500} width={500} className='mx-auto rounded-md'></video>
        </div>
    );
};

export default PropertyVideo;