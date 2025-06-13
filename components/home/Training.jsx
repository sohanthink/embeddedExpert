import React from 'react'
import Heading from '../common/Heading'
import CommonButton from '../common/Button'
import Image from 'next/image'
import icon1 from "@/public/home/training/icon1.png"
import icon2 from "@/public/home/training/icon2.png"
import icon3 from "@/public/home/training/icon3.png"

const Training = () => {
    return (
        <section className='bg-[#F3F7FB] py-8 md:py-24'>
            <Heading cn="pb-10" text="Training Solutions for Every Stage of Your Embedded Systems Career" />
            <div className='grid grid-cols-1 md:grid-cols-3 container gap-6'>
                <TrainingCard title="Embedded Mastery A-Z" description="All-in-One Training for Embedded  Excellence" link="#" icon={icon1} />
                <TrainingCard title="AI-Augmented Embedded  Developer" description="Advance with AI-Driven Systems Mastery" link="#" icon={icon2} />
                <TrainingCard title="Embedded Systems Project Management" description="Lead, Innovate, Protect — Become an  Embedded Industry Leader" link="#" icon={icon3} />
            </div>
        </section>
    )
}

export default Training

export const TrainingCard = ({ title, description, link, icon }) => {
    return (
        <div className="bg-white p-16 rounded-lg gap-3 transition-shadow duration-300 flex flex-col h-full justify-center items-center">
            <Image src={icon} alt={title} height={50} className="mb-4 rounded-full bg-primary p-3" />
            <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
            <p className="text-gray-700 mb-2 flex-grow text-center">{description}</p>
            <div className="">
                <CommonButton
                    text="Apply Now"
                    variant="simple"
                    link={link}
                    cn="w-full"
                />
            </div>
        </div>
    );
}