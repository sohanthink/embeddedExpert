import SubscribeCard from "@/components/common/SubscribeCard";
import Banner from "@/components/home/Banner";
import Category from "@/components/home/Category";
import Certificate from "@/components/home/Certificate";
import ContactUs from "@/components/home/ContactUs";
import Courses from "@/components/home/Courses";
import Expert from "@/components/home/Expert";
import Library from "@/components/home/Library";
import Technolgy from "@/components/home/Technology";
import Testimonial from "@/components/home/Testimonial";
import WhitePaper from "@/components/home/WhitePaper";

export default function Home() {
  return (
    <>
      <Banner />
      <Technolgy />
      <Courses />
      <Expert />
      <Category />
      <Certificate />
      <Library />
      <WhitePaper />
      <Testimonial />
      <ContactUs />
      <SubscribeCard />
    </>
  );
}
