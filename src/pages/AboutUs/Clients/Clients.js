import React from 'react';

const Clients = () => {
    return (
        <div>
             <div className="my-9 mx-36">
                <h1 className="text-3xl text-center">Our Clients</h1>
                <div className='bg-red-700 p-[2px] w-[60px] mx-auto'></div>
                <div className="mt-5 grid grid-cols-2 lg:grid-cols-4">
                    <div className='border'>
                        <img className='py-7 px-16' src="https://i.ibb.co/z8mHyZj/partner1.png" alt="" />
                    </div>
                    <div className='border'>
                        <img className='py-7 px-16' src="https://i.ibb.co/tKkf0w8/partner2.png" alt="" />
                    </div>
                    <div className='border'>
                        <img className='py-7 px-16' src="https://i.ibb.co/8Bk1wLz/partner3.png" alt="" />
                    </div>
                    <div className='border'>
                        <img className='py-7 px-16' src="https://i.ibb.co/pWJT9gV/partner4.png" alt="" />
                    </div>
                    <div className='border'>
                        <img className='py-7 px-16' src="https://i.ibb.co/ZH4140q/partner5.png" alt="" />
                    </div>
                    <div className='border'>
                        <img className='py-7 px-16' src="https://i.ibb.co/0n9PjvQ/partner6.png" alt="" />
                    </div>
                    <div className='border'>
                        <img className='py-7 px-16' src="https://i.ibb.co/Cm48QRN/partner7.png" alt="" />
                    </div>
                    <div className='border'>
                        <img className='py-7 px-16' src="https://i.ibb.co/xG18RKN/partner8.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;