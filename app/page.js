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
      <Training />
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
      <SubscribeCard />
    </>
  );
}
