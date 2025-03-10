'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import logo from "@/public/Logo.png"
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";
import { usePathname } from 'next/navigation'
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const handleSearch = (value) => {
        // Handle search logic here
        console.log(value);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    }
    return (
        <nav className='container md:w-[70%] absolute md:fixed md:bg-[#10192cf3] rounded-full top-0 md:top-5 left-1/2 transform -translate-x-1/2 flex justify-between items-center px-5 md:px-10 py-4 z-[999]'>
            <div className='w-32 md:w-44'><Link href='/'><Image src={logo} alt='logo' /></Link></div>
            <div className='flex gap-3 md:gap-8 items-center'>
                {/* {
                    pathname === '/courses' && (
                        <div className='relative hidden md:block'>
                            <input
                                type='text'
                                placeholder='Search here ..'
                                className='border-[0.1px] rounded pl-8 pr-2 py-1 text-black text-sm'
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                            <CiSearch className='absolute left-2 top-1/2 transform -translate-y-1/2 text-black' />
                        </div>
                    )
                } */}
                <ul className={`text-black gap-8 text-sm ${isMenuOpen ? 'flex h-[85vh] items-center justify-center absolute top-0' : 'hidden'} md:flex flex-col md:flex-row md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-5 md:p-0 z-10`}>
                    <li>
                        <Link href='/' className={pathname === '/' ? 'text-blue-500 font-bold' : 'text-black md:text-white'} onClick={closeMenu}>Home</Link>
                    </li>
                    <li>
                        <Link href='/#contact' className={pathname === '/#contact' ? 'text-blue-500 font-bold' : 'text-black md:text-white'} onClick={closeMenu}>Get In Touch</Link>
                    </li>
                    <li>
                        <Link href='/affiliate' className={pathname === '/affiliate' ? 'text-blue-500 font-bold' : 'text-black md:text-white'} onClick={closeMenu}>Affiliate</Link>
                    </li>
                    <li>
                        <Link href='/resources' className={pathname === '/resources' ? 'text-blue-500 font-bold' : 'text-black md:text-white'} onClick={closeMenu}>Resources</Link>
                    </li>
                    <li>
                        <Link href='/courses' className={pathname === '/courses' ? 'text-blue-500 font-bold' : 'text-black md:text-white'} onClick={closeMenu}>Join A Course</Link>
                    </li>
                </ul>
                {
                    isMenuOpen ? (
                        <AiOutlineClose className='text-primary md:hidden text-2xl' onClick={toggleMenu} />
                    )
                        :

                        <RxHamburgerMenu className='text-primary md:hidden text-2xl' onClick={toggleMenu} />
                }
            </div>
        </nav>
    )
}

export default Navbar