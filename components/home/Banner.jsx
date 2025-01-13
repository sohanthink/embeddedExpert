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
        <section className='relative top-0 left-0 w-full -z-10 h-screen p-5 md:p-0'>
            <Image src={topShape} alt="topShape" className='absolute top-0 left-2/4 md:left-1/3 w-28 md:w-96' />
            <Image src={bottomShape} alt="bottomShape" className='absolute bottom-0 left-0 w-28 md:w-96 -z-10' />
            <div className='container flex md:flex-row h-full items-center justify-center md:justify-between py-24 md:py-0'>
                <div className='w-full md:w-1/2 pr-0 md:pr-28 space-y-3 md:space-y-6 text-center md:text-start'>
                    <h1 className='text-black text-2xl md:text-5xl font-extrabold leading-normal capitalize'>The <span className='text-primary'>Ultimate</span> Platform for Embedded Systems Career Development.</h1>
                    <p className='text-base md:text-lg text-black-300'>Learn the most relevant embedded systems development skills for today’s market. from ‘hello world’ to building your own Realtime Operating System (RTOS).</p>
                    <Button text="Explore Courses" link='/courses' />
                    <div className='md:flex gap-4 divide-black-300 divide-x-2 hidden'>
                        {shortData.map((data) => (
                            <div key={data.id} className='flex gap-2 px-4'>
                                <h1 className='text-4xl font-bold text-black'>{data.count}</h1>
                                <p className='text-black-300 whitespace-nowrap'>{data.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full md:w-[40%] hidden md:block'>
                    <Image src={banner} alt="banner" className='object-cover' width={600} />
                </div>
            </div>
            {/* bottom color gradient */}
            {/* <div className="absolute inset-x-0 top-[calc(100%-15rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]" aria-hidden="true">
                <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
            </div> */}
            {/* top color gradient */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(80%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}>
                </div>
            </div>
        </section>
    )
}

export default Banner