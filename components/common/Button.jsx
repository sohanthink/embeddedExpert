import Link from 'next/link';
import { IoIosArrowRoundForward } from "react-icons/io";
import { LiaReadme } from "react-icons/lia";


import React from "react";
import { Button } from "../ui/moving-border";

import downloadIcon from "@/public/home/download-icon.svg";
import readingIcon from "@/public/home/reading-icon.svg";
import Image from 'next/image';

export default function CommonButton({ link, text, varient }) {
    return (
        <Button
            borderRadius="1.75rem"
            className={`bg-primary hover:bg-secondary transition-all duration-300 ease-linear text-white px-4 py-2 rounded-full cursor-pointer font-bold capitalize ${varient === 'reading' && 'bg-transparent border border-primary text-primary hover:text-white'}`}
        >
            {
                varient ?
                    varient === 'download'
                        ?
                        <Link href={link} className='inline-flex items-center justify-center gap-2 text-nowrap'>
                            {text}<Image className='w-4' src={downloadIcon} alt='download-icon' />
                        </Link>
                        :
                        varient === 'reading'
                            ?
                            <Link href={link} className='inline-flex items-center justify-center gap-2 text-nowrap'>
                                {text}<LiaReadme className='text-xl' />
                            </Link>
                            :
                            varient === 'simple'
                                ?
                                <Link href={link} className='inline-flex items-center justify-center gap-2 text-nowrap'>
                                    {text}
                                </Link>
                                :
                                <Link href={link} className='inline-flex items-center justify-center gap-2 text-nowrap'>
                                    {text}<IoIosArrowRoundForward className='text-xl' />
                                </Link>
                    :
                    <Link href={link} className='inline-flex items-center justify-center gap-2 text-nowrap'>
                        {text}<IoIosArrowRoundForward className='text-xl' />
                    </Link>
            }
        </Button>
    );
}