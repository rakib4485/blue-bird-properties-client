import React from 'react';

const RentInfo = ({property}) => {
    const {image, propertyName, location, rent, availability, rentDetails } = property;
    return (
        <div className='w-full border border-1  mt-10'>
            <div className="flex items-center justify-between md:mr-10 p-5">
                <div className='flex gap-5 items-center'>
                    <div>
                        <img src={image} alt="" className='w-[200px]'/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold underline">{propertyName}</h3>
                        <p><strong>Available From: </strong>{availability}</p>
                        <p>{location}</p>
                    </div>
                </div>
                <div>
                    <h4 className="text-xl font-semibold">৳ {rent}</h4>
                </div>
            </div>
            <div className='bg-slate-100'>
                <h3 className="text-2xl font-semibold p-5">Rent Details: </h3>
                <div className="flex justify-between items-center border-b-2 border-t-2 p-5">
                    <p className="text-xl font-semibold">Flat Rent: </p>
                    <h4 className="text-xl font-semibold">৳ {rentDetails[0].flatRent}</h4>
                </div>
                <div className="flex justify-between items-center border-b-2 border-t-2 p-5">
                    <p className="text-xl font-semibold">Service Charge: </p>
                    <h4 className="text-xl font-semibold">৳ {rentDetails[0].serviceCharge}</h4>
                </div>
                <div className="flex justify-between items-center border-b-2 border-t-2 p-5">
                    <p className="text-xl font-semibold">Gash Bill: </p>
                    <h4 className="text-xl font-semibold">৳ {rentDetails[0].gashBill}</h4>
                </div>
                <div className="flex justify-between items-center border-b-2 border-t-2 p-5">
                    <p className="text-xl font-semibold">Water Bill: </p>
                    <h4 className="text-xl font-semibold">৳ {rentDetails[0].waterBill}</h4>
                </div>
                <div className="flex justify-between items-center border-b-2 border-t-2 p-5">
                    <p className="text-xl font-semibold">Parking (If You Need): </p>
                    <h4 className="text-xl font-semibold">৳ {rentDetails[0].parkingCharge}</h4>
                </div>
            </div>
        </div>
    );
};

export default RentInfo;