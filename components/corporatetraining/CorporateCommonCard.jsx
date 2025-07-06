import Image from 'next/image'
import React from 'react'



import icon1 from "@/public/corporatetraining/icon/icon1.png"
import icon2 from "@/public/corporatetraining/icon/icon2.png"
import icon3 from "@/public/corporatetraining/icon/icon3.png"
import icon4 from "@/public/corporatetraining/icon/icon4.png"
import icon5 from "@/public/corporatetraining/icon/icon5.png"
import { PiChecks } from 'react-icons/pi'

const CorporateCommonCard = ({ varient, heading, subheading, img }) => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-20 container py-8 md:py-24 p-5 md:p-0'>
            <div>
                <Image
                    src={img}
                    alt="Corporate Common Card"
                    className="object-cover w-full h-[350px] md:h-[550px] rounded-md"
                />
            </div>
            <div className='space-y-8 flex flex-col justify-center'>
                <h1 className="text-[#282C32] text-2xl md:text-[40px] font-bold leading-none capitalize">{heading}</h1>
                <p className="text-base md:text-lg text-[#282C32] font-light">
                    {subheading}
                </p>
                {
                    varient == 'engineeringChallange' && (
                        <ul className='space-y-4 md:space-y-6'>
                            <li className='flex gap-5 items-center'>
                                <Image src={icon1} alt="Engineering Challenge icon" className="w-10 bg-[#2B4DFF24] p-2 rounded-md" />
                                <span className='font-bold text-lg'>Skills gaps delaying embedded product development</span>
                            </li>
                            <li className='flex gap-5 items-center'>
                                <Image src={icon2} alt="Engineering Challenge icon" className="w-10 bg-[#2B4DFF24] p-2 rounded-md" />
                                <span className='font-bold text-lg'>Increased security vulnerabilities in firmware.</span>
                            </li>
                            <li className='flex gap-5 items-center'>
                                <Image src={icon3} alt="Engineering Challenge icon" className="w-10 bg-[#2B4DFF24] p-2 rounded-md" />
                                <span className='font-bold text-lg'>Compliance challenges with ISO 26262, DO-178C, IEC 62304.</span>
                            </li>
                            <li className='flex gap-5 items-center'>
                                <Image src={icon4} alt="Engineering Challenge icon" className="w-10 bg-[#2B4DFF24] p-2 rounded-md" />
                                <span className='font-bold text-lg'>Rising costs due to firmware technical debt.</span>
                            </li>
                            <li className='flex gap-5 items-center'>
                                <Image src={icon5} alt="Engineering Challenge icon" className="w-10 bg-[#2B4DFF24] p-2 rounded-md" />
                                <span className='font-bold text-lg'>Pressure to bring safe, efficient products to market faster.</span>
                            </li>
                        </ul>

                    )
                }
                {
                    varient == 'businessOutcome' && (
                        <ul className='space-y-4 md:space-y-6'>
                            <li className='flex gap-5 items-center'>
                                <PiChecks className='text-primary font-bold text-2xl' />
                                <span className='font-bold text-lg'>Faster Product Development Timelines.</span>
                            </li>
                            <li className='flex gap-5 items-center'>
                                <PiChecks className='text-primary font-bold text-2xl' />
                                <span className='font-bold text-lg'>Reduced Firmware Debugging and Failures</span>
                            </li>
                            <li className='flex gap-5 items-center'>
                                <PiChecks className='text-primary font-bold text-2xl' />
                                <span className='font-bold text-lg'>Improved Cybersecurity Posture</span>
                            </li>
                            <li className='flex gap-5 items-center'>
                                <PiChecks className='text-primary font-bold text-2xl' />
                                <span className='font-bold text-lg'>Higher Compliance Audit Success Rates</span>
                            </li>
                            <li className='flex gap-5 items-center'>
                                <PiChecks className='text-primary font-bold text-2xl' />
                                <span className='font-bold text-lg'>Stronger Firmware Maintainability and Scalability</span>
                            </li>
                        </ul>
                    )
                }
            </div>
        </section>
    )
}

export default CorporateCommonCard