'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Navigation, Autoplay } from 'swiper/modules'; // Import Swiper modules
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import Heading from '@/components/common/Heading'; // Ensure this component exists and works
import CourseCard from '../common/CourseCard'; // Ensure this component is implemented correctly

import data from '../../data/data.json';

import lessonImg from '@/public/home/mainbaner.png'; // Ensure the image path is correct
import { PiArrowCircleLeftThin, PiArrowCircleRightThin } from 'react-icons/pi';
import { Cloud } from '@react-three/drei';

const CloudConnectivity = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // const courses = data.type === "course" ? data.courses : [];
        const courses = data.data[8].courses
        const CloudConnectivity = courses.filter((course) => course.category === "Cloud Connectivity");
        setCourses(CloudConnectivity);
    }, []);

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
        <section className="container clear-start mt-5 py-10 md:py-24 p-5 md:p-0">
            <Heading varient="nopx" cn="text-start mb-5" text="Cloud Connectivity" />

            <Swiper
                slidesPerView={5}
                grid={{
                    rows: 2,
                    fill: 'row',
                }}
                spaceBetween={20}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                modules={[Grid, Pagination, Navigation, Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1, // 1 slide per row on small screens
                        grid: { rows: 1 }, // Single row on small screens
                    },
                    768: {
                        slidesPerView: 2, // 2 slides per row on tablets
                        grid: { rows: 2 }, // Two rows on tablets
                    },
                    1024: {
                        slidesPerView: 3, // 3 slides per row on desktops
                        grid: { rows: 2 }, // Two rows on desktops
                    },
                    1440: {
                        slidesPerView: 4, // 4 slides per row on larger screens
                        grid: { rows: 2 }, // Two rows on larger screens
                    },
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                className="mySwiper"
            >
                {courses.map((course, index) => (
                    <SwiperSlide key={index}>
                        <CourseCard
                            image={course.image || lessonImg}
                            alt={course.name}
                            category="Best Selling"
                            title={course.name}
                            lesson="32"
                            time="30"
                            link={course.course_link}
                        />
                    </SwiperSlide>
                ))}
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
        </section>
    );
};

export default CloudConnectivity;
