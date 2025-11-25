import React from 'react';
import { RingLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <RingLoader></RingLoader>
        </div>
    );
};

export default Loader;