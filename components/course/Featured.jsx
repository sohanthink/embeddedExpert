import React from 'react'
import Image from 'next/image'

import featured from "@/public/course/featured.png"

const Featured = () => {
    return (
        <section className='py-8 md:pb-24 bg-[#F0F2FF]'>
            <div className='container flex flex-col md:flex-row items-center justify-between gap-10 py-10 p-5 md:p-0 mt-1 md:mt-10'>
                <div className='w-full md:w-1/2'>
                    <Image src={featured} alt="featured-banner-image" className="object-cover h-full rounded-md" />
                </div>
                <div className='w-full md:w-1/2 space-y-4 md:space-y-6 justify-start'>
                    <h2 className='text-2xl md:text-4xl capitalize font-bold text-black-600'>Featured Thought Leadership Mini-Snippets</h2>
                    <p className='text-[#4D5765]'>Synergistically integrate orthogonal synergy rather than visionary expertise. Credibly supply bleeding-edge deliverables after robust action items generate principle centered</p>
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
                </div>
            </div>
        </section>
    )
}

export default Featured