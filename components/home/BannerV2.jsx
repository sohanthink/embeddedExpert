import Image from 'next/image';

import star from '@/public/home/banner/star.png';
import cap from '@/public/home/banner/cap.png';
import map from '@/public/home/banner/map.png';
import clock from '@/public/home/banner/clock.png';

const BannerV2 = () => {
    return (
        <section className="relative h-screen">
            {/* Background Image (Poster) */}
            <div className="absolute inset-0">
                <Image
                    src="/home/banner/videobanner.png"
                    alt="Banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Video (Uses `poster` to show the image before loading) */}
            <div className="absolute inset-0">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    poster="/home/banner/videobanner.png"
                >
                    <source src="/home/banner/banner.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20"></div>
            </div>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col justify-center h-full container space-y-5 p-5 md:p-0">
                <h1 className="text-white text-2xl md:text-[55px] font-extrabold leading-none capitalize pr-0 md:pr-[50%]">
                    The <span className="bg-gradient-to-r from-primary via-pink-500 to-pink-700 bg-clip-text text-transparent">Ultimate</span> Platform for Embedded Systems Career Development.
                </h1>
                <p className="text-base md:text-lg text-white pr-0 md:pr-[50%]">
                    Learn the most relevant embedded systems development skills for today’s market. From ‘hello world’ to building your own Realtime Operating System (RTOS).
                </p>
                <div className='flex flex-wrap md:flex-row gap-1 justify-start items-center'>
                    <Card src={star} number='17,000' title="review" />
                    <Card src={cap} number='120,000' title="Students" />
                    <Card src={map} number='170' title="countries" />
                    <div className='space-y-1 md:space-y-2 w-full md:w-auto'>
                        <h4 className='text-white'>This Month</h4>
                        <Card src={clock} number='24,420' title="minutes" gradient />
                        <h4 className='text-white'>Of lessons completed this month.</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerV2;


export const Card = ({ src, number, title, gradient }) => {
    return (
        <div className={`flex gap-3 items-center justify-start md:justify-center border border-[#D50075]/40 p-5 rounded-lg h-16 md:h-32 w-full md:w-auto ${gradient ? 'bg-gradient-to-r from-primary via-pink-500 to-pink-700' : ''}`}>
            <Image src={src} alt="Icon" width={45} height={45} />
            <div>
                <h4 className='text-white text-2xl md:text-[50px] font-extrabold leading-none capitalize'>{number}+ <span className='text-xs md:text-sm font-normal'> {title}</span></h4>
            </div>
        </div>
    );
}