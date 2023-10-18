import React from 'react';
import { BiMessageDetail, BiSolidPhoneCall } from "react-icons/bi";

const PropertyOwner = ({property}) => {
    const {ownerName, authorImage, authorEmail, authorContact} = property;
    return (
        <div>
            <div className='border-2 mx-5 rounded-md p-5'>
                <img src={authorImage} alt="" className='h-[300px] w-auto mx-auto rounded-md'/>
                <h4 className="text-lg font-semibold text-center my-2">{ownerName}</h4>
                <p className='flex items-center gap-1 my-2'><BiMessageDetail className='text-xl text-blue-500'/> <span>{authorEmail? authorEmail : 'abc@gmail.com'}</span></p>
                <p className='flex items-center gap-1'><BiSolidPhoneCall className='text-xl text-blue-500'/> <span>{authorContact? authorContact : '0123456987'}</span></p>
            </div>
        </div>
    );
};

export default PropertyOwner;