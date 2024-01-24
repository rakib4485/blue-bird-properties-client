import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';

const BookingContact = ({property}) => {

    const {_id, rent, image, propertyName, location, authorEmail} = property;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;

        const fname = form.fname.value;
        const lname = form.lname.value;
        const email = form.email.value;
        const nid = form.nid.value;
        const phone = form.phone.value;
        const date = form.date.value;

        const renterInfo = {
            name : fname+ ' ' + lname,
            email,
            nid,
            phone
        }

        const booking = {
            propertyId : _id,
            email: user.email,
            propertyName,
            location, 
            renterInfo,
            image,
            payment: 'false',
            authorEmail,
            date
        }

        // Add Booking into database
        fetch('http://localhost:5000/bookings/', {
            method: 'POST', 
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Booking Confirmed')
            }
            else{
                toast.error(data.message);
            }
        })
    }

    return (
        <div>
            <h1 className="text-4xl font-semibold my-10">Contact Information</h1>
            <form onSubmit={handleBooking}>
                <div className='grid md:grid-cols-2 gap-5'>
                    <div>
                        <p className="m-1 text-slate-600">First Name</p>
                        <input type="text" name='fname' className="input input-bordered w-full" required/>
                    </div>
                    <div>
                        <p className="m-1 text-slate-600">Last Name</p>
                        <input type="text" name='lname' className="input input-bordered w-full" required/>
                    </div>
                    <div>
                        <p className="m-1 text-slate-600">Email</p>
                        <input type="text" name='email' className="input input-bordered w-full" required/>
                    </div>
                    <div>
                        <p className="m-1 text-slate-600">NID Number</p>
                        <input type="text" name='nid' className="input input-bordered w-full" required/>
                    </div>
                    <div>
                        <p className="m-1 text-slate-600">Contact Phone</p>
                        <input type="text" name='phone' className="input input-bordered w-full" required/>
                    </div>
                    <div>
                        <p className="m-1 text-slate-600">Tour Date</p>
                        <input type="date" name='date' className="input input-bordered w-full" required/>
                    </div>
                </div>
                <div className='flex items-center justify-around mt-10 bg-slate-200 py-6 rounded-md'>
                    <h1 className="text-3xl font-semibold uppercase">Amount to pay: </h1>
                    <h4 className="text-xl font-semibold">৳ {rent}</h4>
                </div>
                <div className='text-center my-10'>
                    <button type='submit' className='px-5 py-2 border-2 border-orange-300 uppercase font-semibold tracking-wide hover:bg-orange-300 duration-500'>Complete Booking</button>
                </div>
            </form>
        </div>
    );
};

export default BookingContact;