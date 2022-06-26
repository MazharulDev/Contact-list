import React from 'react';
import './css/Loading.css'

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="lds-dual-ring"></div>
        </div>
    );
};

export default Loading;