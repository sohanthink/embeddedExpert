import { Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/home/Footer";
import Chat from "@/components/common/Chat";
import Footer2 from "@/components/home/Footer2";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "EmbeddedExpert.io",
  description:
    "Embedded Expert is the world's largest hardware programming courses platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased scroll-smooth`}>
        <Navbar />
        {children}
        {/* <Chat /> */}
        {/* <Footer /> */}
        <Footer2 />
      </body>
    </html>
  );
}
