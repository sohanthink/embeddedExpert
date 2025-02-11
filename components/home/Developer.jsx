import React from 'react';
import { GridGlobe } from './GridGlobe';

const Developer = () => {
    return (
        <div className='bg-[#04071E]'>
            <div className="container overflow-hidden py-10 md:py-24 relative">

                {/* Text Content */}
                <div className="w-full text-center">
                    <h2 className="text-white text-2xl md:text-[40px] font-extrabold leading-none capitalize">
                        The{' '}
                        <span className="text-white">
                            Ultimate
                        </span>{' '}
                        Developer Platform
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg md:text-xl text-white">
                        Over 120,000 developers trained in over 170 countries. Join the global community today!
                    </p>
                </div>
                {/* Globe Component */}
                <div className="w-full flex justify-center items-center absolute top-32 md:top-20">
                    <GridGlobe />
                </div>

            </div>
        </div>
    );
};

export default Developer;