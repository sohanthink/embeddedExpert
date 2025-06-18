import React from 'react'
import Image from 'next/image'

import featured from "@/public/course/featured.png"
import { LiaSquareSolid } from 'react-icons/lia'

const Featured = () => {
    return (
        <section className='py-8 md:pb-24 bg-[#F0F2FF]'>
            <div className='container flex flex-col md:flex-row items-center justify-between gap-5 py-10 p-5 md:p-0 mt-1 md:mt-10'>
                <div className='w-full md:w-1/2'>
                    <Image src={featured} alt="featured-banner-image" className="object-cover h-full rounded-md" />
                </div>
                <div className='w-full md:w-1/2 space-y-4 md:space-y-6 justify-start'>
                    <h2 className='text-2xl md:text-4xl capitalize font-bold text-black-600'>Featured Thought Leadership Mini-Snippets</h2>
                    <p className='text-[#4D5765]'>Synergistically integrate orthogonal synergy rather than visionary expertise. Credibly supply bleeding-edge deliverables after robust action items generate principle centered</p>
                    <ul className="space-y-3 font-bold">
                        <li className='text-blue-600 bg-white px-3 py-4 rounded-md'>
                            <span className='text-black flex items-center gap-3'>
                                <div className='text-primary bg-[#506BFF2E] p-4 rounded-full'><LiaSquareSolid className='' /></div>
                                Secure Firmware Development: Real-World Threat Modeling
                            </span>
                        </li>
                        <li className='text-white bg-primary px-3 py-4 rounded-md '>
                            <span className='text-white flex items-center gap-3'>
                                <div className='text-white bg-white/40 p-4 rounded-full'><LiaSquareSolid className='' /></div>
                                Safety-Critical Embedded Systems in C and C++
                            </span>
                        </li>
                        <li className='text-blue-600  bg-white px-3 py-4 rounded-md'>
                            <span className='text-black flex items-center gap-3'>
                                <div className='text-primary bg-[#506BFF2E] p-4 rounded-full'><LiaSquareSolid className='' /></div>
                                Compliance Roadmaps: ISO, DO-178C, and IEC Standards Simplified
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Featured