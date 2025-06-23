import Image from 'next/image'
import React from 'react'

import engchallenge from "@/public/corporatetraining/engchallenge.png"

import icon1 from "@/public/corporatetraining/icon/icon1.png"
import icon2 from "@/public/corporatetraining/icon/icon2.png"
import icon3 from "@/public/corporatetraining/icon/icon3.png"
import icon4 from "@/public/corporatetraining/icon/icon4.png"
import icon5 from "@/public/corporatetraining/icon/icon5.png"

const CorporateCommonCard = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-10 container py-8 md:py-24'>
            <div>
                <Image
                    src={engchallenge}
                    alt="Corporate Common Card"
                    className="object-cover w-full h-[600px] rounded-md"
                />
            </div>
            <div className='space-y-8 flex flex-col justify-center'>
                <h1 className="text-[#282C32] text-2xl md:text-[55px] font-bold leading-none capitalize">The Engineering Challenges Companies Face Today.</h1>
                <p className="text-base md:text-lg text-[#282C32] font-light">
                    We help organizations solve these challenges through elite technical training
                </p>
                <ul className='space-y-6'>
                    <li className='flex gap-3 items-center'>
                        <Image src={icon1} alt="Engineering Challenge icon" className="w-10 bg-[#2B4DFF24] p-2 rounded-md" />
                        <span className='font-bold text-xl'>Skills gaps delaying embedded product development</span>
                    </li>
                    <li className='flex gap-3 items-center'>
                        <Image src={icon2} alt="Engineering Challenge icon" className="w-10 bg-[#2B4DFF24] p-2 rounded-md" />
                        <span className='font-bold text-xl'>Increased security vulnerabilities in firmware.</span>
                    </li>
                    <li className='flex gap-3 items-center'>
                        <Image src={icon3} alt="Engineering Challenge icon" className="w-10 bg-[#2B4DFF24] p-2 rounded-md" />
                        <span className='font-bold text-xl'>Compliance challenges with ISO 26262, DO-178C, IEC 62304.</span>
                    </li>
                    <li className='flex gap-3 items-center'>
                        <Image src={icon4} alt="Engineering Challenge icon" className="w-10 bg-[#2B4DFF24] p-2 rounded-md" />
                        <span className='font-bold text-xl'>Rising costs due to firmware technical debt.</span>
                    </li>
                    <li className='flex gap-3 items-center'>
                        <Image src={icon5} alt="Engineering Challenge icon" className="w-10 bg-[#2B4DFF24] p-2 rounded-md" />
                        <span className='font-bold text-xl'>Pressure to bring safe, efficient products to market faster.</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default CorporateCommonCard