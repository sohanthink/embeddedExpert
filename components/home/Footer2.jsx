import React from 'react'
import Image from 'next/image'
import { GoArrowUpRight } from "react-icons/go";

import backgroundimage from '@/public/home/banner/bg_overlay_1.png'
import Link from 'next/link';
import { TiSocialFacebook } from 'react-icons/ti';
import { FaLinkedinIn } from 'react-icons/fa';
import CommonButton from '../common/Button';

const Footer2 = () => {
    return (
        <section className='space-y-10 px-5 py-10 md:py-24 relative'>
            <div className="absolute inset-0 -z-20 bg-black">
                <Image
                    src={backgroundimage}
                    alt="Background"
                    className="w-full h-full object-cover bg-cover"
                />
                <div className="absolute inset-0"></div>
            </div>

            <div className='mx-auto text-center space-y-6 text-white relative z-10'>
                <h1 className='text-4xl md:text-5xl font-bold'>Let's Create Something Great</h1>
                <p className='text-xl'>
                    We shift you from today’s reality to tomorrow’s potential, ensuring
                </p>
                <div className='flex flex-col sm:flex-row justify-center gap-4 pt-6'>
                    <CommonButton link='' text='Join a Free Webinar' varient='empty' />
                    <CommonButton link='' text='Explore Courses and Training' varient='webinar' />
                    <CommonButton link='' text='Book a Corporate Consultation' varient='webinar' />
                </div>
            </div>

            <div className='container flex justify-between pt-10'>
                <div className='flex gap-3'>
                    <Link href='#'>
                        <div className='p-2 rounded-full border border-transparent text-black bg-white hover:bg-transparent hover:border hover:border-white transition-all duration-400 hover:text-white text-xl cursor-pointer'><TiSocialFacebook /></div>
                    </Link>
                    <Link href='#'>
                        <div className='p-2 rounded-full border border-transparent text-black bg-white hover:bg-transparent hover:border hover:border-white transition-all duration-400 hover:text-white text-xl cursor-pointer'> <FaLinkedinIn /></div>
                    </Link>
                </div>

                <div className='hidden md:block'>
                    <ul className='flex gap-8 text-white'>
                        <li><Link href='#'>Home</Link></li>
                        <li><Link href='#'>Courses</Link></li>
                        <li><Link href='#'>Corporate training</Link></li>
                        <li><Link href='#'>Innovators hub</Link></li>
                    </ul>
                </div>
            </div>

            <div className='container border border-white/30'></div>

            <div className='flex items-center justify-center'>
                <ul className='flex gap-8 text-white'>
                    <li><Link href='#'>Privacy Policy</Link></li>
                    <li><Link href='#'>Terms & Conditions</Link></li>
                </ul>
            </div>
        </section>
    )
}

export default Footer2