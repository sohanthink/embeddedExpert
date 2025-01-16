import React from 'react'
import SubHeading from '../common/SubHeading'
import CommonButton from '../common/Button'

const Banner = () => {
    return (
        <div className='container bg-tertiary mt-20'>
            <div className='flex flex-col md:items-center justify-center px-5 md:px-0 items-start py-20 md:py-32 space-y-6'>
                <h1 className='text-black text-2xl md:text-5xl font-extrabold leading-normal capitalize'>Become An EmbeddedExpertIO <span className='text-primary'> Affiliate </span> Partner.</h1>
                <SubHeading cn="text-start md:text-center" text="Join the #1 Affiliate Program in Embedded Programming and Earn up to 40% Commissions on Everything! Promote high-quality courses and resources, and enjoy exclusive perks, timely payouts, and dedicated support." />
                <CommonButton varient='simple' link="/" text="Click Hare to Register" />
            </div>
        </div>
    )
}

export default Banner