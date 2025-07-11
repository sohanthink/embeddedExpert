import Image from 'next/image'
import React from 'react'

import pillar1 from "@/public/pillars/pillar1.png"
import pillar2 from "@/public/pillars/pillar2.png"
import pillar3 from "@/public/pillars/pillar3.png"
import pillar4 from "@/public/pillars/pillar4.png"
import Heading from '../common/Heading'

const Pillars = () => {
    return (
        <section className='py-8 md:pb-24 bg-[#F0F2FF]'>
            <Heading cn="p-5 md:p-0 md:pt-5 md:pb-5 " text="The Four Core Pillars of the Program" />
            <div className='container grid grid-cols-1 md:grid-cols-4 gap-5 p-5' >
                <Pillar img={pillar1} heading="Firmware Mastery" subheading="Advanced system architecture, layered firmware design, safety critical programming in C/C++" />
                <Pillar img={pillar2} heading=" Certification Navigation" subheading="ISO 26262, DO-178C, IEC 62304, IEC 62443 — strategy and  documentation mastery" />
                <Pillar img={pillar3} heading="Manufacturing  Readiness" subheading="BOM optimization, hardware sourcing, embedded firmware for  production-grade deployment" />
                <Pillar img={pillar4} heading="Intellectual Property  Protection" subheading="Real-world patent filing, trade secret handling, and IP defense  strategy" />
            </div>
        </section>
    )
}

export default Pillars

export const Pillar = ({ img, heading, subheading }) => {
    return (
        <div className='rounded-2xl overflow-hidden'>
            <Image
                src={img}
                alt='Pillars_image'
                width={300}
                className="object-cover h-48 w-full"
            />
            <div className='bg-white py-5 px-4'>
                <h2 className='font-semibold pb-2'>{heading}</h2>
                <p className='font-light'>{subheading}</p>
            </div>
        </div>
    )
}