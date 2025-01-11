'use client';

import React, { useRef, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import Image from 'next/image';
import cesar from "@/public/home/testimonial/cesar.jpeg";
import simon from "@/public/home/testimonial/simon.jpg";
import abigali from "@/public/home/testimonial/abigali.png";
import marvin from "@/public/home/testimonial/marvin.png";

import { PiArrowCircleLeftThin } from "react-icons/pi";
import { PiArrowCircleRightThin } from "react-icons/pi";
import { IoMdStar } from "react-icons/io";


import Heading from '../common/Heading';
import SubHeading from '../common/SubHeading';

const testimonialData = [
    {
        id: 1,
        name: "Cesar Cassiolato",
        designation: "Electrical Engineer",
        image: cesar,
        rating: 4.7,
        review: "The courses provide excellent content and effective teaching methods, ensuring high-quality learning. With years of experience in firmware for industrial automation, the learner appreciated the deep dive into the STM32 family. Highly recommended for their great cost/benefit ratio.",
    },
    {
        id: 2,
        name: "Simon Morrison",
        designation: "Freelance Firmware Developer & Consultant, Canada",
        image: simon,
        rating: 4.9,
        review: "I have done several of the EmbeddedExpertIO courses. I have enjoyed all of them and gained valuable additional knowledge and skills. Has helped me to obtain more work in my freelancing business.",
    },
    {
        id: 3,
        name: "Abigail J.",
        designation: "A Student of EmbeddedExpertIO Platform.",
        image: abigali,
        rating: 5.0,
        review: "I thought this was going to be a course that followed another book, but when he directed us to the user/dev documentation to find answers, I saw this was something special. Problem-solving should always be at the focus of any programming course, even above syntaxt and technology. Very good start to this course.",
    },
    {
        id: 4,
        name: "Marvin",
        designation: "A Student of EmbeddedExpertIO Platform.",
        image: marvin,
        rating: 5.0,
        review: "Very enlightening and eye opening .I always wondered about how different logic gates come together to create a microarchitecture and then and instruction set and then and then a full fledged architecture like ARM . This course has been able to explain all of that. Looking forward to the rest of the course.",
    },
];

const Testimonial = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        if (prevRef.current && nextRef.current) {
            // Update Swiper navigation elements
            const swiper = document.querySelector('.swiper').swiper;
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, []);

    return (
        <div className="relative bg-tertiary py-10 md:py-24">
            <Heading cn="pb-10" text="Testimonial" />
            <Swiper
                spaceBetween={10}
                breakpoints={{
                    640: {
                        spaceBetween: 10,
                    },
                    768: {
                        spaceBetween: 30,
                    },
                    1024: {
                        spaceBetween: 40,
                    },
                }}
                slidesPerView={1.8}
                centeredSlides={true}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    // Assign navigation refs to Swiper
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                {
                    testimonialData.map((item) => (
                        <SwiperSlide key={item.id} className='bg-white rounded-md'>
                            <div className='flex flex-col items-center justify-center gap-1 md:gap-2 text-center px-4 md:px-7 h-96 md:h-64'>
                                <Image src={item.image} alt='profile image' className='rounded-full w-10 border border-primary/50' />
                                <SubHeading text={item.name} />
                                <h5 className='text-sm text-black-900'>{item.designation}</h5>
                                <p className='text-black text-xs md:text-sm'>{item.review}</p>
                                <div className='flex items-center gap-2'>
                                    <span className='text-black font-semibold'>{item.rating}</span>
                                    {[...Array(5)].map((_, index) => (
                                        <IoMdStar key={index} className='text-yellow-500' />
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            {/* Custom navigation buttons */}
            <div className='flex gap-3 items-center justify-center pt-10'>
                <button ref={prevRef}>
                    <PiArrowCircleLeftThin className='text-5xl text-secondary hover:text-primary-300 ease-linear duration-200 transition-all' />
                </button>
                <button ref={nextRef}>
                    <PiArrowCircleRightThin className='text-5xl text-secondary hover:text-primary-300 ease-linear duration-200 transition-all' />
                </button>
            </div>
        </div>
    );
};

export default Testimonial;
