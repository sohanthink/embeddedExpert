import Image from 'next/image';

const BannerV2 = () => {
    return (
        <section className="relative h-screen">
            {/* Background Image (Poster) */}
            <div className="absolute inset-0">
                <Image
                    src="/home/videobanner.png"
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
                    poster="/home/videobanner.png"
                >
                    <source src="/home/banner.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20"></div>
            </div>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col justify-center h-full container space-y-3 p-5 md:p-0">
                <h1 className="text-white text-2xl md:text-[55px] font-extrabold leading-none capitalize pr-0 md:pr-[50%]">
                    The <span className="text-primary stroke-text">Ultimate</span> Platform for Embedded Systems Career Development.
                </h1>
                <p className="text-base md:text-lg text-white pr-0 md:pr-[50%]">
                    Learn the most relevant embedded systems development skills for today’s market. From ‘hello world’ to building your own Realtime Operating System (RTOS).
                </p>
            </div>
        </section>
    );
};

export default BannerV2;
