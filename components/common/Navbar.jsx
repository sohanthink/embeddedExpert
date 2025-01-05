'use client'

import Image from 'next/image'
import React from 'react'
import logo from "@/public/Logo.png"
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";
import { usePathname } from 'next/navigation'
import { RxHamburgerMenu } from "react-icons/rx";



const Navbar = () => {

    const pathname = usePathname();
    const handleSearch = (value) => {
        // Handle search logic here
        console.log(value);
    };

    return (
        <div className='container absolute left-1/2 transform -translate-x-1/2 flex justify-between items-center px-5 md:px-0 py-5 z-50'>
            <div className='w-32 md:w-44'><Link href='/'><Image src={logo} alt='logo' /></Link></div>
            <div className='flex gap-3 md:gap-8 items-center'>
                <ul className='text-black gap-8 text-sm hidden md:flex'>
                    <li>
                        <Link href='/' className={pathname === '/' ? 'text-blue-500' : ''}>Home</Link>
                    </li>
                    <li>
                        <Link href='#touch' className={pathname === '#touch' ? 'text-blue-500' : ''}>Get In Touch</Link>
                    </li>
                    <li>
                        <Link href='affiliate' className={pathname === '/affiliate' ? 'text-blue-500' : ''}>Affiliate</Link>
                    </li>
                    <li>
                        <Link href='resources' className={pathname === '/resources' ? 'text-blue-500' : ''}>Resources</Link>
                    </li>
                </ul>

                <div className='relative hidden md:block'>
                    <input
                        type='text'
                        placeholder='Search here ..'
                        className='border-[0.1px] rounded pl-8 pr-2 py-1 text-black text-sm'
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    <CiSearch className='absolute left-2 top-1/2 transform -translate-y-1/2 text-black' />
                </div>
                <RxHamburgerMenu className='text-black-300 md:hidden' />
            </div>
        </div>
    )
}

export default Navbar