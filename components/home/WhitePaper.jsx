import Image from 'next/image'
import React from 'react'

import paper from "@/public/home/library/library.jpeg"
import SubHeading from '../common/SubHeading'
import Button from '../common/Button'

const WhitePaper = () => {
    return (
        <div className='container p-5 md:p-0'>
            <HorizentalPaper />
            <div className='flex flex-col md:flex-row gap-10 md:gap-16 mt-10 md:mt-16'>
                <div className='w-full md:w-1/2'><VerticalPaper /></div>
                <div className='w-full md:w-1/2'><VerticalPaper /></div>
            </div>
        </div>
    )
}

export default WhitePaper

const HorizentalPaper = () => {
    return (
        <div className='bg-[#E1E6FB] flex flex-col md:flex-row gap-5 md:gap-10 p-6 md:p-16 hover:bg-[#FBE2F0] transition-all ease-linear duration-300'>
            <div className='w-full'>
                <Image className='rounded-md' src={paper} alt='white paper' />
            </div>
            <div className='flex flex-col justify-center space-y-3 md:space-y-6 w-full'>
                <h3 className='text-black font-bold text-2xl md:text-4xl capitalize'>Discover Key Strategies: Get the White Paper Now.</h3>
                <h4 className='text-black-900 text-base md:text-xl'>Unlock a comprehensive analysis of embedded systems with our in-depth white paper. Download now to gain valuable insights and practical solutions tailored for professionals in the embedded technology industry.</h4>
                <div className='flex gap-2'>
                    <Button text='Download' varient="download" link="/" />
                    <Button text='See Online' varient="reading" link="/" />
                </div>
            </div>
        </div>
    )
}

const VerticalPaper = () => {
    return (
        <div className='bg-[#FBE2F0] flex flex-col gap-5 md:gap-10 p-6 md:p-16 hover:bg-[#E1E6FB] transition-all ease-linear duration-300'>
            <div className='w-full'>
                <Image objectFit='cover' className='rounded-md' src={paper} alt='white paper' />
            </div>
            <div className='flex flex-col justify-center items-center space-y-3 md:space-y-6 w-full'>
                <h3 className='text-black font-bold text-2xl md:text-4xl capitalize text-center'>Discover Key Strategies: Get the White Paper Now.</h3>
                <h4 className='text-black-900 text-base md:text-xl text-center'>Unlock a comprehensive analysis of embedded systems with our in-depth white paper. Download now to gain valuable insights and practical solutions tailored for professionals in the embedded technology industry.</h4>
                <div className='flex gap-2'>
                    <Button text='Download' varient="download" link="/" />
                    <Button text='See Online' varient="reading" link="/" />
                </div>
            </div>
        </div>
    )
}