import React from 'react';

const FeatureCard = ({feature}) => {
    const {title, img, describe} = feature;
    return (
        <div className='text-center mt-16 mx-[10%]'>
            <img src={img} alt="" className='h-32 mx-auto'/>
            <h3 className="text-2xl text-center font-semibold my-2">{title}</h3>
            <p className="text-center">{describe}</p>
        </div>
    );
};

export default FeatureCard;