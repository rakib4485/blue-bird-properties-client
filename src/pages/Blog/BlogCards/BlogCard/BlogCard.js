import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({blog}) => {
    const {title, img, article} = blog;
    return (
        <div className='md:flex even:flex-row-reverse  items-center mx-20'>
            <div className='w-1/2 px-[50px]'>
                <h1 className='text-4xl font-semibold'>{title}</h1>
                <p className='mt-3 mb-5 text-justify lg:w-[95%] text-gray-400'>{article.slice(0, 200)}...</p>
                <Link to='/blogDetails' className='bg-black text-white py-3 px-8 rounded'>Read More</Link>
            </div>
            <div className='w-1/2'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default BlogCard;