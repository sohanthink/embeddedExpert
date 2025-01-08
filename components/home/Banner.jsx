import React from 'react'
import Image from 'next/image';
import Button from '../common/Button';

import banner from "@/public/home/banner.png";
import bottomShape from "@/public/home/bottomShape.png";
import topShape from "@/public/home/topShape.png";


const shortData = [
    {
        id: 1,
        count: 160,
        text: "+ Countries"
    },
    {
        id: 2,
        count: 100000,
        text: "+ Students"
    },
    {
        id: 3,
        count: 13000,
        text: "+ Reviews"
    },
]

const Banner = () => {
    return (
        <div className='relative top-0 left-0 w-full -z-10 h-screen p-5 md:p-0'>
            <Image src={topShape} alt="topShape" className='absolute top-0 left-1/3 w-28 md:w-96' />
            <Image src={bottomShape} alt="topShape" className='absolute bottom-0 left-0 w-28 md:w-96 -z-10' />
            <div className='container flex-col-reverse flex md:flex-row items-center h-screen md:justify-between py-10 md:py-0'>
                <div className='w-full md:w-1/2 pr-0 md:pr-28 space-y-3 md:space-y-6 text-center md:text-start'>
                    <h1 className='text-black text-3xl md:text-5xl font-extrabold leading-normal capitalize'>The <span className='text-primary'>Ultimate</span> Platform for Embedded Systems Career Development</h1>
                    <p className='text-lg text-black-300'>Learn the most relevant embedded systems development skills for today’s market. from ‘hello world’ to building your own Realtime Operating System (RTOS).</p>
                    <Button text="Explore Courses" link='/courses' />
                    <div className='md:flex gap-4 divide-black-300 divide-x-2 hidden'>
                        {shortData.map((data) => (
                            <div key={data.id} className='flex gap-2 px-4'>
                                <h1 className='text-4xl font-bold text-black'>{data.count}</h1>
                                <p className='text-black-300 text-nowrap'>{data.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full md:w-[40%]'>
                    <Image src={banner} alt="banner" className='object-cover' width={600} />
                </div>
            </div>
        </div>
    )
}

export default Banner