import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RentInfo from './RentInfo/RentInfo';
import BookingContact from './BookingContact/BookingContact';

const BookingPage = () => {
    const property = useLoaderData();
    const {_id} = property;
    return (
        <div className='min-h-screen mx-[10%] mt-20'>
            <h2 className="text-4xl font-semibold">Property Id #{_id}</h2>
            <RentInfo property={property}/>
            <BookingContact property={property}/>
        </div>
    );
};

export default BookingPage;