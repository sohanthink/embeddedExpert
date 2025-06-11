'use client'

import Image from 'next/image'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import logo from "@/public/Logo.png"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import data from '../../data/data.json'
import lessonImg from "@/public/home/courses/course1.jpeg";
import CourseCard from './CourseCard'
import { debounce } from 'lodash';
import { IoMdClose } from "react-icons/io";
import { Input } from '../ui/input'


const Navbar = () => {
    const courses = data.data[8]?.courses || [];
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCourses, setFilteredCourses] = useState([]);
    const searchRef = useRef(null);
    const inputRef = useRef(null);

    // Debounced search function
    const debouncedSearch = useCallback(
        debounce((query) => {
            const filtered = query
                ? courses.filter((course) => {
                    const title = course.name ? course.name.toLowerCase() : "";
                    return title.includes(query.toLowerCase());
                })
                : [];
            setFilteredCourses(filtered);
        }, 300),
        [courses]
    );

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        debouncedSearch(value); // Trigger debounced search
    };

    const handleClickOutside = (event) => {

        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setIsSearchOpen(false);
        }
    };

    useEffect(() => {
        if (isSearchOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            inputRef.current?.focus();
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSearchOpen]);

    return (
        <nav className='container md:w-[70%] absolute md:fixed md:bg-white rounded-full top-0 md:top-5 left-1/2 transform -translate-x-1/2 flex justify-between items-center px-5 md:px-10 py-4 z-[999]'>
            <div className='w-32 md:w-44'>
                <Link href='/'><Image src={logo} alt='logo' /></Link>
            </div>
            <div className='flex gap-3 md:gap-8 items-center'>
                <ul className={`text-black gap-8 text-sm ${isMenuOpen ? 'flex h-[85vh] items-center justify-center absolute top-0' : 'hidden'} md:flex flex-col md:flex-row md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-5 md:p-0 z-10`}>
                    <li>
                        <Link href='/' className={pathname === '/' ? 'text-blue-500 font-bold' : 'text-black'} onClick={closeMenu}>Home</Link>
                    </li>
                    <li>
                        <Link href='/#contact' className={pathname === '/#contact' ? 'text-blue-500 font-bold' : 'text-black'} onClick={closeMenu}>Get In Touch</Link>
                    </li>
                    <li>
                        <Link href='/affiliate' className={pathname === '/affiliate' ? 'text-blue-500 font-bold' : 'text-black'} onClick={closeMenu}>Affiliate</Link>
                    </li>
                    <li>
                        <Link href='/resources' className={pathname === '/resources' ? 'text-blue-500 font-bold' : 'text-black'} onClick={closeMenu}>Resources</Link>
                    </li>
                    <li>
                        <Link href='/courses' className={pathname === '/courses' ? 'text-blue-500 font-bold' : 'text-black'} onClick={closeMenu}>Join A Course</Link>
                    </li>
                    <li>
                        <button onClick={toggleSearch} className='text-black flex gap-3 items-center justify-center'><IoSearch />Search</button>
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
            {isSearchOpen && (
                <div ref={searchRef} className='absolute top-24 left-1/2 transform -translate-x-1/2 bg-[#10192cf3]/95 p-5 rounded shadow-lg z-20 w-[95%] h-[60vh] overflow-y-auto'>
                    <div className='flex justify-center items-center gap-3'>

                        <Input
                            type='text'
                            placeholder='Search courses here ..'
                            className='border-[0.1px] rounded pl-8 pr-2 py-1 text-black text-sm w-full'
                            value={searchQuery}
                            onChange={handleSearchChange}
                            ref={inputRef}
                        />

                        <div onClick={toggleSearch} className='bg-red-500 p-2 rounded-md cursor-pointer text-white'>
                            <IoMdClose />
                        </div>
                    </div>

                    {searchQuery && filteredCourses.length > 0 && (
                        <span className='mt-4 font-medium p-5 text-white'>{filteredCourses.length} courses found</span>
                    )}

                    <div className='mt-2 grid grid-cols-1 md:grid-cols-2 gap-4 p-5'>
                        {searchQuery && filteredCourses.length > 0 ? (
                            filteredCourses.map((course, index) => (
                                <CourseCard
                                    key={index}
                                    image={course.image || lessonImg}
                                    alt={course.name}
                                    category="Best Selling"
                                    title={course.name}
                                    lesson={course.lesson || "N/A"} // is missing
                                    time={course.time || "N/A"} // is missing
                                    link={course.course_link || "#"}
                                />
                            ))
                        ) : searchQuery ? (
                            <p className='text-white'>No courses found for: {searchQuery}</p>
                        ) : null}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar