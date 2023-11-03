import React from 'react';

const Button = ({children}) => {
    return (
        <div>
            <button className='bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-lg font-semibold px-5 py-3 rounded-md'>
            {children}
        </button>
        </div>
    );
};

export default Button;