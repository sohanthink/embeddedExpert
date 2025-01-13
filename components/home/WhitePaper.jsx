import Image from 'next/image'
import React from 'react'
import Button from '../common/Button'

import paper from "@/public/home/library/library.jpeg"
import course3 from "@/public/home/courses/course3.jpeg";

const WhitePaper = () => {
    return (
        <section className='container p-5 md:p-0 pb-8 md:pb-16'>
            <HorizentalPaper />
            <div className='flex flex-col md:flex-row gap-10 md:gap-16 mt-10 md:mt-16'>
                <div className='w-full md:w-1/2'>
                    <VerticalPaper
                        cn="bg-[#FBE2F0] hover:bg-[#E1E6FB]"
                        title="Discover Key Strategies: Get the White Paper Now."
                        desc="Unlock a comprehensive analysis of embedded systems with our in-depth white paper. Download now to gain valuable insights and practical solutions tailored for professionals in the embedded technology industry."
                        src={paper}
                        download="/"
                        online="/"
                    />
                </div>
                <div className='w-full md:w-1/2'>
                    <VerticalPaper
                        cn="bg-[#E9FBFF] hover:bg-[#E1E6FB]"
                        title="Discover Key Strategies: Get the White Paper Now."
                        desc="Unlock a comprehensive analysis of embedded systems with our in-depth white paper. Download now to gain valuable insights and practical solutions tailored for professionals in the embedded technology industry."
                        src={course3}
                        download="/"
                        online="/"
                    />
                </div>
            </div>
        </section>
    )
}

export default WhitePaper

const HorizentalPaper = () => {
    return (
        <div className='bg-[#E1E6FB] flex flex-col md:flex-row gap-5 md:gap-10 p-6 md:p-16 hover:bg-[#FBE2F0] transition-all ease-linear duration-300 hover:shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.15)]'>
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

const VerticalPaper = ({ title, desc, src, download, online, cn }) => {
    return (
        <div className={`flex flex-col gap-5 md:gap-10 p-6 md:p-16 transition-colors ease-linear duration-300 hover:shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.15)] ${cn}`}>
            <div className='w-full'>
                <Image className='rounded-md object-cover w-full' src={src} alt='white paper' />
            </div>
            <div className='flex flex-col justify-center items-center space-y-3 md:space-y-6 w-full'>
                <h3 className='text-black font-bold text-2xl md:text-4xl capitalize text-center'>{title}</h3>
                <h4 className='text-black-900 text-base md:text-xl text-center'>{desc}</h4>
                <div className='flex gap-2'>
                    <Button text='Download' varient="download" link={download} />
                    <Button text='See Online' varient="reading" link={online} />
                </div>
            </div>
        </div>
    )
}