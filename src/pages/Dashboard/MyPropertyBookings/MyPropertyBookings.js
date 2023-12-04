import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyPropertyBookings = () => {
    const {user} = useContext(AuthContext)
    const { data: bookings = [] } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myPropertyBooking?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h3 className="text-3xl mb-5">My Bookings</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Property Name</th>
                            <th>Location</th>
                            <th>House Tour Date</th>
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
                                <td>{booking.location}</td>
                                <td>
                                    {booking.date}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPropertyBookings;