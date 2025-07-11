'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import CommonButton from "../common/Button";

// Image paths
const assets = {
    star: "/home/banner/star.png",
    cap: "/home/banner/cap.png",
    map: "/home/banner/map.png",
    clock: "/home/banner/clock.png",
};

const BannerV2 = () => {
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

    const { review = 17000, students = 120000, countries = 170, minutes = 24422 } = bannerData[0] || {};

    return (
        <section className="relative h-screen">
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover brightness-[.9] backdrop-contrast-125 backdrop-brightness-110"
                autoPlay
                loop
                muted
                playsInline
                poster="/home/banner/videobanner.png"
            >
                <source src="/home/banner/banner.mov" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/5"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-full container space-y-5 p-5 md:p-0">
                <h1 className="text-white text-2xl md:text-[55px] font-extrabold leading-none capitalize md:pr-[40%]">
                    Master{" "}
                    <span className="bg-gradient-to-r from-primary via-pink-500 to-pink-700 bg-clip-text text-transparent">
                        Embedded
                    </span>{" "}
                    Systems and Lead Innovation in the Age of Intelligent Devices.
                </h1>

                <p className="text-base md:text-lg text-white md:pr-[50%]">
                    Training the next generation of engineers and innovators — from fundamentals to  high-performance real-world systems.
                </p>
                <div className="inline">
                    <CommonButton text="Start Learning" link='#' cn='' varient='webinar' />
                </div>

                {/* Stats Section */}
                <div className="flex flex-wrap md:flex-row gap-3 justify-start items-center">
                    <Card src={assets.star} cn='min-w-[220px]' number={loading ? '...' : review} title="Reviews" />
                    <Card src={assets.cap} cn='min-w-[230px]' number={loading ? '...' : students} title="Students" />
                    <Card src={assets.map} cn='min-w-[150px]' number={loading ? '...' : countries} title="Countries" />
                    <div className="space-y-1 md:space-y-2 w-full md:w-auto">
                        <h4 className="text-white">This Month</h4>
                        <Card src={assets.clock} cn='min-w-[220px]' number={loading ? '...' : minutes} title="Minutes" gradient />
                        <h4 className="text-white">Of lessons completed this month.</h4>
                    </div>
                </div>

            </div>
        </section>
    );
};

// Card Component with Animated Counter
const Card = ({ src, number, title, gradient, cn }) => {
    return (
        <div
            className={`flex gap-3 items-center justify-start md:justify-center border border-white/80 p-5 rounded-2xl h-16 md:h-28 w-full md:w-auto ${cn}
      ${gradient ? "bg-gradient-to-r from-primary via-pink-500 to-pink-700 text-white" : "bg-[#00000080]"}`}
        >
            <Image src={src} alt="Icon" width={45} height={45} />
            <div className={`${cn}`}>
                <h4 className="text-white text-2xl md:text-[50px] font-extrabold leading-5 md:leading-6 capitalize">
                    <CountUp start={0} end={number || 0} duration={2.5} separator="," />
                    + <br />
                    <span className="text-xs md:text-sm font-normal">{title}</span>
                </h4>
            </div>
        </div>
    );
};

export default BannerV2;
