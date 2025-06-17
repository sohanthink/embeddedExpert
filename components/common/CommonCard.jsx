import React from 'react';
import Image from 'next/image';
import paper1 from '@/public/home/whitepaper/paper1.png';
import Link from 'next/link';
import CommonButton from './Button';
import { IoCheckmark } from 'react-icons/io5';

const CommonCard = ({ variant, src, point1, point2, point3, heading, subheading }) => {
    const renderContent = () => {
        switch (variant) {
            case 'paper':
                return (
                    <div className="p-5">
                        <h2 className="capitalize font-bold text-base md:text-2xl text-black">
                            {heading}
                        </h2>
                        <h4 className="text-black-900 text-sm md:text-base capitalize font-medium py-7">
                            {subheading}
                        </h4>
                        <CommonButton link='' text='Know more' varient='webinar' />
                    </div>
                );
            case 'circlelist':
                return (
                    <div className='p-5 space-y-5 w-full flex flex-col'>
                        <div>
                            <h2 className="capitalize font-bold text-base md:text-xl text-black">{heading}</h2>
                            <span>{subheading}</span>
                        </div>
                        <ul className="pl-5 space-y-2">
                            <li className='list-disc text-blue-600'>
                                <span className='text-black'>{point1}</span>
                            </li>
                            <li className='list-disc text-blue-600'>
                                <span className='text-black'>{point2}</span>
                            </li>
                            <li className='list-disc text-blue-600'>
                                <span className='text-black'>{point3}</span>
                            </li>
                        </ul>
                        <CommonButton cn='w-full' link='' text='Start with the Basics' varient='webinar' />
                    </div>
                );
            case 'checklist':
                return (
                    <div className='p-5 space-y-4 w-full bg-[#F0F2FF] flex flex-col'>
                        <h2 className="capitalize font-semibold text-base text-black">Career Foundation</h2>
                        <span>(Beginners)</span>
                        <ul className="pl-5 space-y-2">
                            <li className='list-none text-blue-600 flex items-center gap-2'>
                                <IoCheckmark />
                                <span className='text-black'>{point1}</span>
                            </li>
                            <li className='list-none text-blue-600 flex items-center gap-2'>
                                <IoCheckmark />
                                <span className='text-black'>{point2}</span>
                            </li>
                            <li className='list-none text-blue-600 flex items-center gap-2'>
                                <IoCheckmark />
                                <span className='text-black'>{point3}</span>
                            </li>
                        </ul>
                        <CommonButton cn='w-full' link='' text='Start with the Basics' variant='webinar' />
                    </div>
                );
            default:
                return (
                    <div className="p-5">
                        <h2 className="capitalize font-semibold text-base text-black">
                            Default Card Content
                        </h2>
                        <CommonButton link='' text='Learn More' variant='webinar' />
                    </div>
                );
        }
    };

    return (
        <Link href="#">
            <div className="rounded-lg overflow-hidden flex-col bg-white shadow-sm hover:drop-shadow-xl transition-all duration-200">
                <div className="relative">
                    <Image
                        src={src}
                        alt="card Image"
                        width={300}
                        height={250}
                        className="object-cover h-48 w-full"
                    />
                </div>
                {renderContent()}
            </div>
        </Link>
    );
};

export default CommonCard;