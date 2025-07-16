import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CommonButton from './Button';
import { IoCheckmark } from 'react-icons/io5';
import { LiaSquareSolid } from 'react-icons/lia';

const CommonCard = ({ variant, src, point1, point2, point3, heading, subheading, btnText, link }) => {
    const renderContent = () => {
        switch (variant) {
            case 'paper':
                return (
                    <div className="p-5">
                        <h2 className="capitalize font-bold text-base md:text-[22px] leading-7 text-black">
                            {heading}
                        </h2>
                        <h4 className="text-black-900 text-sm md:text-base capitalize font-medium py-7">
                            {subheading}
                        </h4>
                        <CommonButton link={link} text='Know more' varient='webinar' />
                    </div>
                );
            case 'circlelist':
                return (
                    <div className='p-5 space-y-5 w-full flex flex-col'>
                        <div>
                            <h2 className="capitalize font-bold text-base md:text-xl text-black">{heading}</h2>
                            <span>{subheading}</span>
                        </div>
                        <ul className="space-y-2 text-[#4D5765]">
                            <li className='list-none text-blue-600 flex items-center gap-2'>
                                <span className='bg-primary h-3 w-3 rounded-full'></span>
                                <span className='text-black pl-2'>{point1}</span>
                            </li>
                            <li className='list-disc text-blue-600 flex items-center gap-2'>
                                <span className='bg-primary h-3 w-3 rounded-full'></span>
                                <span className='text-black pl-2'>{point2}</span>
                            </li>
                            <li className='list-disc text-blue-600 flex items-center gap-2'>
                                <span className='bg-primary h-3 w-3 rounded-full'></span>
                                <span className='text-black pl-2'>{point3}</span>
                            </li>
                        </ul>
                        <CommonButton cn='w-full' link={link} text={btnText} varient='webinar' />
                    </div>
                );
            case 'corporate':
                return (
                    <div className='p-8 space-y-5 w-full flex flex-col bg-[#F0F2FF]'>
                        <div>
                            <h2 className="capitalize font-bold text-base md:text-xl text-black">{heading}</h2>
                            <span>{subheading}</span>
                        </div>
                        <h5 className='font-bold'>Outcomes:</h5>
                        <ul className="space-y-2 text-[#4D5765]">
                            <li className='list-none text-blue-600 flex items-center gap-2'>
                                <span className='bg-primary h-3 w-3 rounded-full'></span>
                                <span className='text-black pl-2'>{point1}</span>
                            </li>
                            <li className='list-disc text-blue-600 flex items-center gap-2'>
                                <span className='bg-primary h-3 w-3 rounded-full'></span>
                                <span className='text-black pl-2'>{point2}</span>
                            </li>
                            <li className='list-disc text-blue-600 flex items-center gap-2'>
                                <span className='bg-primary h-3 w-3 rounded-full'></span>
                                <span className='text-black pl-2'>{point3}</span>
                            </li>
                        </ul>
                        <Link href={link} className='w-full font-semibold text-blue-500'>Learn more</Link>
                    </div>
                );
            case 'squarelist':
                return (
                    <div className='p-5 space-y-6 w-full bg-[#F0F2FF] flex flex-col'>
                        <div className='flex flex-col gap-2'>
                            <h2 className="capitalize font-semibold text-base text-black">{heading}</h2>
                            <span className='text-primary font-bold'>{subheading}</span>
                        </div>
                        <ul className="md:pl-5 space-y-2 text-[#4D5765]">
                            <li className='list-none text-blue-600 flex items-center gap-2'>
                                <LiaSquareSolid className='rotate-45' />
                                <span className='text-black'>{point1}</span>
                            </li>
                            <li className='list-none text-blue-600 flex items-center gap-2'>
                                <LiaSquareSolid className='rotate-45' />
                                <span className='text-black'>{point2}</span>
                            </li>
                        </ul>
                        <CommonButton cn='w-full' link={link} text='View Program Details' varient='webinar' />
                    </div>
                );
            case 'checklist':
                return (
                    <div className='p-5 space-y-4 w-full bg-[#F0F2FF] flex flex-col'>
                        <h2 className="capitalize font-semibold text-base text-black">Career Foundation</h2>
                        <span>(Beginners)</span>
                        <ul className="md:pl-5 space-y-2 text-[#4D5765]">
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
                        <CommonButton cn='w-full' link={link} text='Start with the Basics' varient='webinar' />
                    </div>
                );
            default:
                return (
                    <div className="p-5">
                        <h2 className="capitalize font-semibold text-base text-black">
                            Default Card Content
                        </h2>
                        <CommonButton link={link} text='Learn More' variant='webinar' />
                    </div>
                );
        }
    };

    return (
        <Link href={link}>
            <div className="rounded-lg overflow-hidden flex-col bg-white shadow-sm hover:drop-shadow-xl transition-all duration-200">
                <div className="relative">
                    <Image
                        src={src}
                        alt="card Image"
                        width={300}
                        height={300}
                        className="object-cover h-64 w-full"
                    />
                </div>
                {renderContent()}
            </div>
        </Link>
    );
};

export default CommonCard;