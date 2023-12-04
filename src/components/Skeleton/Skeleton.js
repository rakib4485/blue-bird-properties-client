import React from 'react';

const Skeleton = () => {
    return (
        <div className="p-4 max-w-screen min-h-screen mx-auto bg-white rounded shadow-md">
            <div className="animate-pulse mt-56">
                <div className="bg-gray-300 h-4 w-1/2 mb-2"></div>
                <div className="bg-gray-300 h-4 w-3/4 mb-4"></div>
                <div className="bg-gray-300 h-4 w-2/3 mb-4"></div>
                <div className=""> Please Wait until Your file upload</div>
            </div>
        </div>
    );
};

export default Skeleton;