import SubscribeCard from "@/components/common/SubscribeCard";
import Banner from "@/components/home/Banner";
import BannerV2 from "@/components/home/BannerV2";
import Category from "@/components/home/Category";
import Certificate from "@/components/home/Certificate";
import ContactUs from "@/components/home/ContactUs";
import Courses from "@/components/home/Courses";
import Developer from "@/components/home/Developer";
import Expert from "@/components/home/Expert";
import Founder from "@/components/home/Founder";
import Growth from "@/components/home/Growth";
import Library from "@/components/home/Library";
import Technolgy from "@/components/home/Technology";
import Testimonial from "@/components/home/Testimonial";
import Testimonial2 from "@/components/home/Testimonial2";
import Training from "@/components/home/Training";
import Upskill from "@/components/home/Upskill";
import WhitePaper from "@/components/home/WhitePaper";
import WhitePaper2 from "@/components/home/WhitePaper2";

import icon1 from "@/public/home/training/icon1.png";
import icon2 from "@/public/home/training/icon2.png";
import icon3 from "@/public/home/training/icon3.png";

export default function Home() {
  return (
    <>
      {/* <Banner /> */}
      <BannerV2 />
      <Technolgy />
      <WhitePaper2 />
      <Developer />
      <Growth />
      <Upskill />
      <Training
        heading="Training Solutions for Every Stage of Your Embedded Systems Career"
        title1="Embedded Mastery A-Z"
        description1="All-in-One Training for Embedded  Excellence"
        title2="AI-Driven Systems Mastery"
        description2="Advance with AI-Driven Systems Mastery"
        title3="Embedded Systems Project Management"
        description3="Lead, Innovate, Protect — Become an  Embedded Industry Leader"
        icon1={icon1}
        icon2={icon2}
        icon3={icon3}
      />
      <Certificate />
      <Testimonial2 />
      <Founder />
      {/* <Courses /> */}
      {/* <Expert /> */}
      {/* <Category /> */}
      {/* <Library /> */}
      {/* <WhitePaper /> */}
      {/* <Testimonial /> */}
      <ContactUs />
      <SubscribeCard
        heading="Get the Latest in Learning"
        subheading="Subscribe now to receive the latest course updates, expert tips, and exclusive offers, all designed to help you advance your skills and career."
      />
    </>
  );
}
