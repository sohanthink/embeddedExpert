import Banner from "@/components/home/Banner";
import Category from "@/components/home/Category";
import Certificate from "@/components/home/Certificate";
import Courses from "@/components/home/Courses";
import Expert from "@/components/home/Expert";
import Library from "@/components/home/Library";
import Technolgy from "@/components/home/Technology";
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
    </>
  );
}
