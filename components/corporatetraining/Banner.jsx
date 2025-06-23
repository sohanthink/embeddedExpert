'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import CommonButton from "../common/Button";
import corporate from "@/public/corporatetraining/corporate-training-banner.png"
import bannerarrow from "@/public/corporatetraining/bannerarrow.png"
import bannershape from "@/public/corporatetraining/bannerspape.png"


const Banner = () => {
    const [bannerData, setBannerData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBannerData() {
            try {
                const response = await fetch("/api/bannerdata");
                if (!response.ok) throw new Error("Failed to fetch data");

                const data = await response.json();
                setBannerData(data);
            } catch (error) {
                console.error("Error fetching banner data:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchBannerData();
    }, []);

    return (
        <section className="relative h-screen">
            <Image
                className="absolute inset-0 w-full h-full object-cover brightness-[.9] backdrop-contrast-125 backdrop-brightness-110"
                src={corporate}
                alt="Corporate Training"
                layout="fill"
                objectFit="cover"
            />

            {/* overlay */}
            <div className="absolute top-0 left-0 bg-[#2B4DFF1C]"></div>

            <Image
                className="absolute -bottom-16 left-0 "
                src={bannershape}
                alt="Banner Shape"
            />


            <div className="relative z-10 flex flex-col justify-center h-full container space-y-5 p-5 md:p-0">
                <div className="relative">
                    <h1 className="text-[#282C32] text-2xl md:text-[64px] font-bold leading-none capitalize md:pr-[50%]">
                        Corporate Training<br /> Solutions for<br /> Engineering Teams
                    </h1>
                    <Image
                        src={bannerarrow}
                        alt="Banner Arrow"
                        width={100}
                        height={100}
                        className="absolute top-20 left-[28%]"
                    />
                </div>

                <p className="text-base md:text-lg text-[#282C32] md:pr-[70%]">
                    Equip your engineers with the skills to deliver secure, high-performance embedded  systems — at scale, on time, and with compliance confidence.
                </p>
                <div className="inline">
                    <CommonButton text="Book a Free Consultation" link='#' cn='' varient='webinar' />
                </div>

            </div>
        </section>
    );
};

export default Banner;
