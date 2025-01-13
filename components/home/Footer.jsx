import React from 'react'

import logo from "@/public/Logo.png"
import Image from 'next/image'
import Link from 'next/link'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";



const Footer = () => {
    return (
        <footer className='bg-gradient-to-r from-slate-900 to-slate-700 py-10 md:py-24'>
            <div className='container'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-5'>
                    <div className='p-5 space-y-4'>
                        <Link href='/'><Image src={logo} alt='logo' /></Link>
                        <p className='text-white text-sm md:text-base mt-4'>Empowering innovation through education in Embedded Systems.</p>
                        <div className='flex gap-3 '>
                            <Link href="/">
                                <div className='border border-primary hover:bg-primary rounded-full h-8 w-8 text-white flex items-center justify-center'>
                                    <TiSocialFacebook />
                                </div>
                            </Link>
                            <Link href="/">
                                <div className='border border-primary hover:bg-primary rounded-full h-8 w-8 text-white flex items-center justify-center'>
                                    <TiSocialLinkedin />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='p-5 pl-5 md:pl-20'>
                        <h2 className='text-white text-lg font-bold'>Community</h2>
                        <ul className='mt-2 space-y-3'>
                            <li className='text-white text-sm'><Link href='/'>Blogs</Link></li>
                            <li className='text-white text-sm'><Link href='/All Courses'>Courses</Link></li>
                            <li className='text-white text-sm'><Link href='/expert'>Forum</Link></li>
                            <li className='text-white text-sm'><Link href='/library'>LinkedIn</Link></li>
                        </ul>
                    </div>
                    <div className='p-5 pl-5 md:pl-20'>
                        <h2 className='text-white text-lg font-bold'>Quick Links</h2>
                        <ul className='mt-2 space-y-3'>
                            <li className='text-white text-sm'><Link href='/'>Home</Link></li>
                            <li className='text-white text-sm'><Link href='/courses'>Courses</Link></li>
                            <li className='text-white text-sm'><Link href='/expert'>Expert</Link></li>
                            <li className='text-white text-sm'><Link href='/library'>Library</Link></li>
                        </ul>
                    </div>
                    <div className='p-5 pl-5 md:pl-20'>
                        <h2 className='text-white text-lg font-bold'>Legal Information</h2>
                        <ul className='mt-2 space-y-3'>
                            <li className='text-white text-sm'><Link href='/'>Privacy & Policy</Link></li>
                            <li className='text-white text-sm'><Link href='/courses'>Terms & conditions</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer