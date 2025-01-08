import Link from 'next/link';
import { IoIosArrowRoundForward } from "react-icons/io";

import React from "react";
import { Button } from "../ui/moving-border";

export default function MovingBorderDemo({ link, text }) {
    return (
        <Button
            borderRadius="1.75rem"
            className="bg-primary hover:bg-secondary transition-all duration-300 ease-linear text-white px-4 py-1 rounded-full cursor-pointer"
        >
            <Link href={link} className='inline-flex items-center gap-2 text-nowrap'>
                {text}<IoIosArrowRoundForward />
            </Link>
        </Button>
    );
}