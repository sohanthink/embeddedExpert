import React from 'react'
import SubHeading from '../common/SubHeading'
import CommonButton from '../common/Button'
import { BackgroundLines } from '../ui/background-Lines'

const Banner = () => {
    return (
        <BackgroundLines className='w-full h-full'>
            <div className='w-full h-[80vh] md:h-screen flex justify-center items-center'>
                <div className='container bg-tertiary rounded-lg'>
                    <div className='flex flex-col items-center justify-center px-5 md:px-64 py-20 md:py-44 space-y-6'>
                        <h1 className='text-black text-2xl md:text-5xl font-extrabold leading-normal capitalize text-center'>Become An EmbeddedExpertIO <br /><span className='text-primary'> Affiliate </span> Partner.</h1>
                        <SubHeading cn="text-center" text="Join the #1 Affiliate Program in Embedded Programming and Earn up to 40% Commissions on Everything! Promote high-quality courses and resources, and enjoy exclusive perks, timely payouts, and dedicated support." />
                        <CommonButton varient='simple' link="/" text="Click Here to Register" />
                    </div>
                </div>
            </div >
        </BackgroundLines>
    )
}

export default Banner