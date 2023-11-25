import React, { useContext, useState } from 'react';
import Navbar from '../pages/shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import { FaUserAlt } from 'react-icons/fa';
import { MdEdit } from "react-icons/md";
import useSeller from '../hooks/useSeller';
import useRequest from '../hooks/useRequest';
import toast from 'react-hot-toast';

const DashboardLayout = () => {

  const { user, updateUser } = useContext(AuthContext)
  const [disabled, setDisabled] = useState(false);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isRequest] = useRequest(user?.email);

  const closeModal = (name) => {
    // Get the modal element
    const modal = document.getElementById(name);

    // Hide the modal
    modal.close();
  };

  const cloudUpload = (event) => {
    event.preventDefault();
    const image = event.target.image.files[0];
    const data = new FormData();
    data.append("file", image)
    data.append("upload_preset", "blueBirdRent")
    data.append("cloud_name", "dohgbs7uo")

    fetch("https://api.cloudinary.com/v1_1/dohgbs7uo/upload", {
      method: "post",
      body: data
    })
      .then(res => res.json())
      .then(data => {
        if (data.url) {
          const userInfo = {
            photoURL: data.url
          }
          updateUser(userInfo)
            .then(() => {
              closeModal('image-modal');
            })
            .then()

        }
      })

  }

  const makeMeOwner = () => {
    const url = `http://localhost:5000/user/update/request?email=${user?.email}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          closeModal('owner-modal');
          toast.success('Owner Request Send Successfully!!')
          setDisabled(true);
        }
      })
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ml-5">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side min-h-full">
          <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay "></label>

          <ul className="menu p-4 h-full w-[300px] bg-slate-300 text-base-content rounded-md">
            <div className='mt-5 md:w-[280px] px-5 border-b-2 pb-5 '>
              <div className="avatar">
                <div className="w-20 ml-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  {
                    user?.photoURL ?
                      <img src={user?.photoURL} alt='' /> :
                      <FaUserAlt className='text-[65px] ml-2 mt-4' />
                  }
                </div>
                <MdEdit className='-ml-5 text-2xl cursor-pointer' onClick={() => document.getElementById('image-modal').showModal()} />
              </div>
              <h3 className="text-lg font-semibold text-center" data-tip={`${user?.displayName}`}>{user?.displayName.length > 15 ? user.displayName.slice(0, 15) + '...' : user.displayName}</h3>
              <p className='flex justify-between items-center mt-5'><span>Type : {
                (isAdmin || isSeller || isRequest) ? <>{isAdmin && 'Admin'} {isSeller && 'Seller'} {isRequest && 'Requested'}</> : 'User'
              }
              </span>
                {
                  (!isAdmin && !isSeller && !isRequest) &&
                  <button className="btn btn-xs" onClick={() => document.getElementById('owner-modal').showModal()} disabled={disabled}>Owner Request</button>
                }


              </p>
            </div>
            <li>
              <Link to='/dashboard'>My Bookings</Link>
            </li>
            {(isAdmin || isSeller) &&
              <>
                <li>
                  <Link to='/dashboard/myPropertyBookings'>My Property Bookings</Link>
                  <Link to='/dashboard/myProperty'>My Property</Link>
                  <Link to='/dashboard/addProperty'>Add A Property</Link>
                </li>
              </>
            }
            {
              isAdmin && <>
                <li>
                  <Link to='/dashboard/allUser'>All Users</Link>
                  <Link to='/dashboard/allBookings'>All Bookings</Link>
                </li>

              </>
            }

          </ul>
        </div>
      </div>
      <dialog id="image-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <form onSubmit={cloudUpload}>
            <input type="file" name='image' className="file-input file-input-bordered file-input-primary w-full mt-10" />
            <p className='text-right'><button type='submit' className="btn btn-outline btn-primary mt-5">Upload</button></p>
          </form>
        </div>
      </dialog>

      <dialog id="owner-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h2 className="text-xl font-semibold mt-5 capitalize text-center">Do you really want to send a request for make you owner!!</h2>
          <p className='text-right'><button onClick={makeMeOwner} className="btn btn-outline btn-primary mt-5">Request</button></p>

        </div>
      </dialog>
    </div>
  );
};

export default DashboardLayout;