import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ContactForm = () => {
    return (
        <div className='mt-6 mb-10 w-[1150px] mx-auto'>
           <div className='lg:flex'>
            <div className='lg:w-3/4'>
                <h3 className='text-2xl text-green-500'>Contact Us</h3>
                <h1 className='text-4xl lg:text-6xl font-semibold lg:font-bold my-4 lg:w-2/3'>Love to Hear From You</h1>
                <p className='lg:w-2/3'>If you face any problem or if you have any query Please contact us without an any hesitation.</p>
                <div className='mt-5 flex gap-3 items-center'>
                    <Link className='text-gray-600 bg-gray-300 hover:bg-green-500 hover:text-white font-bold p-2 rounded' to=''><FaFacebookF/></Link>
                    <Link className='text-gray-600 bg-gray-300 hover:bg-green-500 hover:text-white font-bold p-2 rounded' to=''><FaInstagram/></Link>
                    <Link className='text-gray-600 bg-gray-300 hover:bg-green-500 hover:text-white font-bold p-2 rounded' to=''><FaTwitter/></Link>
                    <Link className='text-gray-600 bg-gray-300 hover:bg-green-500 hover:text-white font-bold p-2 rounded' to=''><FaYoutube/></Link>
                </div>
            </div>
            <div>
                <form action="">
                    <input type="text" placeholder='Your Name' className='py-3 px-16 bg-gray-200 outline-none' />
                    <input type="email" placeholder='Email Address' className='py-3 px-16 ml-2 bg-gray-200 outline-none' />
                    <br />
                    <input type="text" placeholder='Phone Number' className='py-3 my-3 px-16 bg-gray-200 outline-none' />
                    <input type="text" placeholder='Subject' className='py-3 px-16 my-3 ml-2 bg-gray-200 outline-none' />
                    <textarea name="" id="" cols="71" rows="10" placeholder='Write Message' className='bg-gray-200 outline-none px-3 mb-2'></textarea>
                    <br />
                    <input className='bg-blue-700 py-4 px-10 text-white font-semibold rounded-md outline-none' type="submit" value="Submit" />
                </form>
            </div>
           </div> 
        </div>
    );
};

export default ContactForm;