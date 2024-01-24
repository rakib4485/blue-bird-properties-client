import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import 'react-day-picker/dist/style.css';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loader from '../../../components/Loader/Loader'
import MyPropertyCard from '../../../components/MyPropertyCard/MyPropertyCard';

const MyProperty = () => {
    const { user } = useContext(AuthContext);
    const [propertyId, setPropertyId] = useState('');
    const [action, setAction] = useState('');
    const [propertyName, setPropertyName] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());

    const availability = format(selectedDate, "PP");

    const url = `http://localhost:5000/myProperty?email=${user?.email}`;

    const { data: properties = [], refetch, isLoading } = useQuery({
        queryKey: ['property'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    const handleRole = () => {
        const date = {
            availability
        }
        const url = `http://localhost:5000/properties/update/${action}?id=${propertyId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(date)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    refetch();
                    closeModal('action-modal');
                    toast.success((action === 'hide' ? 'Property Hide Successfully!!' : 'Property Active Successfully!!'));
                }
            })
    }

    const closeModal = (name) => {
        // Get the modal element
        const modal = document.getElementById(name);

        // Hide the modal
        modal.close();
    };

    if (isLoading) {
        return <Loader />
    }

    console.log(properties)
    return (
        <div>
            <div className="my-6 mx-8">
                <div className="grid gap-5 ">
                    {
                        properties.map((property) =>
                            <MyPropertyCard
                                key={property._id}
                                property={property}
                                setAction={setAction}
                                setPropertyId={setPropertyId}
                                setPropertyName={setPropertyName}
                            />)
                    }
                </div>
            </div>
            <dialog id="action-modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">

                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                    </form>
                    <h2 className="text-2xl mt-10 text-center">You Really Want to {action === 'hide' ? 'Hide' : 'Active'} your property which name is "{propertyName}"</h2>
                    {
                        action === 'active' &&
                        <>
                            <h2 className='font-semibold capitalize text-red-600 my-3'>Please Select when your property will be available</h2>
                            <div className='mx-auto'>
                            <DayPicker
                                mode="single"
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                            ></DayPicker>
                            </div>
                        </>
                    }
                    <div className='my-10 flex justify-end gap-5'>
                        <button className={`btn ${action === 'hide' ? 'btn-primary' : 'btn-success'}`} onClick={handleRole}>{action === 'hide' ? 'Hide' : 'Active'}</button>
                    </div>

                </div>
            </dialog>
        </div>
    );
};

export default MyProperty;