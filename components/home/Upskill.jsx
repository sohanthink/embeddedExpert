import React from 'react'
import Heading from '../common/Heading'
import SubHeading from '../common/SubHeading'
import Image from 'next/image'

import upskillimage from "@/public/home/upskill.png"
import upskillicon from "@/public/home/upskill-icon.png"
import CommonButton from '../common/Button'


const Upskill = () => {
    return (
        <section className='container py-8 md:pb-24'>
            <Heading cn="pb-5 md:pb-10 p-5 md:p-0" text="Upskill Your Engineering Teams with Certified Embedded Systems Training" />
            <SubHeading cn='px-5 md:px-0 md:px-96' text="Learn the most relevant embedded systems development skills for today’s market- from ‘hello world’ to building your own Realtime Operating System (RTOS)." />

            <div className='flex flex-col md:flex-row items-center justify-between gap-10 py-10 p-5 md:p-0 mt-1 md:mt-10'>
                <div className='w-full md:w-1/2'>
                    <Image src={upskillimage} alt="upskillimage" className="object-cover h-96 w-full" />
                </div>
                <div className='w-full md:w-1/2 space-y-2 md:space-y-6'>
                    <div className='flex items-center gap-4'>
                        <Image src={upskillicon} alt="upskill icon" width={40} height={40} className="mb-4" />
                        <h2 className='text-lg md:text-3xl font-bold mb-4'>Custom team training packages</h2>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Image src={upskillicon} alt="upskill icon" width={40} height={40} className="mb-4" />
                        <h2 className='text-lg md:text-3xl font-bold mb-4'>Compliance preparation and certification readiness</h2>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Image src={upskillicon} alt="upskill icon" width={40} height={40} className="mb-4" />
                        <h2 className='text-lg md:text-3xl font-bold mb-4'>Risk mitigation and cybersecurity enhancement</h2>
                    </div>

                    <CommonButton text='Book Corporate Consultation' varient='webinar' link='#' />
                </div>
            </div>
        </section>
    )
}

export default Upskill