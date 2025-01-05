import Link from 'next/link';
// import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

// const Button = ({ link, text }) => {
//     return (
//         <Link href={link} className='bg-primary hover:bg-secondary transition-all duration-300 ease-linear text-white px-4 py-2 rounded-full inline-flex items-center gap-2 cursor-pointer'>
//             {text}<IoIosArrowRoundForward />
//         </Link>
//     )
// }

// export default Button

// "use client";
import React from "react";
import { Button } from "../ui/moving-border";

export default function MovingBorderDemo({ link, text }) {
    return (
        <div>
            <Button
                borderRadius="1.75rem"
                className="bg-primary hover:bg-secondary transition-all duration-300 ease-linear text-white px-4 py-1 rounded-full cursor-pointer"
            >
                <Link href={link} className='inline-flex items-center gap-2 text-nowrap'>
                    {text}<IoIosArrowRoundForward />
                </Link>
            </Button>
        </div>
    );
}