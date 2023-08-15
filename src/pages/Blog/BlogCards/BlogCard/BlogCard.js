import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({blog}) => {
    const {title, img, article} = blog;
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center mx-20 mb-5'>
            <div>
                <h1 className='text-4xl font-semibold'>{title}</h1>
                <p className='mt-3 mb-5 text-justify lg:w-[95%] text-gray-400'>{article.slice(0, 500)}...</p>
                <Link className='bg-black text-white py-3 px-8 rounded'>Read More</Link>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default BlogCard;