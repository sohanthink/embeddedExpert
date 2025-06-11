import React from 'react';
import Image from 'next/image';
import paper1 from '@/public/home/whitepaper/paper1.png';
import Link from 'next/link';
import CommonButton from './Button';

const CommonCard = ({ varient }) => {
    return (
        <Link href="#">
            <div className="rounded-lg overflow-hidden flex-col bg-white shadow-sm hover:drop-shadow-xl transition-all duration-200">
                <div className="relative">
                    <Image src={paper1} alt="paper Image" width={300} height={250} className="object-cover h-48 w-full" />
                </div>

                {
                    varient === 'paper' ? (
                        <div className="p-5">
                            <h2 className="capitalize font-semibold text-base text-black">Developing Safety-Critical Embedded C Firmware: A Practical Approach</h2>
                            <h4 className="text-black-900 text-sm capitalize font-medium py-7">Embedded white paper mini-snippets nearby to reinforce expertise.</h4>
                            <CommonButton link='' text='Know more' varient='webinar' />
                        </div>)
                        :
                        <div className='p-5 space-y-4 w-full'>
                            <h2 className="capitalize font-semibold text-base text-black">Career Foundation</h2>
                            <span>(Beginners)</span>
                            <ul className="pl-5">
                                <li className='list-disc text-blue-600'><span className='text-black'>Build strong E foundamental</span></li>
                                <li className='list-disc text-blue-600'><span className='text-black'>Build strong E foundamental</span></li>
                                <li className='list-disc text-blue-600'><span className='text-black'>Build strong E foundamental</span></li>
                            </ul>
                            <CommonButton cn='w-full' link='' text='Start with the Basics' varient='webinar' />
                        </div>

                }

            </div>
        </Link>
    );
};

export default CommonCard;
