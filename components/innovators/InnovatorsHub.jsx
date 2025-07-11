import React from 'react'

import innovatorshub from "@/public/innovators/innovatorshub.png"
import Image from 'next/image'

const InnovatorsHub = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 container py-8 md:py-24 p-5 md:p-0'>
            <div className='space-y-8 flex flex-col justify-center'>
                <h1 className="text-[#282C32] text-2xl md:text-[40px] font-bold leading-none capitalize">Is the Embedded Innovators Hub Right for You?</h1>

                <ul className='space-y-4 md:space-y-6'>
                    <li className='list-none text-blue-600 flex items-center gap-2'>
                        <span className='bg-primary h-3 w-3 rounded-full'></span>
                        <span className='text-black pl-2'>You’re a senior firmware engineer, tech lead, or founder building embedded  hardware.</span>
                    </li>
                    <li className='list-none text-blue-600 flex items-center gap-2'>
                        <span className='bg-primary h-3 w-3 rounded-full'></span>
                        <span className='text-black pl-2'>You’ve mastered embedded coding but want to scale your knowledge into full  product leadership.</span>
                    </li>
                    <li className='list-none text-blue-600 flex items-center gap-2'>
                        <span className='bg-primary h-3 w-3 rounded-full'></span>
                        <span className='text-black pl-2'>You want to protect your innovations through proper IP strategy.</span>
                    </li>
                    <li className='list-none text-blue-600 flex items-center gap-2'>
                        <span className='bg-primary h-3 w-3 rounded-full'></span>
                        <span className='text-black pl-2'>You want to lead product certification, not be bottlenecked by it.</span>
                    </li>
                    <li className='list-none text-blue-600 flex items-center gap-2'>
                        <span className='bg-primary h-3 w-3 rounded-full'></span>
                        <span className='text-black pl-2'>You want to work with someone who has built and patented real embedded  technologies globally.</span>
                    </li>
                </ul>
            </div>
            <div className=''>
                <Image
                    src={innovatorshub}
                    alt="Corporate Common Card"
                    className="object-contain w-full h-[300px] md:h-[560px] rounded-md"
                />
            </div>
        </div>
    )
}

export default InnovatorsHub