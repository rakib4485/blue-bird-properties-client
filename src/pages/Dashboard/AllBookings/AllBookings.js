import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const AllBookings = () => {
    const { data: bookings = [] } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await fetch('https://blue-bird-server.vercel.app/bookings/');
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
                            <th>Booking Name</th>
                            <th>Booking Email</th>
                            <th>Booking Phone</th>
                            <th>Booking NID</th>
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
                                <td>{booking.renterInfo.name}</td>
                                <td>{booking.renterInfo.email}</td>
                                <td>{booking.renterInfo.phone}</td>
                                <td>{booking.renterInfo.nid}</td>
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

export default AllBookings;