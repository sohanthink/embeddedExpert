import React from 'react'
import Heading from '../common/Heading'
import CommonButton from '../common/Button'
import Image from 'next/image'



const Training = ({ variant, heading, title1, description1, title2, description2, title3, description3, icon1, icon3, icon2 }) => {
    return (
        <section className={`py-8 md:py-24 ${variant == 'corporateLeadership' ? 'bg-white' : 'bg-[#F3F7FB]'}`}>
            <Heading cn="pb-10" text={heading} />
            <div className='grid grid-cols-1 md:grid-cols-3 container gap-2 md:gap-6 p-5 md:p-0'>
                <TrainingCard variant={variant} title={title1} description={description1} link="#" icon={icon1} />
                <TrainingCard variant={variant} title={title2} description={description2} link="#" icon={icon2} />
                <TrainingCard variant={variant} title={title3} description={description3} link="#" icon={icon3} />
            </div>
        </section>
    )
}

export default Training

export const TrainingCard = ({ title, description, link, icon, cn, variant }) => {
    return (
        <div className={`p-6 md:p-16 rounded-lg gap-2 md:gap-5 transition-shadow duration-300 flex flex-col h-full justify-center items-center ${cn} ${variant == 'corporateLeadership' ? 'bg-primary' : 'bg-white'}`}>

            <Image src={icon} alt={title} height={60} className={`mb-4 rounded-full p-4 ${variant == 'corporateLeadership' ? 'bg-white' : 'bg-primary'}`} />

            <h3 className={`text-xl font-semibold mb-2 text-center ${variant == 'corporateLeadership' ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
            <p className={`mb-2 flex-grow text-center ${variant == 'corporateLeadership' ? 'text-white' : 'text-gray-800'}`}>{description}</p>
            <div className="w-100">
                <CommonButton
                    text={`${variant === 'corporateLeadership' ? 'Read More' : 'Apply Now'}`}
                    variant="simple"
                    link={link}
                    cn="px-10"
                />
            </div>
        </div>
    );
}