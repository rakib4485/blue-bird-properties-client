import React from 'react';

const HomePropertyCard = ({place}) => {
    const {name, img} = place;
    return (
        <div className='h-[450px] relative group mt-10' style={{backgroundImage: `url(${img})`, backgroundSize:'cover'}}>
            <div className='bg-white w-[100px] rounded absolute top-5 text-center py-2 left-4 hidden group-hover:block'>
                2 Properties
            </div>
            <h4 className='text-white text-2xl font-semibold absolute bottom-5 left-2'>{name} / Dhaka</h4>
        </div>
    );
};

export default HomePropertyCard;