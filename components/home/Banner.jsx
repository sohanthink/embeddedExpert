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
        <div className='absolute top-0 left-0 w-full -z-10 h-screen'>
            <Image src={topShape} alt="topShape" className='absolute top-0 left-1/3' />
            <Image src={bottomShape} alt="topShape" className='absolute bottom-0 left-0' />
            <div className='container flex items-center h-screen justify-between'>
                <div className='w-1/2 pr-0 md:pr-28 space-y-6'>
                    <h1 className='text-black text-5xl font-extrabold leading-normal capitalize'>The <span className='text-primary'>Ultimate</span> Platform for Embedded Systems Career Development</h1>
                    <p className='text-lg text-black-300'>Learn the most relevant embedded systems development skills for today’s market. from ‘hello world’ to building your own Realtime Operating System (RTOS).</p>
                    <Button text="Explore Courses" link='/courses' />
                    <div className='flex gap-4 divide-black-300 divide-x-2'>
                        {shortData.map((data) => (
                            <div key={data.id} className='flex gap-2 px-4'>
                                <h1 className='text-4xl font-bold text-black'>{data.count}</h1>
                                <p className='text-black-300 text-nowrap'>{data.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-[40%]'>
                    <Image src={banner} alt="banner" className='object-cover' width={600} />
                </div>
            </div>
        </div>
    )
}

export default Banner