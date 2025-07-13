import Image from 'next/image'
import React from 'react'

import icon1 from "@/public/innovators/outcome/icon1.png"
import icon2 from "@/public/innovators/outcome/icon2.png"
import icon3 from "@/public/innovators/outcome/icon3.png"
import icon4 from "@/public/innovators/outcome/icon4.png"
import Heading from '../common/Heading'

const Outcome = () => {
    return (
        <section className='py-8 md:py-24 bg-[#F0F2FF] p-5 md:p-0'>
            <Heading cn="pb-8 md:pb-16" text='Outcomes Our Graduates Achieve' />
            <div className='container grid grid-cols-2 md:grid-cols-4 gap-5'>
                <OutcomeCard icon={icon1} title="Increase credibility & opportunity" />
                <OutcomeCard icon={icon2} title="Launch compliant products" />
                <OutcomeCard icon={icon3} title="Secure products        patents" />
                <OutcomeCard icon={icon4} title="Lead firmware strategy" />
            </div>
        </section>
    )
}

export default Outcome

export const OutcomeCard = ({ icon, title }) => {
    return (
        <div className='bg-white flex flex-col items-center justify-center rounded-2xl px-6 md:px-10 py-10 md:py-20 gap-3'>
            <div className='bg-[#F0F2FF] p-4 rounded-3xl'><Image src={icon} alt="outcome_icon" height={30} width={30} /></div>
            <h3 className='text-sm md:text-2xl font-bold text-center'>{title}</h3>
        </div>
    )
}