'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Heading from '../common/Heading';
import { CiStar } from "react-icons/ci";
import { FaQuoteRight } from "react-icons/fa";

import Image from 'next/image';
import p1 from '@/public/home/testimonial/p1.png' // Adjust the path as necessary
import p2 from '@/public/home/testimonial/p2.png' // Adjust the path as necessary

const Testimonial2 = () => {
    const testimonials = [
        {
            id: 1,
            rating: 5,
            content: "The courses provide excellent content and effective teaching methods, ensuring high-quality learning. With years of experience in firmware for industrial automation, the learner appreciated the deep dive into the STM32 family. Highly recommended for their great cost/benefit ratio.",
            author: "Jhon Stokes",
            position: "Founder",
            company: "Texox",
            image:
                p1
        },
        {
            id: 2,
            rating: 5,
            content: "The courses have been invaluable, teaching me skills I use in personal projects and helping me secure a role as a software engineer. I continue taking them to enhance my expertise in embedded systems. I highly recommend these courses and appreciate Israel for sharing his knowledge!",
            author: "Jhon Stokes",
            position: "Founder",
            company: "Texox",
            image: p2
        },
        {
            id: 3,
            rating: 5,
            content: "The courses provide excellent content and effective teaching methods, ensuring high-quality learning. With years of experience in firmware for industrial automation, the learner appreciated the deep dive into the STM32 family. Highly recommended for their great cost/benefit ratio",
            author: "Jhon",
            position: "Founders",
            company: "Texox",
            image: p1
        },
    ];

    return (
        <section className="py-8 md:py-24 bg-[#ECF1F9]">

            <Heading cn="pb-14" text="See How EmbeddedExpertIO Has Transformed Careers and Teams." />
            <div className="container">
                <div className="relative"> {/* Wrapper div */}
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                        pagination={{
                            clickable: true,
                            el: '.testimonial-pagination',
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="bg-white relative p-8 rounded-lg h-full flex flex-col mb-10">
                                    <div className="flex mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <span key={i} className="text-primary text-2xl"><CiStar />
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-gray-700 mb-6 flex-grow">{testimonial.content}</p>
                                    {/* triangle shape */}
                                    <div className="absolute -bottom-12 left-10 w-20 h-12">
                                        <div className="shape bg-white w-full h-full"></div>
                                    </div>
                                    {/* quote */}
                                    <div className="absolute bottom-4 right-8 text-[#2B4DFF54] text-3xl">
                                        <FaQuoteRight />
                                    </div>
                                </div>
                                <div className="mt-auto pl-14 pt-5">
                                    <div className="flex items-center">
                                        <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                                            <Image src={testimonial.image} alt={testimonial.author} className="rounded-full" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">{testimonial.author}</h4>
                                            <p className="text-gray-600 text-sm">
                                                {testimonial.position} <span className="text-primary">@ {testimonial.company}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Fixed pagination container */}
                    <div className="testimonial-pagination absolute bottom-0 left-0 right-0 flex justify-center"></div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial2;