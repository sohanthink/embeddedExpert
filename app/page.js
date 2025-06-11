import SubscribeCard from "@/components/common/SubscribeCard";
import Banner from "@/components/home/Banner";
import BannerV2 from "@/components/home/BannerV2";
import Category from "@/components/home/Category";
import Certificate from "@/components/home/Certificate";
import ContactUs from "@/components/home/ContactUs";
import Courses from "@/components/home/Courses";
import Developer from "@/components/home/Developer";
import Expert from "@/components/home/Expert";
import Growth from "@/components/home/Growth";
import Library from "@/components/home/Library";
import Technolgy from "@/components/home/Technology";
import Testimonial from "@/components/home/Testimonial";
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
      {/* <Courses /> */}
      {/* <Expert /> */}
      {/* <Category /> */}
      <Certificate />
      {/* <Library /> */}
      {/* <WhitePaper /> */}
      {/* <Testimonial /> */}
      <ContactUs />
      <SubscribeCard />
    </>
  );
}
