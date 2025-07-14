import React from 'react';

import banner from "@/public/paper/paperbanner.png"
import paper1 from "@/public/paper/paper1.png"
import paper2 from "@/public/paper/paper2.png"
import Image from 'next/image';
import { IoCheckmark } from 'react-icons/io5';
import { TiSocialFacebook } from 'react-icons/ti';
import { FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

// Reusable card for the bottom right (e.g., Firmware Mastery)
const FirmwareMasteryCard = () => (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
        <div className="flex flex-col items-center gap-4">
            <Image src={banner} alt="banner" className='w-full rounded-lg object-cover' />
            <div>
                <h4 className="font-bold text-gray-800 text-base mb-1">Firmware Mastery</h4>
                <p className="text-xs text-gray-500 mb-2">Advanced System Architecture, Layered Firmware Design, Safety Critical Programming In C/C++</p>
                <a href="#" className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">Know More</a>
            </div>
        </div>
    </div>
);

const PaperDetails = () => {
    // Example right sidebar content (can be empty array to test scroll behavior)
    const rightCards = [
        {
            title: 'Product Details',
            price: '$12.88',
            button: 'Purchase',
        },
        {
            title: 'Instant Digital Download',
            content: 'Access the files immediately after the payment is confirmed. We will also send you an email with the file.'
        },
        {
            title: 'Product Information',
            content: (
                <div className="text-xs text-gray-700 space-y-1">
                    <div><b>White Paper – Business Development</b></div>
                    <div>by admin in Print Templates, Whitepaper</div>
                    <div>File Included: INDD, EPS, JPG</div>
                    <div>Compatible With: Adobe InDesign</div>
                    <div>Categories: Print Templates, Whitepaper</div>
                </div>
            )
        }
    ];

    return (
        <div className="min-h-screen py-8 px-2 md:px-0 mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
                {/* Left: Main Content */}
                <div className="md:w-2/3 w-full bg-white rounded-lg shadow p-6 overflow-auto">
                    {/* Main image and title */}
                    <div className="flex flex-col gap-6 mb-6">
                        <Image src={banner} alt="banner" className='w-full rounded-lg object-cover' />
                        <div className="flex-1 flex flex-col justify-center">
                            <h1 className="text-2xl md:text-3xl font-bold mb-2">White Paper – Business Development</h1>
                            <p className="text-gray-700 mb-4">
                                White Paper – Business Development, is a professional and simple template for your business reports. You can use this template as an information book, presentation book, proposal, magazine, and annual report for your company or business. With this template, you can easily improve the quality of your business books more neatly, attractively and professionally.
                            </p>
                            <p className="text-gray-700 mb-4">
                                This template is fully editable and can be customized in Adobe InDesign. You can edit texts and put your photos, Diagram, chart also you can edit colors of shapes and background, text colors. All editable, according to your needs.
                            </p>
                        </div>
                    </div>
                    {/* Features and images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <Image src={paper1} alt="banner" className='w-full rounded-lg object-cover' />
                        <Image src={paper2} alt="banner" className='w-full rounded-lg object-cover' />
                    </div>
                    {/* Features List */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-4">Features:</h2>
                        <ul className='space-y-4'>
                            <li className='flex gap-5 items-center'>
                                <div className='bg-[#2B4DFF24] p-2 rounded-lg'>
                                    <IoCheckmark className='text-primary font-bold text-lg h-5 w-5' />
                                </div>
                                <span className='font-bold text-lg'>WhitePaper ( 21cm x 29.7cm ) / A4</span>
                            </li>
                            <li className='flex gap-5 items-center'>
                                <div className='bg-[#2B4DFF24] p-2 rounded-lg'>
                                    <IoCheckmark className='text-primary font-bold text-lg h-5 w-5' />
                                </div>
                                <span className='font-bold text-lg'>Guest Expert Sessions (on certification, manufacturing, IP law)</span>
                            </li>
                            <li className='flex gap-5 items-center'>
                                <div className='bg-[#2B4DFF24] p-2 rounded-lg'>
                                    <IoCheckmark className='text-primary font-bold text-lg h-5 w-5' />
                                </div>
                                <span className='font-bold text-lg'>A4 size : 210×297 mm + 3 mm Bleeding</span>
                            </li>
                            <li className='flex gap-5 items-center'>
                                <div className='bg-[#2B4DFF24] p-2 rounded-lg'>
                                    <IoCheckmark className='text-primary font-bold text-lg h-5 w-5' />
                                </div>
                                <span className='font-bold text-lg'>Guest Expert Sessions (on certification, manufacturing, IP law)</span>
                            </li>
                            <li className='flex gap-5 items-center'>
                                <div className='bg-[#2B4DFF24] p-2 rounded-lg'>
                                    <IoCheckmark className='text-primary font-bold text-lg h-5 w-5' />
                                </div>
                                <span className='font-bold text-lg'>Neatly organized layers</span>
                            </li>
                        </ul>
                    </div>
                    {/* Note */}
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-4">Note:</h3>
                        <p className="text-gray-500 text-base">All images used here are just for preview purposes only & they are not included in main downloadable files.</p>
                    </div>
                    {/* Articles/Tips */}
                    <div className="mb-6">
                        <h3 className="font-bold mb-2">Some Articles Tips about Print Templates :</h3>
                        <ul className="space-y-1 text-blue-600 text-sm">
                            <li>Serendipity Font Review: A Handwritten Beauty For Creative Projects</li>
                            <li>Check Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do.</li>
                            <li>Check Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit,</li>
                            <li>Check Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do.</li>
                        </ul>
                    </div>
                    {/* Social icons */}
                    <div className='flex gap-3'>
                        <Link href='#'>
                            <div className='p-2 rounded-full border border-transparent text-white bg-primary-300 hover:bg-transparent hover:border hover:border-black transition-all duration-400 hover:text-black text-xl cursor-pointer'><TiSocialFacebook /></div>
                        </Link>
                        <Link href='#'>
                            <div className='p-2 rounded-full border border-transparent text-white bg-primary-300 hover:bg-transparent hover:border hover:border-black transition-all duration-400 hover:text-black text-xl cursor-pointer'> <FaLinkedinIn /></div>
                        </Link>
                    </div>
                </div>
                {/* Right: Sidebar Cards */}
                <div className="md:w-1/3 w-full flex flex-col gap-4 max-h-[90vh] md:sticky md:top-8 overflow-y-auto">
                    {rightCards.length > 0 ? (
                        <>
                            {rightCards.map((card, idx) => (
                                <div key={idx} className="bg-blue-50 rounded-lg shadow p-4 mb-2">
                                    <h4 className="font-bold text-white py-3 text-center bg-primary">{card.title}</h4>
                                    {card.price && <div className="text-3xl font-bold py-14 text-center">{card.price}</div>}
                                    {card.button && <button className="w-full bg-black text-white py-2 rounded font-semibold mb-2">{card.button}</button>}
                                    {card.content && <div className='p-5'>{card.content}</div>}
                                </div>
                            ))}
                            <FirmwareMasteryCard />
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default PaperDetails;