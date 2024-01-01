import React from 'react';
import { HiOutlineStar } from 'react-icons/hi';

const SingleReviewCard = ({review}) => {
    const {name,img, comment,ratting} = review;
    return (
        <div>
            <div className='flex justify-between gap-8 my-5 items-center'>
                <div className='w-[150px] h-[150px] rounded-full'>
                    <img src={img} alt="" className='w-full h-full rounded-full'/>
                </div>
                <div className='w-[80%]'>
                    <h4 className="text-xl font-semibold">{name}</h4>
                    <p className='flex items-center gap-2'><HiOutlineStar className='text-orange-300' />{ratting ? ratting : `4`} / 5</p>
                    <p className='text-[#888] text-justify'>{comment}</p>
                </div>
            </div>
            <div className='h-[2px] bg-slate-400 my-10'></div>
        </div>

    );
};

export default SingleReviewCard;