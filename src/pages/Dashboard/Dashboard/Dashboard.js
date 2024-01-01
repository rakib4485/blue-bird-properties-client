import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../components/Loader/Loader';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const { user } = useContext(AuthContext);

  const url = `https://blue-bird-server.vercel.app/myBookings?email=${user?.email}`;

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });


  if (isLoading) {
    return <Loader/>;
  }

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
            {bookings.map((booking, i) => (
              <tr className="hover" key={booking._id}>
                <th>{i + 1}</th>
                <td>
                    <Link to={`/propertyDetails/${booking.propertyId}`}><img src={booking.image} alt="" className='w-[200px]'/></Link>
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

export default Dashboard;