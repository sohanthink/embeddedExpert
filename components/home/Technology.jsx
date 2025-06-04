"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-card";

import Technology1 from "@/public/home/technology/1.png";
import Technology2 from "@/public/home/technology/2.png";
import Technology3 from "@/public/home/technology/3.png";
import Technology4 from "@/public/home/technology/4.png";
import Technology5 from "@/public/home/technology/5.png";
import Technology6 from "@/public/home/technology/6.png";
import Technology7 from "@/public/home/technology/7.png";
import Heading from "../common/Heading";

export default function Technolgy() {
    return (
        <section className='flex-col py-8 md:py-24 px-0 md:px-16 justify-center items-center'>
            <Heading cn="pb-10" text="Technologies Covered" />
            <InfiniteMovingCards
                items={TechnologyDATA}
                direction="right"
                speed="slow" />
        </section>
    )
}

const TechnologyDATA = [
    {
        id: 1,
        image: Technology1,
        imageAlt: 'Technolog_image',
    },
    {
        id: 2,
        image: Technology2,
        imageAlt: 'client_image',
    },
    {
        id: 3,
        image: Technology3,
        imageAlt: 'client_image',
    },
    {
        id: 4,
        image: Technology4,
        imageAlt: 'client_image',
    },
    {
        id: 5,
        image: Technology5,
        imageAlt: 'client_image',
    },
    {
        id: 6,
        image: Technology6,
        imageAlt: 'client_image',
    },
    {
        id: 7,
        image: Technology7,
        imageAlt: 'client_image',
    }
]
