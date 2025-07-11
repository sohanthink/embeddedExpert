
import Image from "next/image";
import CommonButton from "../common/Button";
import bannerarrow from "@/public/corporatetraining/bannerarrow.png"
import bannershape from "@/public/corporatetraining/bannerspape.png"


const Banner = ({ heading, subheading, btnText, btnLink, img, variant }) => {
    return (
        <section className="relative h-screen">
            <Image
                className="absolute inset-0 w-full h-full object-cover brightness-[.9] backdrop-contrast-125 backdrop-brightness-110"
                src={img}
                alt="banner_coding_image"
                layout="fill"
                objectFit="cover"
            />

            {/* overlay */}
            <div className="absolute top-0 left-0 bg-[#2B4DFF1C]"></div>

            {
                variant != 'innovators' && (
                    <Image
                        className="absolute -bottom-16 left-0 "
                        src={bannershape}
                        alt="Banner Shape"
                    />
                )
            }

            <div className="relative z-10 flex flex-col justify-center h-full container space-y-5 p-5 md:p-0">
                <div className="relative">
                    <h1 className={`text-2xl md:text-[64px] font-bold leading-none capitalize  ${variant === 'innovators' ? 'text-white md:pr-[25%]' : 'text-black md:text-[#282C32] md:pr-[50%]'}`}>
                        {heading}
                    </h1>

                    {
                        variant != 'innovators' && (
                            <Image
                                src={bannerarrow}
                                alt="Banner Arrow"
                                width={100}
                                height={100}
                                className="absolute top-4 md:top-20 left-52 md:left-[28%]"
                            />
                        )
                    }

                </div>

                <p className={`text-base md:text-lg md:pr-[60%] ${variant === 'innovators' ? 'text-white' : 'text-white md:text-[#282C32]'}`}>
                    {subheading}
                </p>
                <div className="inline">
                    <CommonButton text={btnText} link={btnLink} cn='' varient='webinar' />
                </div>

            </div>
        </section>
    );
};

export default Banner;
