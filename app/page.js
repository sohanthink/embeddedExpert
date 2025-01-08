import Banner from "@/components/home/Banner";
import Courses from "@/components/home/Courses";
import Expert from "@/components/home/Expert";
import Technolgy from "@/components/home/Technology";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <Technolgy />
      <Courses />
      <Expert />
    </>
  );
}
