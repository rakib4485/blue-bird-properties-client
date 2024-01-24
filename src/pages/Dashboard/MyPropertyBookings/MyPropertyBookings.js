import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const MyPropertyBookings = () => {
    const {user} = useContext(AuthContext);
    const [rejectId, setRejectId] = useState('');
    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myPropertyBooking?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    const closeModal = (name) => {
        // Get the modal element
        const modal = document.getElementById(name);
    
        // Hide the modal
        modal.close();
      }

    const handleConfirm = id => {
        const url = `http://localhost:5000/booking/${id}`;
        const action = {
            action: 'Confirmed'
        }
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(action)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('booking confirmed')
                refetch();
            }
        })
    }

    const handleReject = (event) => {
        event.preventDefault();

        const reason = event.target.reason.value;
        const url = `http://localhost:5000/booking/${rejectId}`;
        const action = {
            action: reason
        }
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(action)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('booking confirmed')
                refetch();
                closeModal('reject-modal');
            }
        })
    }
    console.log(bookings)
    return (
        <div>
            <h3 className="text-3xl mb-5">My Property Bookings</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Property Name</th>
                            <th>Booking Name</th>
                            <th>Booking Email</th>
                            <th>Booking Phone</th>
                            <th>Booking NID</th>
                            <th>House Tour Date</th>
                            <th>Accept</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...bookings].reverse().map((booking, i) => (
                            <tr className="hover" key={booking._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <Link to={`/propertyDetails/${booking.propertyId}`}><img src={booking.image} alt="" className='w-[200px]' /></Link>
                                </td>
                                <td><Link to={`/propertyDetails/${booking.propertyId}`}>{booking.propertyName}</Link></td>
                                <td>{booking.renterInfo.name}</td>
                                <td>{booking.renterInfo.email}</td>
                                <td>{booking.renterInfo.phone}</td>
                                <td>{booking.renterInfo.nid}</td>
                                <td>
                                    {booking.date}
                                </td>
                                <td>
                                    {booking.action ? `${booking.action}`: <span className='btn btn-sm btn-primary' onClick={() => handleConfirm(booking._id)}>Confirm</span>}
                                </td>
                                <td>
                                <span className={`btn btn-sm text-white btn-error ${booking.action ? 'btn-disabled' : ''}`} onClick={() => {
                                    document.getElementById('reject-modal').showModal();
                                    setRejectId(booking._id);
                                }}>Reject</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <dialog id="reject-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h2 className="text-xl font-semibold mt-5 capitalize text-center">Do you really want to Reject The Booking!!</h2>
          <form className='my-5' onSubmit={handleReject}>
            <input type="text" name='reason' placeholder="Enter Reason behind the reject" className="input input-bordered input-primary w-full" required />
            <p className='text-right'><button type='submit' className="btn btn-outline btn-primary mt-5">Request</button></p>
          </form>


        </div>
      </dialog>
        </div>
    );
};

export default MyPropertyBookings;