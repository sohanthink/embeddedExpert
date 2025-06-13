import Image from 'next/image'
import React from 'react'

import founder from '@/public/home/founder.png'
import CommonButton from '../common/Button'
import { GoArrowUpRight } from 'react-icons/go'
import { IoIosArrowRoundForward } from 'react-icons/io'

import sign from '@/public/home/ninsaw sign.png'

const Founder = () => {
    return (
        <section className='py-10 md:py-24 bg-[#F3F7FB]'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 container'>
                <div className='col-span-1'>
                    <Image src={founder} alt="Founder Image" width={500} height={400} />
                </div>
                <div className='space-y-6 col-span-1 md:col-span-2 flex flex-col justify-center'>
                    <h2 className='text-3xl font-semibold'> Founder’s Message</h2>
                    <p className='font-normal'>AlanGinsberg wasborninNew York andmoved toMiami, FLin1977. Hegraduated from Florida International University in 1981with aBachelor ofScience incriminal justice.Hethen attended NSUShepard BroadCollege ofLaw andgraduated withaJuris Doctorate degree in 1984. Alanlovedlaw school andstilltreasures thelatenightshe spent in the lawlibrary </p>
                    <div className='space-y-3'>
                        <span className='flex items-center gap-3 text-base font-semibold'><IoIosArrowRoundForward className='text-xl' /> Share your mission to train, inspire, and empower engineers globally.</span>
                        <span className='flex items-center gap-3 text-base font-semibold'><IoIosArrowRoundForward className='text-xl' /> Share your journey (author, inventor, entrepreneur).</span>
                        <span className='flex items-center gap-3 text-base font-semibold'><IoIosArrowRoundForward className='text-xl' /> Invite visitors to join a bigger movement — building the future of technology.</span>
                    </div>
                    <Image src={sign} alt="Founder Signature" width={150} height={50} />
                    <div>
                        <p className='font-2xl'> Founder of EmbeddedExpertIO and Award-Winning<br /> Inventor</p>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Founder