import Image from 'next/image'
import React from 'react'



import icon1 from "@/public/corporatetraining/icon/icon1.png"
import icon2 from "@/public/corporatetraining/icon/icon2.png"
import icon3 from "@/public/corporatetraining/icon/icon3.png"
import icon4 from "@/public/corporatetraining/icon/icon4.png"
import icon5 from "@/public/corporatetraining/icon/icon5.png"
import { PiChecks } from 'react-icons/pi'

import upskillicon from "@/public/home/upskill-icon.png"
import amazon from "@/public/corporatetraining/trust/amazon.png"
import udemy from "@/public/corporatetraining/trust/udemy.png"
import { IoCheckmark } from 'react-icons/io5'

const CorporateCommonCard = ({ varient, heading, subheading, img }) => {
    return (
        <section className={`${varient === 'trust' ? 'bg-[#F0F2FF]' : 'bg-white'}`}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 container py-8 md:py-24 p-5 md:p-0'>
                <div>
                    <Image
                        src={img}
                        alt="Corporate Common Card"
                        className="object-contain w-full h-[350px] md:h-[540px] rounded-md"
                    />
                </div>
                <div className='space-y-8 flex flex-col justify-center'>
                    <h1 className="text-[#282C32] text-2xl md:text-[40px] font-bold leading-none capitalize">{heading}</h1>
                    {
                        varient !== 'trust' && (
                            <p className="text-base md:text-lg text-[#282C32] font-light">
                                {subheading}
                            </p>
                        )
                    }

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
                    {
                        varient == 'innovators' && (
                            <ul className='space-y-4 md:space-y-6'>
                                <li className='flex gap-5 items-center'>
                                    <div className='bg-[#2B4DFF24] p-2 rounded-lg'>
                                        <IoCheckmark className='text-primary font-bold text-lg h-5 w-5' />
                                    </div>
                                    <span className='font-bold text-lg'>8–12 Week Structured Curriculum</span>
                                </li>
                                <li className='flex gap-5 items-center'>
                                    <div className='bg-[#2B4DFF24] p-2 rounded-lg'>
                                        <IoCheckmark className='text-primary font-bold text-lg h-5 w-5' />
                                    </div>
                                    <span className='font-bold text-lg'>Private Cohort or 1-on-1 Format</span>
                                </li>
                                <li className='flex gap-5 items-center'>
                                    <div className='bg-[#2B4DFF24] p-2 rounded-lg'>
                                        <IoCheckmark className='text-primary font-bold text-lg h-5 w-5' />
                                    </div>
                                    <span className='font-bold text-lg'>Live Strategy Sessions + Recorded Content</span>
                                </li>
                                <li className='flex gap-5 items-center'>
                                    <div className='bg-[#2B4DFF24] p-2 rounded-lg'>
                                        <IoCheckmark className='text-primary font-bold text-lg h-5 w-5' />
                                    </div>
                                    <span className='font-bold text-lg'>Guest Expert Sessions (on certification, manufacturing, IP law)</span>
                                </li>
                                <li className='flex gap-5 items-center'>
                                    <div className='bg-[#2B4DFF24] p-2 rounded-lg'>
                                        <IoCheckmark className='text-primary font-bold text-lg h-5 w-5' />
                                    </div>
                                    <span className='font-bold text-lg'>Application Only — Limited Seats per Cohort</span>
                                </li>
                            </ul>
                        )
                    }
                    {
                        varient == 'trust' && (
                            <ul className='space-y-4 md:space-y-6'>
                                <li className='flex gap-5 items-center'>
                                    <Image src={upskillicon} alt="upskill icon" width={40} height={40} className="mb-4" />
                                    <span className='font-bold text-lg'>Training Designed by Amazon Bestselling Embedded Systems Author.</span>
                                </li>
                                <li className='flex gap-5 items-center'>
                                    <Image src={upskillicon} alt="upskill icon" width={40} height={40} className="mb-4" />
                                    <span className='font-bold text-lg'>Training Backed by Real-World Innovation (Inventor of Touchable Cardiovascular  Surfaces Technology).</span>
                                </li>
                                <li className='flex gap-5 items-center'>
                                    <Image src={upskillicon} alt="upskill icon" width={40} height={40} className="mb-4" />
                                    <span className='font-bold text-lg'>Global Reach: 124,000+ Engineers Trained Across 170+ Countries.</span>
                                </li>
                                <li className='flex gap-5 items-center'>
                                    <Image src={upskillicon} alt="upskill icon" width={40} height={40} className="mb-4" />
                                    <span className='font-bold text-lg'>Recognized Expertise in Compliance, Risk Mitigation, and Firmware Security.</span>
                                </li>
                                <li className='flex gap-2 flex-col pt-4'>
                                    <h6 className='font-bold'>Trusted By:</h6>
                                    <div className='flex gap-5 items-center'>
                                        <Image
                                            src={amazon}
                                            alt="amazon logo"
                                            className="object-cover"
                                        />
                                        <Image
                                            src={udemy}
                                            alt="udemy logo"
                                            className="object-cover"
                                        />
                                    </div>
                                </li>
                            </ul>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default CorporateCommonCard