import React from 'react'
import CommonButton from '../common/Button'
import Image from 'next/image'

import stratagic from "@/public/course/sttratagic.png"

const StrategicInnovation = () => {
    return (
        <section className='py-8 md:pb-24 bg-[#F0F2FF]'>
            <div className='container flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 py-10 p-5 md:p-0 mt-1 md:mt-10'>
                <div className='w-full md:w-1/2'>
                    <Image src={stratagic} alt="stratagic-banner-image" className="object-contain h-[450px] w-full rounded-md" />
                </div>
                <div className='w-full md:w-1/2 space-y-4 md:space-y-6 justify-start'>
                    <h2 className='text-2xl md:text-4xl capitalize font-bold text-black-600'>Strategic Innovation — Building the Future of Embedded Systems</h2>
                    <p className='text-[#4D5765]'>Elite-level training for engineers ready to lead, invent, and secure innovation.</p>
                    <h4 className='text-base md:text-xl font-bold'>Embedded Innovators Hub  ($5,000)</h4>
                    <ul className="pl-5 space-y-2 font-bold">
                        <li className='list-disc text-blue-600'>
                            <span className='text-black'>Firmware Mastery</span>
                        </li>
                        <li className='list-disc text-blue-600'>
                            <span className='text-black'>Certification Strategy</span>
                        </li>
                        <li className='list-disc text-blue-600'>
                            <span className='text-black'>IP Leadership</span>
                        </li>
                    </ul>
                    <CommonButton text='Book Corporate Consultation' varient='webinar' link='#' />
                    <h6 className='text-[#4D5765]'>For serious innovators only — Application Required.</h6>
                </div>
            </div>
        </section>
    )
}

export default StrategicInnovation